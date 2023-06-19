var a = 1;
function outer(){
    function inner(){
        console.log(a);
        var a = 3;
    }
    inner();
    console.log(a);
}
outer();
console.log(a);

// 실행 컨텍스트와 콜 스택 
// 콜 스택에 실행 컨텍스트가 어떤 순서로 쌓이고, 어떤 순소러 코드 실행에 관여하는지 확인