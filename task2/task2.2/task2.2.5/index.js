const rx = require('rxjs');
const fs = require('fs');

// Task 2.2.5
// There is a stream of blocking calls.
// Ensure every call is executed in non-blocking (means moving call on another Thread)
// way and will not block other executions. Ensure that pool is not going over 256
// created Threads
// Use .fromCallable + subscribeOn()

// public static Publisher<String> paralellizeLongRunningWorkOnUnboundedAmountOfThread(
//     Flux<Callable<String>> streamOfLongRunningSources) {
// Scheduler boundedElastic = Schedulers.newBoundedElastic(256,
//         Integer.MAX_VALUE,
//         "LocalBoundedElastic");
// return streamOfLongRunningSources.flatMap(call -> Mono.fromCallable(call)
//         .subscribeOn(boundedElastic));
// }
