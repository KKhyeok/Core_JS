var obj = {
    methodA: function() {
      console.log(this);
    },
    inner: {
      methodB: function() {
        console.log(this);
      },
    },
  };
  obj.methodA(); // { methodA: f, inner: {...} }    ( === obj)
  obj['methodA'](); // { methodA: f, inner: {...} } ( === obj)
  
  obj.inner.methodB(); // { methodB: f }            ( === obj.inner)
  obj.inner['methodB'](); // { methodB: f }         ( === obj.inner)
  obj['inner'].methodB(); // { methodB: f }         ( === obj.inner)
  obj['inner']['methodB'](); // { methodB: f }      ( === obj.inner)

//    메서드 내부에서의 this
//    this에는 호출한 주체에 대한 정보가 담긴다.
//    어떤 함수를 메서드로서 호출하는 경우 호출 주체는 함수명 앞의 객체이다.