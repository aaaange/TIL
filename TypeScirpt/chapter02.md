# 02 기본 타입

## 기본형
```js
let car:string = 'bmw';

car = 3;
```
- 위와 같이 문자형으로 지정해놓은 형식에 숫자를 넣으려고 하면 오류가 발생함.

```js
let car = 'bmw';
```
- 이 때 문자형으로 지정해주지 않아도 bmw가 문자형으로 되어있기 때문에 car에 마우스를 올려보면 string 타입으로 지정되어 있음
- 이런 것을 타입 추론이라고 함
```js
let age:number = 30;
let isAdult:boolean = true;
let a:number[] = [1,2,3];
let a2:Array<number> = [1,2,3];
```
- 이와 같은 형식들이 존재함

## 튜플 (Tuple)
```js
let b:[string, number];

b = ['z', 1];
// b = [1. 'z'];

b[0].toLowerCase();
b[1].toLowerCase(); // 오류
```
- 튜플은 배열과 같은 모양인데, 배열과 같은 상황에서 안에 들어 있는 요소의 형태가 다를 때 사용할 수 있음
- 위치별로 형태를 지정

## void, never
- void는 함수에서 아무것도 반환하지 않을 때 사용
```js
function say/Hello():void{
    console.log('hello');
}
```
- 이처럼 return 값이 없는, 즉 아무것도 반환하지 않는 함수의 경우 void를 사용할 수 있음
```js
function showError():never{
    throw new Error();
}

function infLoop():never{
    while (ture) {
        // do Somthing...
    }
}
```
- never의 경우 Error를 반환하거나 while과 같이 영원히 끝나지 않는 함수의 경우 사용할 수 있음.

## enum
- 자바스크립트에는 없고, 자바에는 있는 형태
    - 비슷한 값들끼리 묶어주는 것이라고 생각하면 됨
```js
enum Os {
    Window,
    Ios,
    Android
}
```
- enum에 값을 주지 않으면 0부터 값을 할당하고 다음 요소는 1씩 증가하며 자동으로 값을 할당함.
```js
enum Os {
    Window = 3,
    Ios,
    Android
}
```
- 예로 Window에 3을 할당하면, Ios는 1추가 된 값인 4가 할당되고, Android는 5가 할당됨
- 전 값에 +1한 값이 할당

## null, undefind
```js
let a:null = null;
let b:undefind = undefind;
```
