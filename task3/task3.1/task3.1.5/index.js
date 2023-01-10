const rx = require('rxjs');
const { DBIntegration } = require('./dbIntegration');
const { DB } = require('./db');

// Task 3.1.5

// You are given with the content that has to be stored in 2 datastores.
// Though it sounds good, in reality both operations are independent so any of them can fail.
// Therefore, as an engineer you have to make sure that the whole operation is resilient and ensures atomicity and consistency in both stores.

const integ = new DBIntegration(new DB('oracledb'), new DB('mysqldb'));
const res = integ.storeToDBs(rx.of('some data'));
res.subscribe((x) => console.log('Res: ' + JSON.stringify(x)));
