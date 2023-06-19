var arr1 = [];
arr1.length = 3;
console.log(arr1); // [empty x 3]

var arr2 = new Array(3);
console.log(arr2); // [empty x 3]

var arr3 = [undefined, undefined, undefined];
console.log(arr3); // [undefined, undefined, undefined]

// undefined와 배열
// 위의 예제에는 빈 array에 대해서 empty와 undefined가 구분이 안되기 때문에, undefined를 사용하지 않는 것이 좋다.