import { Link } from 'react-router-dom';

function Home() {
  return (
    <div>
      <h1>홈</h1>
      <p>가장 먼저 보여지는 페이지입니다.</p>
      <ul>
        <li>
          <Link to="/login">로그인</Link>
        </li>
        <li>
          <Link to="/profiles/velopert">velopert프로필</Link>
        </li>
        <li>
          <Link to="/profiles/gildong">gildong프로필</Link>
        </li>
        <li>
          <Link to="/profiles/dooly">dooly프로필</Link>
        </li>
        <li>
          <Link to="/profiles/void">프로필없음</Link>
        </li>
      </ul>
    </div>
  );
}

export default Home;
