var copyObjectDeep = function(target) {
    var result = {};
    if (typeof target === 'object' && target !== null) {
      for (var prop in target) {
        result[prop] = copyObjectDeep(target[prop]);
      }
    } else {
      result = target;
    }
    return result;
  };

//   deep copy를 통한 shallow copy 한계 극복
//   recursive 형태의 프로그래밍으로 구현