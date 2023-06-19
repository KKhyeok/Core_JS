console.log(this); // { process: { title: 'node', version: 'v10.13.0',... } }
console.log(global); // { process: { title: 'node', version: 'v10.13.0',... } }
console.log(this === global); // true

// Node.js 환경에서 전역 공간에서의 this
// 브라우저 환경에서 전역객체는 window이고 Node.js 환경에서는 global이다.