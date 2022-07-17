import { useRef } from "react";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";

const SingleUserPage = () => {
  const { username } = useParams();
  const allUsers = useSelector((state) => state.user.value.allUsers);
  const user = allUsers.find((x) => x.username === username);
  const msgRef = useRef();

  function message() {
    const msg = msgRef.current.value;
    console.log(msg);
  }
  return (
    <div className="singleUserPage">
      <div className="profilePage">
        <div className="profile-img">
          <img src={user.image} alt="user" />
        </div>
        <div>
          <h5>
            Username: <span> {user.username} </span>
          </h5>
          <h5>
            Email: <span> {user.email} </span>
          </h5>
        </div>
      </div>
      <div className="chat-area">
        <label htmlFor="chat">Your message:</label>
        <textarea
          ref={msgRef}
          id="chat"
          cols="50"
          rows="10"
          placeholder="Write message..."
        ></textarea>
        <button onClick={message}>Send message</button>
      </div>
    </div>
  );
};

export default SingleUserPage;
