function a () {
    var b;
    var b = function b () { }
    
    console.log(b)
    b = 'bbb'
    console.log(b);
    console.log(b);
}
a();


// 함수 선언의 호이스팅 - 함수 선언문을 함수 표현식으로 변경
// 호이스팅이 끝난 상태에서의 함수 선언문은 함수명으로 선언한 변수에 함수를 할당한 것처럼 여길 수 있다.
