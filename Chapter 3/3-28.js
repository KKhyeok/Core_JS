var obj = {
    logThis: function() {
      console.log(this);
    },
    logThisLater1: function() {
      setTimeout(this.logThis, 500);
    },
    logThisLater2: function() {
      setTimeout(this.logThis.bind(this), 1000);
    },
  };
  obj.logThisLater1(); // Window { ... }
  obj.logThisLater2(); // obj { logThis: f, ... }

  // bind메서드 - 내부함수에 this 전달
  