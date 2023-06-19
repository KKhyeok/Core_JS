const fs = require('fs');

console.log('Start');

process.nextTick(() => {
  console.log(`First next-tick callback executed`);
});

Promise.resolve('resolved').then((result) => {
  console.log(`First promise was ${result}`);
});

fs.readFile('test.txt', (error) => {
  setTimeout(() => {
    console.log('Timeout callback executed');
  }, 0);
  
  setImmediate(() => {
    console.log('Immediate callback executed');
  });

  if (!error) {
    console.log('File read');
  }

  Promise.resolve('resolved').then((result) => {
    console.log(`Second promise was ${result}`);
  });

  process.nextTick(() => {
    console.log(`Second next-tick callback executed`);
  });
})

Promise.resolve('resolved').then((result) => {
  console.log(`Third promise was ${result}`);
});

process.nextTick(() => {
  console.log(`Third next-tick callback executed`);
});

console.log('End');

process.on('exit', (exitCode) => {
  console.log(`Process exited with code ${exitCode}`);
});

// 문제: 
// 코드가 수행되면서 순차적으로 변하게 되는 phase와 queue들의 동작을 자세히 설명하라.
// 부연설명: 순차적으로 event loop의 각 phase들과 각 phase들의queue, nextTickQueue와 microTaskQueue의 동작에 대해서 자세히 설명하라. 
// 이 코드를 수행시킨 결과를 반드시 포함하라.


// 실행결과
// Start
// End
// First next-tick callback executed
// Third next-tick callback executed
// First promise was resolved
// Third promise was resolved
// Second next-tick callback executed
// Second promise was resolved
// Immediate callback executed
// Timeout callback executed
// Process exited with code 0
