var a = 1;
var outer = function() {
  var b = 2;
  var inner = function() {
    console.log(b);
    console.dir(inner);
  };
  inner();
};
outer();

// 스코프 체인 확인
