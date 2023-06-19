function a () {
    var x;
    var x;
    var x;

    x = 1;
    console.log(x);
    console.log(x);
    x = 2;
    console.log(x);
}
a(1);

// 매개변수와 변수에 대한 호이스팅
// environment recode는 현재 실행될 컨텍스트의 대상 코드 내에 어떤 식별자들이 있는지에만 관심이 있다.
// 따라서 변수를 호이스팅할 때 변수명만 끌어올리고 할당 과정은 원래 자리에 남겨둔다.