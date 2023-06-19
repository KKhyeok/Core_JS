console.log(this); // { alert: f(), atob: f(), blur: f(), btoa: f(), ... }
console.log(window); // { alert: f(), atob: f(), blur: f(), btoa: f(), ... }
console.log(this === window); // true

// 브라우저 환경
// 전역 공간에서 this는 전역 객체를 가리킨다. 
// 개념상 전역 컨텍스트를 생성하는 주체가 전역 객체이기 때문이다.
