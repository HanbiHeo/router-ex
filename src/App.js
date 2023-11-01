import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import About from "./pages/About";
import MyPage from "./pages/MyPage";
import Setting from "./pages/Setting";
import Profile from "./pages/Profile";
import Login from "./pages/Login";
import Layout from "./pages/Layout";
import Article from "./pages/Article";
import Articles from "./pages/Articles";

//MyPage와 Setting 페이지 추가 해보기
//Home에서 About, MyPage, Setting페이지 링크 보여주고 이동
//이동된 각 페이지에서는 홈으로 이동하는 링크 만들고 Home이동
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route element={<Layout />}>
          <Route path="/home" element={<Home />} />
          <Route path="/About" element={<About />} />
          <Route path="/mypage" element={<MyPage />} />
          <Route path="/setting" element={<Setting />} />
          <Route path="/profiles/:username" element={<Profile />} />
          {/* 중첩라우트 */}
          <Route path="/articles" element={<Articles />}>
            <Route path="/articles/:id" element={<Article />} />
          </Route>
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
