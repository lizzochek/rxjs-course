const rx = require('rxjs');

// Task 2.1.5

// Group all the words by first letter
// Count how many times the first letter appears in the grouped words
// Summarize the counts and combine them with character that represents a group

const groupObservable = rx.from(['ABC', 'BOM', 'CAC', 'BAC', 'ADE', 'ABA']);
const result = groupObservable.pipe(
  rx.groupBy((word) => word[0]),
  // Display groups
  // rx.mergeMap((group) => group.pipe(rx.toArray())),
  // Display letter count
  rx.mergeMap((group) => {
    let i = 1;
    return group.pipe(
      rx.map((e) => {
        i += (e.match('A') || []).length;
        return { letter: group.key, count: i };
      }),
      rx.takeLast(1)
    );
  })
);

result.subscribe((x) => console.log('Observable 2.1.5: ' + JSON.stringify(x)));

module.exports = {
  result,
};
