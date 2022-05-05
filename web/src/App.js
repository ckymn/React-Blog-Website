import TopBar from "./components/topBar/TopBar";
import Home from "./pages/home/Home";
import Register from "./pages/register/Register";
import Login from "./pages/login/Login.jsx";
import Settings from "./pages/settings/Settings";
import Single from "./pages/singlePage/Single";
import Write from "./pages/write/Write";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  const user = false;

  return (
    <div className="App">
      <BrowserRouter>
        <TopBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/register" element={user ? <Home /> : <Register />} />
          <Route path="/login" element={user ? <Register /> : <Login />} />
          <Route
            path="/settings"
            element={user ? <Settings /> : <Register />}
          />
          <Route path="/post/:postId" element={<Single />} />
          <Route path="/write" element={user ? <Write /> : <Register />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
