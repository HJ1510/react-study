### react Day2
1. 리액트 컴포넌트
 props(속성) 지정 가능 html상에서 나타나지 않고 리액트 컴포넌트 내에 지정됨
props에서 javascript의 숫자를 표현하려면 숫자를 중괄호로 표시해줘야함

error
~~~ javascript
color="red"  num=2
~~~
complete
~~~ javascript
color="red"  num={2}
~~~
- 이벤트는 props의 속성으로 넣지 말고 html요소에서!

2. 리액트 프로젝트 생성(2)
- yarn 활용
yarn create react-app <프로젝트 이름>

3. JSX
jsx코드는 브라우저에 실행되기 전 코드가 번들링 되는 과정에서 자바스크립트로 변환됨
- 장점
익숙하다
html태그 활용 + 컴포넌트 생성 가능

리액트18
~~~javascript
const  root  =  ReactDOM.createRoot(document.getElementById('root'));
root.render(
	<React.StrictMode>
		<App  />
	</React.StrictMode>
);
~~~

이전 버전

~~~javascript
ReactDOM.render(<App />, document.getElementById('root'));
~~~

- 요소가 여러개일 경우 부모 요소 하나로 감싸야 why? 컴포넌트 내부는 하나의 DOM트리 구조로 이루어져야함
- {} 활용하여 자바스크립트 표현식 작성 가능
조건부 연산자(삼항연산자)도 표현식에 해당
~~~javascript
<>
	{true ? (<h1>yes</h1>) : (<h1>no</h1>)}
</>
~~~
&& 연산자 : 좌우 둘 다 true일때 true 
~~~javascript
<>
	{true && (<h1>yes</h1>)}
</>
~~~
이 경우 좌항이 true일때 yes 출력 

error(리액트 컴포넌트 함수에서 undefined만 반환하면)
~~~javascript
function App() {
  const name = undefined;
  return name;
}
~~~
complete
~~~javascript
function App() {
const name = undefined;
return name || 'undefined';
}
~~~
possible (jsx내부에선 가능)
~~~javascript
function App() {
const name = undefined;
return <div>{name}</div>;
}
~~~
name이 undefined일때 우항 값 출력
~~~javascript
function App() {
  const name = undefined;
  return <div>{name || '리액트'}</div>;
}
~~~
- 스타일 적용은 인라인 카멜표기법으로
- jsx 코드중에 닫혀야하는 태그는 꼭 닫아야 함(html처럼 최대한 구동 시켜주고 그런 것 없음)
- 주석은 {/**/}
- jsx는 형식은 xml이지만 실제로는 자바스크립트 객체임

