import { Navigate, useNavigate } from "react-router-dom";

const MyPage = () => {
  const navigate = useNavigate();
  const isLogin = true;

  if (isLogin) {
    return (
      <>
        <h1>MyPage</h1>
        <p>여기는 MyPage 입니다.</p>
        {/* <Link to="/">Home로 이동</Link> */}
        {/* navigate 스택구조. 링크로 이동하기 힘든 경우, navigate를 쓰며, 자주 쓰이는 기능 */}
        <button onClick={() => navigate(-1)}>뒤로가기</button>
      </>
    );
  } else {
    return <Navigate to="/login" replace={true} />;
  }
};
export default MyPage;
