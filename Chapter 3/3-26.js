var func = function(a, b, c, d) {
    console.log(this, a, b, c, d);
  };
  var bindFunc = func.bind({ x: 1 }, 4, 5);
  console.log(func.name); // func
  console.log(bindFunc.name); // bound func

//   bind 메서드 - name 프로퍼티
//   name 프로퍼티에 동사 bind의 수동태인 bound라는 접두어가 붙는다.