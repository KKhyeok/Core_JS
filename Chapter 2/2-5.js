function a() {
    console.log(b);
    var b = 'bbb'
    console.log(b);
    function b () { }
    console.log(b);
}
a();

// 함수 선언의 호이스팅
// a함수를 실행하는 순간 a함수의 컨텍스트가 생성된다.
// 이때 변수명과 함수 선언의 정보를 위로 끌어올린다.
// 변수는 선언부와 할당부를 나누어 선언부만 끌어올리는 반면 함수 선언은 함수 전체를 끌어올린다.
