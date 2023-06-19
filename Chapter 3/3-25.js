var func = function(a, b, c, d) {
    console.log(this, a, b, c, d);
  };
  func(1, 2, 3, 4); // Window{ ... } 1 2 3 4
  
  var bindFunc1 = func.bind({ x: 1 });
  bindFunc1(5, 6, 7, 8); // { x: 1 } 5 6 7 8
  
  var bindFunc2 = func.bind({ x: 1 }, 4, 5);
  bindFunc2(6, 7); // { x: 1 } 4 5 6 7
  bindFunc2(8, 9); // { x: 1 } 4 5 8 9

//   bind 메서드 - this 지정과 부분 적용 함수 구현
//   bind는 call과 비슷하지만 즉시 호출하지는 않고 넘겨 받은 this및 인수들을 바탕으로 새로운 함수를 반환하기만 하는 메서드이다.