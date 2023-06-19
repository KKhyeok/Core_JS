var user = {
    name: 'Jaenam',
    gender: 'male',
  };
  
  var changeName = function(user, newName) {
    return {
      name: newName,
      gender: user.gender,
    };
  };
  
  var user2 = changeName(user, 'Jung');
  
  if (user !== user2) {
    console.log('유저 정보가 변경되었습니다.'); // 유저 정보가 변경되었습니다.
  }
  console.log(user.name, user2.name); // Jaenam Jung
  console.log(user === user2); // false

//   객체의 가변성에 따른 문제점의 해결 방법
//   user2는 새로운 객제를 받기 때문에 기존의 user값이 변하지 않는다.