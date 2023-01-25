### react Day4
1. 컴포넌트 재사용
-컴포넌트를 따로 분류해서 재사용에 용이하게 만들 수 있음

2. 리액트 랜더링 방식
-새로운 state값이 적용된 element를 return
-버츄얼 돔(가상 돔). 실제 dom tree에 바로 반영하지 않고 virtual dom에 적용(화면을 바꿀 준비. 실제로 반영된 것은 아님)하고 state변경 전후의 virtual dom을 비교하여 바뀐 부분만 실제 dom에 반영함. 브라우저 자원을 효율적으로 활용 가능

3. 디자인 적용법
1 이미지 삽입
import 구문 활용 이미지 주소를 src 속성으로
~~~javascript
import imgUrl from './assets/image.png';
function  Apple() { 
	return  <img src={imgUrl}; 
}
~~~

2 인라인 스타일
-vs. html
html에서는 문자열로 스타일 속성값 지정
리액트에서는 객체로 스타일 속성값 지정

~~~javascript
const style = {
	css속성: 'css값',
	backgroundColor:  "green",
};
function Button({ children, onClick }) {
	return (
		<button style={style} onClick={onClick}>
			{children}
		</button>;
	);
}
~~~
속성명은 카멜케이스로 작성

-비추천
~~~javascript
function Button({ children, onClick }) {
	return (
		<button style={{backgroundColor:  "green"}} onClick={onClick}>
			{children}
		</button>;
	);
}
~~~

3 css 파일로 스타일 속성 지정 
- 자바스크립트 파일에서 css파일을 임포트 하면(from없이) head 태그 안에 style 태그가 작성된다 
~~~javascript
import  "./index.css";
~~~

4 클래스명 활용 
- 클래스명을 추가할때는 빈 공백이 필요 공백없으면 하나의 클래스로 취급
~~~javascript
const  classNames  =  `Button ${color}`;
~~~
- margin 등 컴포넌트 외부에서 영향을 주는 속성은 컴포넌트 외부에서 정리하는 것이 좋음. 더 직관적
- 클래스네임 바로 적용할때는
~~~javascript
function Button() {
	return (
		<button  className="클래스네임">
	);
}
~~~
- 클래스네임 prop로 받아올때는
~~~javascript
function Icon({className }) {
  return <img className={className}/>;
}
~~~

**classnames 라이브러리
npm install classnames 
설치 필요
~~~javascript
import classNames from 'classnames';

function Button({ isPending, color, size, invert, children }) {
  return (
    <button
      className={classNames(
        'Button',
        isPending && 'pending',
        color,
        size,
        invert && 'invert',
      )}>
     { children }
   </button >
  );
}

export default Button;
~~~
cf. classnames 라이브러리 사용 안할때
~~~javascript
function Button({ isPending, color, size, invert, children }) {
  const classNames = `Button ${isPending ? 'pending' : ''} ${color} ${size} ${invert ? 'invert' : ''}`;
  return <button className={classNames}>{children}</button>;
}

export default Button;
~~~