var a = 1;
var outer = function() {
  var b = 2;
  var inner = function() {
    console.log(b);
    debugger;
  };
  inner();
};
outer();

// 스코프 체인 확인