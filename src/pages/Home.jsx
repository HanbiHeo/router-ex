import { Link, Navigate, useNavigate } from "react-router-dom";

const Home = () => {
  //Link툴을 사용하지 않고 다른 페이지로 이동해야할 상황에서 사용하는 Hook
  const Navigate = useNavigate();
  return (
    <>
      <h1>여기가 홈 입니다.</h1>
      <p>가장 먼저 보여지는 페이지 입니다.</p>
      <Link to="/about">소개 페이지로 이동</Link>
      <br />
      <button onClick={() => Navigate("/MyPage")}> 마이페이지 이동 </button>
      <br />
      <Link to="/mypage">MyPage로 이동</Link>
      <br />
      <Link to="/setting">Setting 페이지로 이동</Link>
      <br />
      <ul>
        <li>
          <Link to="/profiles/frontend">frontend프로필</Link>
        </li>
        <li>
          <Link to="/profiles/backend">backend프로필</Link>
        </li>
        <li>
          <Link to="/profiles/detabase">detabase프로필</Link>
        </li>
        <li>
          <Link to="/articles/">게시판 목록</Link>
        </li>
      </ul>
    </>
  );
};
export default Home;
