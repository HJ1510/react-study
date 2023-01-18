### react Day2
1. 클래스형 컴포넌트
cf.함수형
클래스형은 state와 라이프사이클 사용가능
하지만 현재는 hooks를 이용해 함수형에서도 거의 동일한 작업가능하고, 공식 매뉴얼에서도 함수형 사용을 권장하고 있음. 다만 클래스형 컴포넌트가 사라지는 것은 아니므로 학습은 필요함
- 화살표 함수
es6에서 도입
function() 에서의 this는 자신이 종속된 객체
() => 에서의 this는 자신이 종속된 인스턴스

~~~javascript
function  Milk() {
	this.name  =  '고단백';
		return {
			name:  '속편한',
			fullName1:  function () {
			console.log('fullName1: '  +  this.name  +  '우유');
			},
			fullName2: () => {
			console.log('fullName2: '  +  this.name  +  '우유');
		},
	};
}
const  milk  =  new  Milk();
milk.fullName1(); // fullName1: 속편한우유 
milk.fullName2(); // fullName2: 고단백우유
~~~
컴포넌트 선언에서는 function과 화살표가 큰 차이가 없음

- 모듈 내보내기(export)
export default <클래스이름> 
다른 파일에서 이 파일을 import할때 <클래스이름>클래스를 불러옴

2. props
- properties. 컴포넌트의 속성. 값은 부모 컴포넌트에서 설정 가능
~~~javascript
const  MyComponent  = (props) => {
	return  <h1>Hello, {props.name}</h1>;
};
export  default  MyComponent;
~~~
~~~javascript
import  MyComponent  from  './MyComponent';
const  App  = () => {
return  <MyComponent  name="yoon"  />;
}; // Hello, yoon
export  default  App;
~~~

- children
-컴포넌트의 자식들을 값으로 갖는 prop
-부모 컴포넌트에서 태그 사이의 값을 보여줄때는 자식 컴포넌트에서 {children} 으로 출력
-문자열, 다른 컴포넌트, html태그 작성 가능
-화면에 보여질 모습을 좀 더 직관적인 코드로 작성할때 사용

- props 기본값 지정
~~~javascript
MyComponent.defaultProps= {
 name: '기본설정',
};
~~~

- 파라미터를 활용해서 props 생략 가능(Destructuring 문법)
~~~javascript
const  MyComponent  = ({name}) => {
	return  <h1>Hello, {name}</h1>; // Hello, 기본설정
};
export  default  MyComponent;
~~~
- props 검증:  PropTypes 사용
~~~javascript
import PropTypes from 'prop-types';
MyComponent.propTypes = {
 name: PropTypes.string
};
~~~

- 필수 PropTypes 설정: isRequired
PropTypes.<데이터타입>.isRequired
<a href="https://github.com/facebook/prop-types" target="_blank">propTypes 종류</a>

- 클래스형 컴포넌트에서 props 활용
~~~javascript
class MyComponent extends Component {
  static defaultProps = {
	 name: '기본설정'
  };
  static propTypes = {
	 name: PropTypes.string,	 
  };
  render() {
    const { name } = this.props; 
    return  <h1>Hello, {name}</h1>;
 };
}
~~~

3. state
- 컴포넌트 내부에서 바뀔 수 있는 값(리액트에서의 변수 개념)
-state가 바뀌면 리액트가 화면을 새로 렌더링 해줌
-값 변경은 setter함수를 통해야 함 [state. setState]
-cf. props: 부모 컴포넌트가 자식 컴포넌트한테 값 전달할 때

- state의 초깃값 설정하기
~~~javascript
import { Component } from  'react';

constructor(props) {
  super(props);
  this.state = {
 number: 0
 };
}
~~~
클래스형 컴포넌트에서는 super(props); 호출 필수 => 클래스형 컴포넌트가 상속중인 리액트 Component 클래스에서 생성자 함수를 호출
this.state 초기값 설정: state는 객체형식
~~~javascript
~~~