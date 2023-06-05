# Explations on the Examples in Chapter 7

자바스크립트는 프로토타입 기반 언어이기 때문에 '상속' 개념이 없지만, 다양한 요구에 맞춰 ES6에는 클래스 문법이 추가되었다.


##### Example 7-1
```bash
스태틱 메서드, 프로토타입 메서드에 관한 예제로, 전형적인 생성자 함수와 인스턴스이다. 
프로그래밍 언어에서의 클래스는 사용하기에 따라 추상적일수도 있고 구체적인 개체가 될 수도 있다.
```

##### Example 7-2
```bash
클래스 상속은 객체지향 프로그래밍에서 가장 중요한 요소 중 하나로,
프로토타입 체인을 활용헤 자바스크립트에서의 클래스 상속을 전통적인 객체지향의 클래스와 비슷한 형태로 구현한다.
```

##### Example 7-3
```bash
length 프로퍼티를 삭제한 경우의 예제이다. 내장 객체인 배열 인스턴스의 length 프로퍼티는 configurable 속성이 false라서 삭제가 불가능하지만,
Grade 클래스의 인스턴스는 배열 메서드를 상속하지만 기본적으로는 일반 객체의 성질을 그대로 지니므로 삭제가 가능해서 문제가 된다.
```

##### Example 7-4
```bash
Grade.prorotype에 요소를 포함하는 배열을 매칭 시킨경우 앞선 예제와 다르게 동작한다. 
클래스에 있는 값이 인스턴스의 동작에 영향을 주면 안된다.
```

##### Example 7-5
```bash
사용자가 정의한 두 클래스 사이에서의 상속관계를 구현한 예제.
```

##### Example 7-6
```bash
원래부터 정사각형은 직사각형에 + '네 변의 길이가 모두 같다'라는 구체적인 조건이 추가된 개념이다. 
따라서 Square를 Rectangle의 하위클래스로 삼을 수 있다. 
```

#### Example 7-7
```bash
인자 height자리에 width 를 전달하고, 메서드를 상속하기 위해 Square의 프로토타입 객체에 Rectangle의 인스턴스를 부여했다. 
```

#### Example 7-8
```bash
클래스가 구체적인 데이터를 지니지 않게 하는 여러가지 방법이 있다. 가장 쉬운 방법으로는 일단 만들고 나서 프로퍼티들을 일일이 지우고 더는 새로운 프로퍼티를 추가하는 것이다.
내용이 복잡하지만 범용석 측면에서 괜찮은 방법이다.
```

#### Example 7-9
```bash
더글라스크락포드가 제시해서 대중적으로 널리 알려진 방법으로, SubClass의 prototype에 직접 SuperClass의 인스턴스를 할당하는 대신 아무런 프로퍼티를 생성하지 않는 빈 생성자 함수를 하나 더
만들어서 그 prototype이 SuperClass의 prototype을 바라보게끔 한 다음, SubClass의 prototype에는 Bridge의 인스턴스를 할당하게 하는 것이다.
```

#### Example 7-10
```bash
마지막으로 Object.create를 이용한 방법으로 SubClass의 prototype의 __proto__가 SuperClass의 prototpye을 바라보되, 
SuperClass의 인스턴스가 되지는 않으므로 앞서 소개한 두 방법보다 간단하면서 안전하다. 
```

#### Example 7-11
```bash
위 세 가지 방법 모두 기본적인 상속에는 성공했지만 SubClass 인스턴스의 constructor는 여전히 SuperClass를 가리키는 상태이다.
프로토타입 체인상에 가장 먼저 등장하는 SuperClass.prototype의 constructor에서 가리키는 대상, 즉 SuperClass가 출력될 뿐이다.
위 코드들의 SubClass.prototype.constructor가 원래의 SubClass를 바라보도록한다.
```

#### Example 7-12
```bash
빈 함수를 활용한 클래스 상속 및 추상화 방법
```

#### Example 7-13
```bash
Object.create를 활용한 클래스 상속 및 추상화 방법
```