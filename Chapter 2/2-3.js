function a() {
    var x = 1;
    console.log(x);
    var x;
    console.log(x);
    var x = 2;
    console.log(x);
}
a();

// 매개변수와 변수에 대한 호이스팅 -> 매개 변수를 변수 선언/할당과 같다고 간주
// 인자를 함수 내부의 다른 코드보다 먼저 선언 및 할당이 이뤄진 것으로 간주할 수 있다.