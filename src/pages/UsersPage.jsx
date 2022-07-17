import { useSelector } from "react-redux";
import PersonCard from "../components/PersonCard";

const UsersPage = () => {
  const allUsers = useSelector((state) => state.user.value.allUsers);

  return (
    <div className="usersPage">
      {allUsers.map((x) => (
        <PersonCard key={x.id} user={x} />
      ))}
    </div>
  );
};

export default UsersPage;
