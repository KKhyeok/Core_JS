var report = {
    sum: 0,
    count: 0,
    add: function() {
      var args = Array.prototype.slice.call(arguments);
      args.forEach(function(entry) {
        this.sum += entry;
        ++this.count;
      }, this);
    },
    average: function() {
      return this.sum / this.count;
    },
  };
  report.add(60, 85, 95);
  console.log(report.sum, report.count, report.average()); // 240 3 80

//   thisArg를 받는 경우 예시 - forEach메서드
//   콜백 함수를 인자로 받는 메서드 중 일부는 추가로 this로 지정할 객체를 인자로 지정할 수 있는 경우가 있다.
//   이러한 메서드의 thisArg값을 지정하면 콜백 함수 내부에서 this 값을 원하는 대로 변경할 수 있다.
