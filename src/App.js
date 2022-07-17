import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useSelector } from "react-redux";
import Conversations from "./pages/Conversations";
import Toolbar from "./components/Toolbar";
import LoginPage from "./pages/LoginPage";
import Register from "./pages/Register";
import Profile from "./pages/Profile";
import UserProfile from "./pages/UserProfile";
import UsersPage from "./pages/UsersPage";

function App() {
  const allUsers = useSelector((state) => state.user.value.allUsers);

  return (
    <div className="app">
      <BrowserRouter>
        <Toolbar />
        <Routes>
          <Route path="/" element={<LoginPage />} />
          <Route path="register" element={<Register />} />
          <Route path="profile" element={<Profile />} />
          <Route
            path="usersPage"
            element={allUsers.map((user) => (
              <UsersPage key={user.id} user={user} />
            ))}
          />
          <Route path="user" element={<UserProfile />} />
          <Route path="conversations" element={<Conversations />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
