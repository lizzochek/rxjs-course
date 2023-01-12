const { result } = require('./index');
const { Result } = require('./result');
const { DBIntegration } = require('./dbIntegration');
const rx = require('rxjs');

describe('Task 3.1.5', () => {
  it('Returns values', (done) => {
    const resClass = new Result();
    const resErr = resClass.error('name');

    const integration = new DBIntegration('oracle', 'mySql');
    integration.dbWriteTransaction();
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
