var obj1 = {
    outer: function() {
      console.log(this); // (1)
      var innerFunc = function() {
        console.log(this); // (2) (3)
      };
      innerFunc();
  
      var obj2 = {
        innerMethod: innerFunc,
      };
      obj2.innerMethod();
    },
  };
  obj1.outer();

//   내부함수에서의 this
//   메서드 내부에서 정의하고 실행한 함수에서의 this는 혼란을 느끼기 쉽다.
//   this 바인딩에 관해서는 함수를 실행하는 당시 주변 환경은 중요하지 않고, 오직 해당 함수를 호출하는 구문 앞에 점 또는 대괄호 표기가 있는지가 관건이다.