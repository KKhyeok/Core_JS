const numbers = [10, 20, 3, 16, 45];
const max = Math.max(...numbers);
const min = Math.min(...numbers);
console.log(max, min); // 45 3

// call/apply 메서드의 활용
// ES6의 펼치기 연산자를 사용하면 apply 보다 효율적이다.