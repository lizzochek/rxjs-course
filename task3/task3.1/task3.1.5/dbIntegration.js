const rx = require('rxjs');
const { Connection } = require('./connection');
const { DB } = require('./db');
const { Result } = require('./result');

class DBIntegration {
  constructor(oracledb, mysqldb) {
    this.oracledb = oracledb;
    this.mysqldb = mysqldb;
  }

  storeToDBs = (observable) => {
    return observable.pipe(
      rx.publish((sharedStream) => {
        const oracleTransaction = this.dbWriteTransaction(
          this.oracledb,
          sharedStream
        );
        const mysqlTransaction = this.dbWriteTransaction(
          this.mysqldb,
          sharedStream
        );

        const res = oracleTransaction.pipe(
          rx.zipWith(mysqlTransaction),
          rx.mergeMap((transactions) => {
            // Ensure Transaction is rolled back in case of failure
            // Ensure All transactions are rolled back in case any of written operations has failed
            console.log(transactions);
            if (!transactions[0].success || !transactions[1].success) {
              this.oracledb.rollbackTransaction(transactions[0].transactionId);
              this.mysqldb.rollbackTransaction(transactions[1].transactionId);
              return rx.of('Transactions were unsuccessfull', transactions);
            } else {
              return rx.of('Transactions were successfull ', transactions);
            }
          })
        );
        return res;
      })
    );
  };

  dbWriteTransaction = (db, dataSource) => {
    console.dir(db.open());
    let error;
    let data = [];
    dataSource.subscribe((x) => data.push(x));
    // Create a connection
    const connection = new Connection();

    const res = rx
      .concat(db.open(), connection.write(data), connection.close())
      .pipe(
        // Retry connection opening if it has failed (connection opening is retryable operation)
        rx.retry(3),
        rx.catchError(() => {
          error = true;
          return rx.of('Caught error');
        })
      )
      .subscribe((x) => console.log(x));

    if (error) {
      // In case of errors, send negative result
      return rx.of(new Result().error(db?.name));
    } else {
      // If everything worked fine send positive result
      return (
        // For testing, we will habe transaction IDs the same
        // Math.floor(Math.random() * 10000
        rx

          .of(new Result().ok(1000, db.name))
          // Ensure Transaction lasts less than 1 sec
          .pipe(rx.timeout(1000))
      );
    }
  };
}

module.exports = {
  DBIntegration,
};
