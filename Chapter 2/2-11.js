console.log(sum(3, 4));

function sum(x, y) {
  return x + y;
}

var a = sum(1, 2);

function sum(x, y) {
  return x + ' + ' + y + ' = ' + (x + y);
}

var c = sum(1, 2);
console.log(c);

// 함수 선언문의 위험성
// 전연 컨텍스트가 활성화될 때 전역공간에 선언된 함수들이 모두 가자 위로 끌어올려진다.