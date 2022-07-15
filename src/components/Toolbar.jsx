import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const Toolbar = () => {
  const allusers = useSelector((state) => state.user.value.allusers);

  return (
    <div className="toolbar">
      <Link to="/">Login</Link>
      <Link to="register">Register</Link>
      <Link to="profile">Profile</Link>
      <Link to="usersPage">All users</Link>
      <Link to="conversations">Conversations</Link>
    </div>
  );
};

export default Toolbar;
