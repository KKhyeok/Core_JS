console.log(sum(3, 4)); // Uncaught Type Error: sum is not a function

var sum = function(x, y) {
  return x + y;
};

var a = sum(1, 2);

var sum = function(x, y) {
  return x + ' + ' + y + ' = ' + (x + y);
};

var c = sum(1, 2);
console.log(c);

// 함수 표현식 : 상대적으로 안전
// 원활한 협업을 위해 전역공간에 함수를 선언하거나 동명의 함수를 중복 선언하는 경우는 없어야한다.