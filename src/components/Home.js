import { async } from "@firebase/util";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/authContext";

export const Home = () => {
  const { user, logout, loading } = useAuth();
  const navigate = useNavigate();

  const handleLogout = async () => {
    await logout();
    navigate("/login");
  };

  if (loading) {
    return <h1>Loading...</h1>;
  }

  return (
    <div>
      <h1>welcome {user.email}</h1>
      <button onClick={handleLogout}>logout</button>
    </div>
  );
};
