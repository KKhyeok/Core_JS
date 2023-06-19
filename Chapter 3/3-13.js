var Cat = function(name, age) {
    this.bark = '야옹';
    this.name = name;
    this.age = age;
  };
  var choco = new Cat('초코', 7);
  var nabi = new Cat('나비', 5);
  console.log(choco, nabi);
  
//   생성자 함수
//   생성자 함수를 호출하면 생성자의 prototype property를 참조하는 __proto__라는 프로퍼티가 있는 객체를 만들고, 
//   미리 준비된 공통 속성 및 개성을 해당 객체에 부여한다.