var copyObject = function(target) {
    var result = {};
    for (var prop in target) {
      result[prop] = target[prop];
    }
    return result;
  };

//   기존 정보를 복사해서 새로운 객체를 반환하는 함수(얕은 복사)
//   기존 정보를 복사해서 새로운 객체를 반환하는 얕은 복사를 사용하는 함수이다.