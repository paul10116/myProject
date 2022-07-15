import { useRef, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { updatePhoto, updatePassword } from "../features/user";

const Profile = () => {
  const imgRef = useRef();
  const passRef = useRef();
  const dispatch = useDispatch();
  const userInfo = useSelector((state) => state.user.value);
  const [error, setError] = useState(null);

  function imageUpdate() {
    const username = userInfo.currentUser.username;
    const imageUrl = imgRef.current.value;

    if (imageUrl.length < 10) throw new Error("URL incorrect");

    const userIndex = userInfo.allUsers.findIndex(
      (x) => x.username === username
    );

    let userUpdate = { ...userInfo.currentUser };
    userUpdate.image = imageUrl;

    dispatch(
      updatePhoto({
        index: userIndex,
        current: userUpdate,
      })
    );
  }

  function updatePass() {
    const newPass = passRef.current.value;
    const username = userInfo.currentUser.username;
    let invalid = false;

    const userIndex = userInfo.allUsers.findIndex(
      (x) => x.username === username
    );

    let userUpdate = { ...userInfo.currentUser };
    userUpdate.password = newPass;
    console.log(userUpdate.password);

    if (newPass.length < 4 || newPass.length > 20) {
      invalid = "Password must be between 4-20 simbols";
    } else {
      dispatch(
        updatePassword({
          index: userIndex,
          current: userUpdate,
        })
      );
    }

    if (invalid) {
      setError(invalid);
    } else {
      setError(null);
    }
  }

  return (
    <div className="profilePage">
      <div className="profile-img">
        <img src={userInfo.currentUser.image} alt="forest" />
      </div>
      <div>
        <h5>Username: {userInfo.currentUser.username}</h5>
        <h5>Email: {userInfo.currentUser.email}</h5>
        <input ref={passRef} type="text" placeholder="New password..." />
        <br />
        <input ref={imgRef} type="text" placeholder="image URL..." />
        <br />
        <button onClick={imageUpdate}>Update Photo</button>
        <button onClick={updatePass}>Update Password</button>
        {error && <h6 style={{ color: "red" }}>{error}</h6>}
      </div>
    </div>
  );
};

export default Profile;
