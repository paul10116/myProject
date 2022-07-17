import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Toolbar from "./components/Toolbar";
import LoginPage from "./pages/LoginPage";
import Register from "./pages/Register";
import Profile from "./pages/Profile";
import UsersPage from "./pages/UsersPage";
import ErrorPage from "./pages/ErrorPage";

function App() {
  return (
    <div className="app">
      <BrowserRouter>
        <Toolbar />
        <Routes>
          <Route path="/" element={<LoginPage />} />
          <Route path="register" element={<Register />} />
          <Route path="profile" element={<Profile />} />
          <Route path="usersPage" element={<UsersPage />} />
          <Route path="*" element={<ErrorPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
