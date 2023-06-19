var copyObjectViaJSON = function(target) {
    return JSON.parse(JSON.stringify(target));
  };
  var obj = {
    a: 1,
    b: {
      c: null,
      d: [1, 2],
      func1: function() {
        console.log(3);
      },
    },
    func2: function() {
      console.log(4);
    },
  };
  var obj2 = copyObjectViaJSON(obj);
  
  obj2.a = 3;
  obj2.b.c = 4;
  obj.b.d[1] = 3;
  
  console.log(obj); // { a: 1. b: { c: null, d: [1, 3], func1: f() }, func2: f() }
  console.log(obj2); // { a: 3. b: { c: 4,    d: [1, 2] } }


//   JSON을 활용한 간단한 깊은 복사
//   간단하게 deep copy를 수행하는 방법 : 객체를 JSON 문법으로 표현된 문자열로 전환했다가 다시 JSON 객체로 바꾸기.
//   target 을 JSON.stringify를 통해 string type으로 바꿔주고, JSON.parse를 통해 deep copy 구현
//   하지만 순수  data만 copy된다는 단점이 존재한다.