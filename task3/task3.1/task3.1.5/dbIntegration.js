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
    try {
      // Open db
      const res = db.open().pipe(
        // Retry connection opening if it has failed (connection opening is retryable operation)
        rx.retry(3),
        rx.catchError((err) => new Error())
      );
      res.subscribe((x) => console.log(x));
      // Create a connection
      const connection = new Connection();
      // Write data
      connection
        .write(dataSource)
        .pipe(rx.catchError((err) => new Error()))
        .subscribe((x) => console.log(x));
      // Close connection
      connection.close().subscribe((x) => console.log(x));

      // If everything worked fine send positive result
      return (
        rx
          .of(new Result().ok(Math.floor(Math.random() * 10000), db.name))
          // Ensure Transaction lasts less than 1 sec
          .pipe(rx.timeout(1000))
      );
    } catch (err) {
      // In case of errors, send negative result
      return rx.of(new Result().error(db.name));
    }
  };
}

module.exports = {
  DBIntegration,
};
