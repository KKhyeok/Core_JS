var obj = {
    outer: function() {
      console.log(this); // (1) { outer: f }
      var innerFunc = () => {
        console.log(this); // (2) { outer: f }
      };
      innerFunc();
    },
  };
  obj.outer();

//   this를 바인딩하지 않는 함수(화살표 함수)
//   화살표 함수는 실행 컨텍스트를 생성할 때 this 바인딩 과정 자체가 빠지게 되어, 상위 스코프의 this를 그대로 활용할 수 있다.