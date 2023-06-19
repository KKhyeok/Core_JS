var obj = {
    0: 'a',
    1: 'b',
    2: 'c',
    length: 3,
  };
  var arr = Array.from(obj);
  console.log(arr); // ['a', 'b', 'c']

//   call/apply/ 메서드 활용
//   ES6의 Array,from 메서드: 유사배열객체 또는 순회 가능한 모든 종류의 데이터 타입을 배열로 전환