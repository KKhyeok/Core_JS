var a = 10;
var b = a;
var obj1 = { c: 10, d: 'ddd' };
var obj2 = obj1;

b = 15;
obj2 = { c: 20, d: 'ddd' };

// 변수 복사이후 값 변경 결과 비교 (객체 자체를 변경했을 때)
// 내부 property를 변경할 시에는 기존의 data를 변경하는 것이 아니라
// 새로운 객체를 만들어 할당하는 방식이다.