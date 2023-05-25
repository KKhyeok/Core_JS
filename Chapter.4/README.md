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