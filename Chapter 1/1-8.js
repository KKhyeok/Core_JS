var a = 10;
var b = a;
var obj1 = {c: 10 , d: 'ddd'}
var obj2 = obj1;

b = 15
obj2.c = 20;

// 변수 복사 이후 값 변경 결과 비교 (객체 property 변경 시)
// 기존 객체의 c값이 변하는 것이 아니라 새로운 20 데이터를 가리키는 주소를 할당
