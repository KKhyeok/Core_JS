console.log(sum(1, 2));
console.log(multiply(3, 4));

function sum(a, b) {
  // 함수 선언문 sum
  return a + b;
}

var multiply = function(a, b) {
  // 함수 표현식 multiply
  return a * b;
};

// 함수 선언문과 함수 표현식 -> 원본코드
// 함수 선언문과 함수 표현식의 실질적인 차이를 살펴보기 위한 예제  (원본코드)