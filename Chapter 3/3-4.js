var a = 1;
window.b = 2;
console.log(a, window.a, this.a); // 1 1 1
console.log(b, window.b, this.b); // 2 2 2

window.a = 3;
b = 4;
console.log(a, window.a, this.a); // 3 3 3
console.log(b, window.b, this.b); // 4 4 4

// 전역 변수와 전역 객체
// 전역 공간에서 var로 변수를 선언하는 대신 window의 프로퍼티에 직접 할당하더라도 결과적으로 똑같이 동작할 것이고
// 대부분의 경우에는 맞는 말이다.