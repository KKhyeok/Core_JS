var func = function(a, b, c) {
    console.log(this, a, b, c);
  };
  
  func(1, 2, 3); // Window{ ... } 1 2 3
  func.call({ x: 1 }, 4, 5, 6); // { x: 1 } 4 5 6

//   call 메서드
//   call메서드는 메서드의 호출 주체인 함수를 즉시 실행하도록 하는 명령이다.
//   이때 call 메서드의 첫 번째 인자를 this로 바인딩하고, 이후의 인자들을 호출할 함수의 매개변수로 한다.