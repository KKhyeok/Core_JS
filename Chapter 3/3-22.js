var numbers = [10, 20, 3, 16, 45];
var max = (min = numbers[0]);
numbers.forEach(function(number) {
  if (number > max) {
    max = number;
  }
  if (number < min) {
    min = number;
  }
});
console.log(max, min); // 45 3

// call/apply 메서드 활용
// 최대 최솟값을 구하는 코드 구현
// 여러개의 인수를 받는 메서드에 하나의 배열로 인수를 전달하고 싶을 때 apply 메서드가 유용하다.