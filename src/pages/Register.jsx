import { useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addUser } from "../features/user";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const surnameRef = useRef();
  const emailRef = useRef();
  const passRef = useRef();
  const confirmRef = useRef();
  const allUsers = useSelector((state) => state.user.value.allUsers);

  const navigation = useNavigate();
  const dispatch = useDispatch();

  const [error, setError] = useState(null);

  function registerUser() {
    let invalid = false;

    const user = {
      username: surnameRef.current.value,
      email: emailRef.current.value,
      password: passRef.current.value,
      confirmation: confirmRef.current.value,
    };

    const userMatch = allUsers.find((x) => x.username === user.username);

    if (user.username.length < 4 || user.username.length > 20) {
      invalid = "Username must be 4-20 simbols length";
    } else if (user.password.length < 4 || user.password.length > 20) {
      invalid = "Password must be 4-20 simbols length";
    } else if (user.password !== user.confirmation) {
      invalid = "Passwords do not match";
    } else if (userMatch) {
      invalid = "Username taken already";
    }
    if (invalid) {
      setError(invalid);
    } else {
      dispatch(addUser(user));
      navigation("/");
    }
  }

  return (
    <div className="registerPage">
      <h4>Registration</h4>
      <input ref={surnameRef} type="text" placeholder="Username..." />
      <br />
      <input ref={emailRef} type="email" placeholder="Email..." />
      <br />
      <input ref={passRef} type="text" placeholder="Password..." />
      <br />
      <input ref={confirmRef} type="text" placeholder="Confirm password..." />
      <br />
      <button onClick={registerUser}>Register</button>
      <br />
      {error && <span style={{ color: "red" }}>{error}</span>}
    </div>
  );
};

export default Register;
