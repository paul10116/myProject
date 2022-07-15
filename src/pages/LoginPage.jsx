import { useRef, useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { setCurrentUser } from "../features/user";

const LoginPage = () => {
  const userRef = useRef();
  const passRef = useRef();

  const navigation = useNavigate();
  const dispatch = useDispatch();

  const [error, setError] = useState(null);
  const allUsers = useSelector((state) => state.user.value.allUsers);
  console.log(allUsers);

  function login() {
    let invalid = false;
    const user = {
      username: userRef.current.value,
      password: passRef.current.value,
    };

    const usernameCheck = allUsers.find((x) => x.username === user.username);
    const passwordCheck = allUsers.find((x) => x.password === user.password);

    const userLoggedIn = allUsers.find(
      (x) => x.username === user.username && x.password === user.password
    );

    if (!usernameCheck) {
      invalid = "User Doesn't exist";
    } else if (!passwordCheck) {
      invalid = "Check password";
    }

    if (invalid) {
      setError(invalid);
    } else {
      dispatch(setCurrentUser(userLoggedIn));
      navigation("/profile");
    }
  }

  return (
    <div className="loginPage">
      <h5>Login</h5>
      <input ref={userRef} type="text" placeholder="Username..." />
      <br />
      <input ref={passRef} type="text" placeholder="Password..." />
      <br />
      <button onClick={login}>Login</button>
      <h6>Not registered?</h6>
      <Link to="register">Click here</Link>
      <br />
      {error && <span style={{ color: "red" }}>{error}</span>}
    </div>
  );
};

export default LoginPage;
