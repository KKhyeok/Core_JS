var obj = {
    outer: function() {
      console.log(this);
      var innerFunc = () => {
        console.log(this);
      };
      innerFunc();
    },
  };
  obj.outer();

//   화살표 함수 내부에서의 this
//   화살표 함수 내부에는 this가 없고, 접근하고자 하면 스코프체인상 가장 가까운 this에 접근하게 된다.