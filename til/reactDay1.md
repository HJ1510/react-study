### react Day1
1.
- react 프로젝트 생성  
npm init react-app <폴더 이름>       
npm init react-app . (현재 위치에 프로젝트 생성)   

- 개발모드 실행  
파일 수정 및 저장할 때마다 브라우저에 바로바로 반영   
npm start (=== npm run start)  

- 리액트 개발자 도구
크롬 확장 프로그램 React Developer Tools

2. 
- 리액트 프로젝트 실행하면 브라우저는 index.html, index.js 파일을 실행

3. JSX
- JavaScript + Html 자바스크립트의 확장 문법
- html에서 class = jsx에서 className / html에서 for = jsx에서 htmlFor 등<a href="https://ko.reactjs.org/docs/dom-elements.html#differences-in-attributes" target="_blank">새 탭에서 열기</a>
- 속성명은 카멜케이스로
html에서 onmouse, onfocus, onmousedown... = jsx에서 onMouse, onFocus, onMouseDown... (예외 data-*)
- 태그는 전체가 하나로 감싸여 있어야 한다.   

error
~~~javascript 
<p>안녕</p>
<p>리액트</p>
~~~

complete
~~~javascript 
<>
<p>안녕</p>
<p>리액트</p>
</>
<> = <Fragment>
~~~
- jsx안에서 javascript 코드를 쓸때는 중괄호로 표시
~~~javascript 
let color = 'red';
const  imgUrl  ='url';
const  root  =  ReactDOM.createRoot(document.getElementById('root'));
root.render(
<>
<h1>{color} apple</h1>
<img src={imgUrl} />
</>
);
~~~
- 중괄호 안에는 자바스크립트 표현식만 가능.
 if문, for문, 함수선언 등 문장은 사용불가
4. 리액트 컴포넌트
- 함수 이름의 첫글자는 **대문자**, 리턴은  jsx문법으로 만든 리액트 엘리먼트. 아니면 error
- 이미지 파일 사용시 import로 경로 지정하고 파일명 작성 후 img src={} 이용해서 적용. img src= 속성에 경로 직접 입력하면  error
- 리액트 컴포넌트 함수이름을 이용해 태그처럼 활용 가능