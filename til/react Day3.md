### react Day3
1. state
-import { useState } from  "react";
-상태가 바뀔때마다 화면을 새로 그려줌(state의 변화가 없으면 화면 변하지 않음)
- 클래스형 컴포넌트에서 state
~~~javascript
render() {
	const { number } = this.state;
	return (
		<div>
			<p>{number}</p>
			<button
				onclick={() => {
					this.setState({ number: number + 10 });
				}}
			>
				+10
			</button>
		</div>
	)
}
~~~
render에서 state조회할때는 this.state.
onclick: button의 props안에 이벤트를 설정. 이벤트에 함수 넣을때는 화살표문법 사용
this.setState: state값 바꿀 수 있게 해줌

App실행
~~~javascript
import Counter from './Counter';

const App = () => {
  return <Counter />;
}; 
export default App;
~~~
- state 객체 안에 값이 여러개일 때
~~~javascript
import { Component } from  'react';

class Counter extends Component {
	constructor(props) {
		super(props);
		this.state = {
			number:0,
			name: 'react'
		};
	}

	render() {
		const { number, name } = this.state;
		return (
			<div>
				<p>{number}</p>
				<p>{name}</p>
				<button
					onclick={() => {
						this.setState({ number: number + 10 });
					}}
				>
					+10
				</button>
			</div>
		)
	}
}
export default Counter;
~~~
state 안에 namer값이 추가 됨
바뀌지 않는 값은 this.setState에 넣지 않음

- state초기값 설정2
~~~javascript
import { Component } from  'react';

class Counter extends Component {
	state = {
		number: 0,
		name: 'react'
	};
	render() {
	const { number, name } = this.state;
	...
}
export default Counter;
~~~

- this.setState에 함수 넣기
~~~javascript
<button
	onClick={() => {
		this.setState((preState) => {
			return {
				number: preState.number + 10
			};
		});
	}}
>
	+10
</button>
~~~
!이벤트 카멜표기 꼭꼭

- this.setState 끝난 후 작업 실행
-setState로 값 업데이트 하고 특정작업 하고 싶을 때: 두번째 파라미터로 콜백함수를 활용
~~~javascript
<button
	onClick={() => { //첫번째
		this.setState(
			{
				number: number + 1
			}
			() => { //두번째
				console.log('state: ');
				console.log(this.state);
			}		
		});
	}}
>
	+10
</button>
~~~
?콜백함수
자바스크립트에서 콜백은 어떤 함수의 파라미터로 전달 되는 모든 함수를 의미

- 함수형 컴포넌트에서 useState
-리액트 16.8 이후부터 useState를 사용하여 함수형 컴포넌트에서도 state 사용할 수 있게 됨(사용법은 다름)
~~~javascript
const arr = [1, 2];
const one = arr[0];
const two = arr[1];

//위와 같음
const arr = [1, 2];
const [one, two] = arr;
~~~
useState 예제
~~~javascript
import { useState } from  "react";

const Say = () => {
  const [message, setMessage] = useState(''); 
  const onClickEnter = () => setMessage('Hi!');
  const onClickLeave = () => setMessage('Bye!');

  return (
    <>
      <button onClick={onClickEnter}>입장</button>
      <button onClick={onClickLeave}>퇴장</button>
      <p>{message}</p>
    </>
  );
};
export  default  Say;
~~~

-const [현재값, 바뀔값] = useState('초기값');
useState 초기값 설정.
useState의 초기값은 객체가 아니어도 가능

-한 컴포넌트에서 useState 여러번 사용 가능
- 참조형 state
~~~javascript
function getResult(me, other) {
  if (me > other) return "승리";
  if (me < other) return "패배";
  return "무승부";
}
function App() {
  const [history, setHistory] = useState([]);

  const onClick = () => {
    const nextHistory = getResult(1, 10);
    setHistory([...history, nextHistory]);
  };
  return <><p onClick={onClick}>{history.join(',')}</p></>;
} // 클릭할때마다 '패배' 저장해서 보여줌
~~~
history는 배열의 주소값을 참조하고 있는 참조 데이터. 내부의 값이 변한다고 해도 state는 변하지 않음
~~~javascript
const nextHistory = getResult(1, 10);
history.push(nextHistory );
setHistory([history]); // 이 경우 state는 변함이 없음(화면도 그대로) 
~~~
-참조형 state의 경우 반드시 새로운 참조형 값을 생성해서 state를 바꿔줘야함
?자바스크립트 spread구문
-배열을 각각의 값으로 펼칠때 사용( 하나로 묶여있는 값을 개별값으로 출력)
~~~javascript
const numbers = [1, 2, 3];
console.log(numbers); //[1, 2, 3]
console.log(...numbers); //1 2 3
console.log(1, 2, 3); //1 2 3 위와 동일

console.log(...numbers, 4); //1 2 3 4

const numbers2 = [4, 5, 6];
const nums = [...numbers, ...numbers2]; //concat과 같은 기능이지만 더 직관적인 표현
console.log(nums); //[ 1, 2, 3, 4, 5, 6 ]
console.log(...nums); //1 2 3 4 5 6
~~~
-spread구문은 하나의 값이 아닌 여러값을 가진 목록
~~~javascript
const numbers = [10];
const num = ...numbers; // error
~~~
-함수 호출시 아규먼트로 사용 가능
~~~javascript
const person = (name, age) => {
	console.log('저는 ${age}살 ${name}입니다.');
};

const arr = ['둘리', 100];
person(...arr);
~~~
-배열을 객체에 담을 경우
~~~javascript
const nums = [1, 2, 3, 4,5];
const newObj = {...nums};
console.log(newObj); //{ '0': 1, '1': 2, '2': 3, '3': 4, '4': 5 } 0부터 시작하는 인덱스와 함께 객체 생성
~~~
cf. rest parameter
생김새는 같지만 rest parameter는 아규먼트들을 하나의 파라미터로 묶는것

- state 주의사항
-state값을 변경할때는 setter함수를 사용해야
-배열이나 객체를 업데이트 할때는 임시저장 사본을 활용    
2. state vs props
- 둘 다 컴포넌트에서 사용, 렌더링할 데이터를 갖고 있음
- props는 부모 컴포넌트가 설정 => 부모컴포넌트의 state를 자식 컴포넌트의 props로 전달해서 유동적으로 사용 가능
- state는 컴포넌트 내부에서 값 업데이트

!함수컴포넌트와 useState의 사용을 권장!

3. state 리프팅
-자식 컴포넌트의 state를 부모 컴포넌트의 state로 만드는 것

.... etc
- input의 value 값을 가져오려면 e.target.value를 사용해야함
~~~javascript
import { useState } from 'react';

function App() {  
  const [num, setNum] = useState(0);
  const handleNumChange = (e) => {
    setNum(e.target.value);
    console.log(num);
  };
  return (
    <input onChange={handleNumChange} value={num}></input>
  ); //input box에 입력한 값이 console에 출력
}
export default App;
~~~