var func = function(a, b, c) {
    console.log(this, a, b, c);
  };
  func.apply({ x: 1 }, [4, 5, 6]); // { x: 1 } 4 5 6
  
  var obj = {
    a: 1,
    method: function(x, y) {
      console.log(this.a, x, y);
    },
  };
  obj.method.apply({ a: 4 }, [5, 6]); // 4 5 6

//   apply 메서드
//   apply메서드는 call메서드와 기능적으로 완전 동일.
//   call과 다르게 apply는 두 번째 인자를 배열로 받아 그 배열의 요소들을 호출할 함수의 매개변수로 지정한다.