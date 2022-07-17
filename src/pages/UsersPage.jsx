import React from "react";
import { useNavigate } from "react-router-dom";
import UserProfile from "./UserProfile";

const UsersPage = ({ user }) => {
  const navigate = useNavigate();
  const profileUser = user;
  const id = user.id;
  console.log(id);

  function profileNav() {
    <UserProfile user={profileUser} />;
    navigate("/user/" + id);
  }

  return (
    <div className="userCard" onClick={profileNav}>
      <div className="image">
        <img src={user.image} alt="ocean" />
      </div>
      <div>
        <h5>Surname: {user.username}</h5>
        <h5>User role: admin</h5>
      </div>
    </div>
  );
};

export default UsersPage;
