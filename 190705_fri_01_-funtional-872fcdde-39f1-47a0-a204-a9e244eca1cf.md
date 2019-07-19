# 190705_fri_01_(funtional)

Last Edited: Jul 05, 2019 3:43 PM
Tags: filter,funtional,map,reduce

# 함수형 프로그래밍 (Functional Programming)

-함수형 프로그래밍은 객체지향 프로그래밍과는 다르다.

-자바스크립트가 완벽하게 함수형 프로그래밍을 할수는 없다. 왜냐면 this라는 개념때문. 

### 함수형 프로그래밍의 원칙

1. 입출력이 순수해야한다.(순수함수)
2. 부작용(부산물)이 없어야 한다.
3. 함수와 데이터를 중점으로 생각한다.

순수함수 : 반드시 하나이상의 인자를 받고, 받은 인자를 처리하여 결과물을 반드시 돌려주어야 한다. + 인자를 제외한 다른 변수를 사용하면 안된다. 받은 인자만으로 결과물을 내어야한다. 

하지만 자바스크립트는 this라는 개념 때문에 순수함수를 사용하기 힘들다. (this를 어쩔 수 없이 사용해야 함) 그래도 최대한 비슷하게 할 수 있다.

부작용이 없어야 한다 : 프로그래머가 바꾸고자하는 변수 외에는 바뀌어서는 안된다. 원본 데이터는 불변해야 한다. 함수형 프로그래밍에서는 프로그래머가 모든 것을 예측하고 통제할 수 있어야 한다. 

### 대표적인 함수형 프로그래밍 함수 : map, filter, reduce (배열에 있는 메소드)

    var arr = [1, 2, 3, 4, 5];
    var map = arr.map(function(x) {
      return x * 2;
    }); //[2, 4, 5, 8, 10]

arr을 넣어서 결과가 나옴. arr사용되었지만 변하지 않았고 결과내고 부작용도 없음  ⇒ 순수함수

    var arr = [1, 2, 3, 4, 5];
    var condition = function (x) {
      return x % 2 === 0;
    }
    var ex = function(array) {
      return array.filter(condition);
    };
    
    ex(arr); // [2, 4]

위는 언뜻 보면 순수함수 같지만 아니다. condition변수 때문. 인자로 받지 않은 변수를 사용함.

위 함수를 순수함수로 바꾸려면

    var ex = function (array, cond) {
      return array.filter(cond);
    };
    
    ex(arr, condition);

condition 변수 또한 인자로 받으면 된다. 

이렇게하면 쉽게 에러를 추적할 수 있다. 인자가 문제였거나, 함수내부가 문제였거나 둘중하나기 때문.

반복문을 사용하지 말라고했는데 그럼 어떻게 처리할까?

1~10까지 더하는 예

    var sum = 0; 
    for (var i = 1; i <= 10; i++) {
      sum += i;
    }

위를 함수형으로 하면

    function add(sum, count) {
      sum += count; 
      if (count > 0) {
        return add(sum, count -1)
      } else {
        return sum;
      }
    }
    
    add(0, 10);

add 안에서 add를 또 호출한다.  === 재사용성이 높아짐 

메소드사용

    var arr = [1,2,3,4,5,6,7,8,9,10]
    arr.reduce(function (prev, cur) {
      return prev + cur;
    });