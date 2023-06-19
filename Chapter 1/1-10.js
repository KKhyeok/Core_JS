var user = {
    name: 'Jaenam',
    gender: 'male',
  };
  
  var changeName = function(user, newName) {
    var newUser = user;
    newUser.name = newName;
    return newUser;
  };
  
  var user2 = changeName(user, 'Jung');
  
  if (user !== user2) {
    console.log('유저 정보가 변경되었습니다.');
  }
  console.log(user.name, user2.name); 
  console.log(user === user2);


// 객체의 가변성에 따른 문제점.
// 위 예시는  user object가 변했으니 새로운 값만을 기억하고, 이전의 값을 삭제한다는 문제가 생긴다.

