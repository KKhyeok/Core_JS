var sum = function sum(a, b) {
    // 함수 선언문은 전체를 호이스팅합니다.
    return a + b;
  };
  var multiply; // 변수는 선언부만 끌어올립니다.
  console.log(sum(1, 2));
  console.log(multiply(3, 4));
  
  multiply = function(a, b) {
    // 변수의 할당부는 원래 자리에 남겨둡니다.
    return a * b;
  };

//   함수 선언문과 함수표현식 - 호이스팅을 마친 상태
//   실행 컨텍스트의 lexicalEnvironment는 두가지 정보를 수집하는데, 여기서는 그 중 environmentRecord으 ㅣ정보 수집 과정에서 발생하는 호이스팅을 본다.