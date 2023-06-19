var a = 1;
console.log(a); // 1
console.log(window.a); // 1
console.log(this.a); // 1

// 전역변수와 전역 객체
// 전연공간에서 발생하는 특이한 성질 중 하나는
// 전역 변수를 선언하면 자바스크립트 엔진은 이를 전역객체의 프로퍼티로도 할당한다는 것이다.