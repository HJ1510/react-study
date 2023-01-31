1. 라우팅(routing)
호출되는 url에 따라 페이지 이동을 설정. 페이지별로 컴포넌트를 분리하여 관리하기 용이

2. 싱글페이지 애플리케이션
페이지마다 다른 html을 받아오던 예전과 달리 html은 한번만 받아오고 필요한 데이터만 새로 불러와 업데이트. user입장에선 여러 페이지가 존재하는 것으로 느껴짐

3. 사용법
3-1 설치
```js
yarn add react-router-dom
or
npm install --save react-router-dom
```
3-2 적용

**`index.js`**
```js
import ReactDOM from 'react-dom';
import App from './App';
import { BrowserRouter } from 'react-router-dom';

ReactDOM.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.getElementById('root')
);
```
상위 컴포넌트에 BrowserRouter 적용해두면 하위 모든 컴포넌트에서 라우팅 기능 (Route, Link) 사용 가능

3-3 Route 컴포넌트
`Route`  사용법

```js
<Route path="주소규칙" element={보여 줄 컴포넌트 JSX} />
```

**`App.js`**

```js
import { Route, Routes } from 'react-router-dom';
import Home from './Home';

function  App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route element={<LoginPage />} path="/login" />
    </Routes>
  );
};

export default App;
```
3-4.  Link 컴포넌트
`Link`  컴포넌트 사용법
```js
<Link to="경로">링크 이름</Link>
```
**`Home.js`**

```js
function  Home() {
  return (
    <div>
      <h1>Home</h1>
      <p>firstPage</p>
      <Link  to="/login">로그인</Link>
    </div>
  );
};

export default Home;
```

**`LoginPage.js`**

```js
function LoginPage() {
  return <div>로그인</div>;
}

export default LoginPage;
```
4. URL파라미터와 쿼리스트링
4-1. URL파라미터
? /profiles/id

**`Profile.js`**

```js
import { useParams } from 'react-router-dom';

const data = {
  dooly: {
    name: '둘리',
    description: '호이호이',
  },
};

const Profile = () => {
  const params = useParams();
  const profile = data[params.username];

  return (
    <div>
      <h1>사용자 프로필</h1>
      {profile ? (
        <div>
          <h2>{profile.name}</h2>
          <p>{profile.description}</p>
        </div>
      ) : (
        <p>존재하지 않는 프로필입니다.</p>
      )}
    </div>
  );
};

export default Profile;
```
**`App.js`**

```js
import { Route, Routes } from 'react-router-dom';
import Home from './Home';
import Profile from './Profile';

function  App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route element={<LoginPage />} path="/login" />
      <Route path="/profiles/:username" element={<Profile />} />
    </Routes>
  );
};

export default App;
```

**`Home.js`**

```js
function  Home() {
  return (
    <div>
      <h1>Home</h1>
      <p>firstPage</p>
      <Link  to="/login">로그인</Link>
      <Link to="/profiles/dooly">dooly프로필</Link>
      <Link to="/profiles/void">프로필없음</Link>
    </div>
  );
};

export default Home;
```
Home에서 링크를 누르면 해당 프로필로 이동

4-2 쿼리스트링
?/articles?**page=1&keyword=react

참고 https://youtu.be/CHHXeHVK-8U
https://velog.io/@velopert/react-router-v6-tutorial