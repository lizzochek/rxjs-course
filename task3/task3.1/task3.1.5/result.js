class Result {
  error(db) {
    return { success: false, transactionId: -1, db };
  }

  ok(transactionId, db) {
    return { success: true, transactionId, db };
  }
}

module.exports = {
  Result,
};
