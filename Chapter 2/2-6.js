

function a() {
    var b;
    function b() { }

    console.log(b);
    b = 'bbb'
    console.log(b)
    console.log(b)
}
a();

// 함수 선언의 호이스팅 - 호이스팅을 마친 상태
// 앞선 예제에서 수집 대상1과 2를 순서대로 끌어올리고 나면, 2-6의 코드처럼 된다.