import { Link, useParams } from "react-router-dom";
const data = {
  frontend: {
    name: "1",
    description: "1-111111111111",
  },
  backend: {
    name: "2",
    description: "2-222222222222",
  },
  detabase: {
    name: "3",
    description: "3-333333333333333",
  },
};

const Profile = () => {
  // 리액트 라우터에서 URL파라미터 값을 가져오기 위한 HOOK(use로 시작하는 모든건 hook:함수형 컴퍼넌트.).
  const params = useParams();
  // username : 호출하는 페이지에서 지정한 유동적인 값으로 대체되어 컴포넌트에 전달
  const profile = data[params.username];
  return (
    <>
      <h1>사용자 프로필</h1>
      {profile ? (
        <div>
          <h2>{profile.name}</h2>
          <p>{profile.description}</p>
        </div>
      ) : (
        <p>존재하지 않는 프로필 입니다.</p>
      )}
      <br />
      <Link to="/home">Home로 이동</Link>
    </>
  );
};
export default Profile;
