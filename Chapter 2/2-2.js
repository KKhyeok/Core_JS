function a(x) {
    console.log(x); 
    var x;
    console.log(x);
    var x = 2; 
    console.log(x);
  }
  a(1);

//   매개변수에 대한 호이스팅
//   호이스팅 되지 않았을 때, 각 console.log(x)에서 어떤 값들이 출력될지 파악.