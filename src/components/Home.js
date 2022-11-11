import { useAuth } from "../context/authContext";

export const Home = () => {
  const { user } = useAuth();

  return (
    <div>
      <h1>welcome {user.email}</h1>
    </div>
  );
};
