var numbers = [10, 20, 3, 16, 45];
var max = Math.max.apply(null, numbers);
var min = Math.min.apply(null, numbers);
console.log(max, min); // 45 3

// call/apply 메서드의 활용
// 여러 인수를 받는 메서드에 apply 활용