import { async } from "@firebase/util";
import { useAuth } from "../context/authContext";

export const Home = () => {
  const { user, logout, loading } = useAuth();

  const handleLogout = async () => {
    await logout();
  };

  if (loading) {
    return <h1>Loading...</h1>;
  }

  return (
    <div className="w-full max-w-xs m-auto text-black">
      <div className="bg-white rounded shadow-md px-8 pt-6 pb-8 mb-4 ">
        <h1 className="text-xl mb-4 text-center">
          welcome {user.displayName || user.email}
        </h1>
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white text-sm font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline w-full"
          onClick={handleLogout}
        >
          logout
        </button>
      </div>
    </div>
  );
};
