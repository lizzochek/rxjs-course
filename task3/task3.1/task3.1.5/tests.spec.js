const { result } = require('./index');
const { Result } = require('./result');
const { DBIntegration } = require('./dbIntegration');
const { DB } = require('./db');
const rx = require('rxjs');

describe('Task 3.1.5', () => {
  it('Returns values', (done) => {
    const resClass = new Result();
    const resErr = resClass.error('name');

    const oracle = new DB();
    oracle.open = () => rx.throwError(() => new Error('Error'));
    let integration = new DBIntegration(oracle, new DB());
    integration.dbWriteTransaction(oracle, rx.of('some data'));
    integration.storeToDBs(rx.of('some data'));

    integration = new DBIntegration(new DB('oracle'), new DB('mySql'));
    integration.dbWriteTransaction(new DB(), rx.of('some data'));
    integration.storeToDBs(rx.of('some data'));

    const res = [];

    result.subscribe((x) => res.push(x));

    setTimeout(() => {
      expect(res).toEqual([
        'Transactions were successfull ',
        [
          {
            db: 'oracledb',
            success: true,
            transactionId: 1000,
          },
          {
            db: 'mysqldb',
            success: true,
            transactionId: 1000,
          },
        ],
      ]);
      done();
    }, 2010);
  });
});
