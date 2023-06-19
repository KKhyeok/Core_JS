var obj = {
    outer: function() {
      console.log(this); // (1) { outer: f }
      var innerFunc1 = function() {
        console.log(this); // (2) Window { ... }
      };
      innerFunc1();
  
      var self = this;
      var innerFunc2 = function() {
        console.log(self); // (3) { outer: f }
      };
      innerFunc2();
    },
  };
  obj.outer();

//   내부함수에서의 this를 우회하는 방법
//   innerFunc1 내부에서 this는 전역객체를 가ㅣㄹ킨다.
//   outer 스코프에서 self라는 변수에 this를 저장한 상태에서 호출한 innerFunc2의 경우 self에는 객체 obj가 출력된다.
  // 