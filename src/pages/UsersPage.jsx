import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux/es/exports";

const UsersPage = () => {
  const allUsers = useSelector((state) => state.user.value.allUsers);

  return <div className="usersPage">All user's page</div>;
};

export default UsersPage;
