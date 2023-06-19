var n = null;
console.log(typeof n); // object

console.log(n == undefined); // true
console.log(n == null); // true

console.log(n === undefined); // false
console.log(n === null); // true

// undefined와 null 비교
// JS의 하나의 버그는 null의 type이 object로 나오는 것이다.
// 따라서 어떤 변수에 대해 null인지 파악하기 위해서는 동등연산자인 ===를 사용할 수 있다.