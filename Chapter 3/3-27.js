var obj = {
    outer: function() {
      console.log(this);
      var innerFunc = function() {
        console.log(this);
      };
      innerFunc.call(this);
    },
  };
  obj.outer();

  var obj = {
    outer: function() {
      console.log(this);
      var innerFunc = function() {
        console.log(this);
      }.bind(this);
      innerFunc();
    },
  };
  obj.outer();

//   내부함수에 this 전달 
//   call vs bind
//   콜백함수를 인자로 받는 함수나 메서드 중에서 기본적으로 콜백 함수 내에서의 this에 관여하는
//   함수 또는 메서드에 대해서도 bind 메서드를 이용하면 this 값을 사용자의 편의에 맞게 바꿀 수 있다.