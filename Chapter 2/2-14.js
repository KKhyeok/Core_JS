var a = 1;
var outer = function() {
  var b = 2;
  var inner = function() {
    console.dir(inner);
  };
  inner();
};
outer();

// 스코프 체인 확인
// 크롬 환경에서는 스코프 체인 중 현재 실행 컨텍스트를 제외한 상위 스코프 정보를 콘솔을 통해 확인할 수 있다.