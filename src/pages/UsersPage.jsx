import React from "react";
import { useNavigate } from "react-router-dom";
import { Route } from "react-router-dom";

const UsersPage = ({ user }) => {
  return (
    <div className="userCard">
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
