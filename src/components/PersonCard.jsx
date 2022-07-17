import { useNavigate } from "react-router-dom";
import SingleUserPage from "../pages/SingleUserPage";

const PersonCard = (user) => {
  const nav = useNavigate();

  const navigation = () => {
    <SingleUserPage />;
    nav("/user/" + user.user.username);
  };
  return (
    <div className="personCard" onClick={navigation}>
      <img src={user.user.image} alt="person" />
      <h4>
        Username: <span> {user.user.username} </span>
      </h4>
      <h6>Role: Adminstrator</h6>
    </div>
  );
};

export default PersonCard;
