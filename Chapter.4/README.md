# Explations on the Examples in Chapter 4


##### Example 4-1
```bash
콜백 함수는 다른 코드의 인자로 넘겨주는 함수이며, 다른 코드에게 인자로 넘겨줌으로써 
제어권도 함께 위임한 함수이다. 
setInterval 를 실행하면 반복저긍로 실행되는 내용 자체를 특정할 수 있는 고유한 ID 값이 반환된다.
```
##### Example 4-2
```bash
콜백 함수의 제어권을 넘겨받은 코드는 콜백 함수 호출 시점에 대한 제어권을 가진다.
```

##### Example 4-3
```bash
Array의 prototype에 담긴 map 메서드는 첫 번째 인자로 callback 함수를 받고, 생략 가능한 두 번째 인자로 콜백 함수 
내부에서 this로 인식할 대상을 특정할 수 있다. thisArg를 생략할 경우에는 일반적인 함수와 마찬가지로 전역객체가 바인딩된다.
```

##### Example 4-4
```bash
인자의 순서를 임의로 바꾸어 사용한 경우를 보여준 예제이다.
콜백 함수의 제어권을 넘겨받은 코드는 콜백 함수를 호출할 때 인자에 어떤 값들을 어떤 순서로 넘길 것인지에 대한 제어권을 가진다.
```

##### Example 4-5
```bash
map 메서드에 대한 동작 원리를 이해하기 위한 예제이다.
this에 thisArg값이 있을 경우 그 값을, 없을 경우에는 전역객체를 지정하고, 첫 번째 인자에는 메서드의 this가 배열을 가리킬 것이므로 배열의 i번째 요소 값을, 두 번째 인자에는 i값을,
세 번째 인자에는 배열 자체를 지정해 호출한다. 그 결과가 변수 mappedValue에 담겨 mappedArr의 i번째 인자에 할당된다.
```

##### Example 4-6
```bash
콜백 함수 내부에서의 this에 대한 예제이다.
제어권을 넘겨받을 코드에서 call/apply 메서드의 첫 번째 인자에 콜백 함수 내부에서의 this가 될 대상을 명시적으로 바인딩하기 때문에 this에는 다른 값이 할당된다.
```
##### Example 4-7
```bash
매서드를 콜백 함수로 전달한 경우에 대한 예제이다. 
콜백 함수로 어떤 객체의 메서드를 전달하더라도 그 메서드는 메서드가 아닌 함수로서 호출된다.
```
##### Example 4-8
```bash
콜백 함수 내부의 this에 다른 값을 바인딩 하는 방법에 관한 예제이다.
obj1.func 메서드 내부에서 self변수에 this를 담고, obj1.func를 호출하면 앞서 선언한 내부함수가 반환되어 callback 변수에 담긴다.
그 후 callback을 setTimeout 함수에 인자로 전달하면 callback이 실행되며 obj1을 출력한다. 
굉장히 번거로운 방법이기 때문에 사용되지 않는다.
```
##### Example 4-9
```bash
콜백 함수 내부에서 this를 사용하지 않은 경우에 대한 예제이다.
앞선 예제 4-8에서 this를 사용하지 않았을 때의 결과이다. 간결하고 직관적이지만 this를 이용해 다양한 상황에 재활용할 수 없다는 단점이 있다.
```
##### Example 4-10
```bash
앞선 예제 4-8에서 func함수를 재활용한 예제이다. 예제 4-8의 방법은 번거롭지만 this를 우회적으로 활용함으로써 다양한 상황에서 원하는 객체를 바라보는 콜백 함수를 만들 수 있다.
```

##### Example 4-11
```bash
콜백 함수 내부의 this에 다른 값을 bind메서드를 활용해 바인딩하는 방법을 나타내는 예제이다.
```
##### Example 4-12
```bash
콜백 지옥을 보여주는 예제이다. 
콜백 지옥은 콜백 함수를 익명 함수로 전달하는 과정이 반복되어 코드의 들여쓰기 수준이 감당하기 힘들 정도로 깊어지는 현상으로,
자바스크립트에서 흔히 발생하는 문제이다.
```

##### Example 4-13
```bash
콜백 지옥을 기명함수 변환을 통해 해결한 예제이다. 
가독성 문제와 어색함을 동시에 해결하였다.
```

##### Example 4-14
```bash
비동기 작업의 동기적 표현을 Promise를 이용해 보여주는 예제이다.
new연산자와 함께 호출한 Promise의 인자로 넘겨주는 콜백 함수는 호출할때 바로 실행되지만
그 내부에 resolve또는 reject함수를 호출하는 구문이 있을 경우 둘 중 하나가 실행되기 전까지는 다음 또는 오류 구문으로 넘어가지 않는다.
따라서 비동기 작업이 완료될 때 비로소 resolve 또는 reject를 호출하는 방법으로 비동기 작업의 동기적 표현이 가능하다.
```

##### Example 4-15
```bash
Promise를 이용한 비동기 작업의 동기적 표현을 보여주는 두 번째 예제이다.
반복적인 내용을 함수화해 간결하게 표현했다.
```

##### Example 4-16
```bash
Generator를 이용한 비동기 작업의 동기적 표현을 보여주는 예제이다.
line6의 *가 바은 함수가 Generator함수이다. Generator함수를 실행하면 Iterator가 반환되는데, Iterator는 next라는 메서드를 가지고 있다.
이 next메서드를 호출하면 Generator함수 내부에서 가장 먼저 등장하는 yield에서 함수 실행을 멈춘다. 
이후 next메서드를 호출하면 멈춘 부분부터 다시 시작되어 yield에서 함수의 실행을 멈추게 된다.
```

##### Example 4-17
```bash
async/wait를 이용한 비동기 작업의 동기적 표현을 보여주는 예제이다.
해당 방법은 가독성이 뛰어나다는 장점이 있다.
비동기 작업을 수행하고자 하는 함수 앞에 async를 표기하고, 함수 내부에서 실질적인 비동기 작업이 필요한 위치마다. await를 표기하는 것만으로 
뒤의 내용을 Promise로 자동 전환하고, 해당 내용이 resolve된 이후에 다음 내용으로 진행한다.
```




