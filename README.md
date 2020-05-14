# 인프런 함수형자바스크립트 강의

인프런 함수형자바스크립트 강의 영상 보면서 조금씩 따라한거 올리는 용도

## go, pipe, curry

- 함수를 값으로 다루어 표현력을 높힌다.

## generator function을 이용한 지연 평가

- iteraterable 한 값을 순회 하며 하나씩 yield 해주는 generator function을 이용해 지연평가가 가능하다.

## iterable programing 혹은 list processing (lisp)

- if를 filter로
- 값 변화 후 변수 할당을 map으로
- break를 take로
- 축약 및 합산을 reduce로

## 함수결합

- map, filter 와 같은 함수들은 평가 순서를 바꿔도 똑같은 결과가 나온다. (결합법칙)
- reduce, take와 같은 함수들은 실제로 iterable 값들을 꺼내서, 결과를 나오게 하는 함수.
- 그러므로, map, filter와 같은 함수를 반복하다 특정 지점에서 reduce와 같은 함수를 이용해 결과를 도출해낸다.

## Promise

1. 1급으로 다루어지는 비동기 상황

- promise가 callback hell을 then으로 해결하는것 보다 중요한 것은 비동기 상황을 1급 값으로 다룬다는것(대기, 실패, 성공)
- 비동기 상황이 코드로서 다루어지는것이 아니라 값으로 다루어 진다.

2. 비동기적으로 일어나는 함수를 적절한 시점에 안전하게 합성하기 위해 사용 (모나드)

```
Promise.then(resolve=>setTimeout(()=>resolve(2), 0)).then(f).then(g).then(v=>console.log(v))
```

3. 함수를 합성할 때 외부의 상태에 의해서 에러가 발생하는 상황을 해결하기 위해 사용 (kleisli compositoin)

- Promise.reject('error')를 이용

4. promise.then의 규칙

- then method를 통해서 결과를 꺼냈을 때의 값은 prmoise가 아니다.
- promise가 아무리 중첩되어 있어도 한 번의 then으로 해당하는 결과를 한번에 받는다.

```
Promise.resolve(Promise.resolve(Promise.resolve(1))).then(console.log)

new Promise(resolve => resolve(new Promise(resolve => resolve(1)))).then(log)
```

## 비동기 i/o

- cpu가 많이 필요한 작업들을 nodejs가 직업 하는게 아니라, 네트웍 혹은 다른 장비들을 사용해 일을 시켜놓고 대기를 하는 일을 한다.
- 즉, 어떤 시점들을 다루는 작업을 하는 것
- 동시에 어떤 작업들을 맡기고, 완료된 작업들을 올바른 시점에 받아와 잘 처리하면 된다.
