var a;
console.log(a); // (1) undefined. 값을 대입하지 않은 변수에 접근

var obj = { a: 1 };
console.log(obj.a); // 1
console.log(obj.b); // (2) 존재하지 않는 프로퍼티에 접근
console.log(b); // c.f) ReferenceError: b is not defined

var func = function() {};
var c = func(); // (3) 반환(return)값이 없으면 undefined를 반환한 것으로 간주.
console.log(c); // undefined

// 자동으로 undefined를 부여하는 경우
// undefined는 혼동을 가져오기 때문에 NULL을 사용하는 것을 권장한다.
// undefined는 자바스크립트 엔진만 사용하게 하는 것이 옳다.