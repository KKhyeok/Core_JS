var obj1 = {
    a: 1,
    b: 'bbb'
};

obj1.a = 2;

// 참조형 데이터의 프로퍼티 할당
// obj1이 reference type 데이터를 가리키고
// referernce type data는 실질적인 data인 1, 'bbb'를 가리킨다
// line6에 2를 할당하면 기존의 1이 2로 바뀌는것이 아니라 새로운 2를 생성하고 a가 가리키는 주소가 바뀌게 된다.