import { useState } from "react";
import { useAuth } from "../context/authContext";
import { Link, useNavigate } from "react-router-dom";
import { Alert } from "./Alert";

export const Login = () => {
  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  const { login, loginWithGoogle, resetPassword } = useAuth();
  const navigate = useNavigate();
  const [error, setError] = useState();

  //para actualizar el state email and password usamos =>
  const handleChange = ({ target: { name, value } }) => {
    setUser({ ...user, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(""); // para quitar el div con el msg de error
    try {
      await login(user.email, user.password);
      navigate("/");
      // si todo fue bien me devolvera a la paguina ./    (inicio)
    } catch (error) {
      setError(error.message);
      console.log(error.message);
    }
  };

  // login with google

  const handleGoogleSignin = async () => {
    try {
      //throw new Error("google error");
      await loginWithGoogle();
      navigate("/");
    } catch (error) {
      setError(error.message);
    }
  };

  const handleResetPassword = async () => {
    if (!user.email) {
      return setError("Please enter your email");
    }
    try {
      await resetPassword(user.email);
      setError("we sent you an email with a link to reset your password");
    } catch (error) {
      setError(error.message);
    }
  };

  return (
    <div className="w-full max-w-xs m-auto">
      {error && <Alert message={error} />}
      <form
        onSubmit={handleSubmit}
        className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4"
      >
        <div className="mb-4">
          <label
            htmlFor="email"
            className="block text-gray-700 text-sm font-bold mb-2"
          >
            Email
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight"
            type="email"
            name="email"
            placeholder="youremail@company.ltd"
            onChange={handleChange}
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="password"
            className="block text-gray-700 text-sm font-bold mb-2"
          >
            Password
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight"
            type="password"
            name="password"
            id="password"
            onChange={handleChange}
            placeholder="******"
          />
        </div>
        <button className="bg-blue-500 hover:bg-blue-700 text-white text-sm font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline w-full">
          login
        </button>
      </form>

      <p className="my-4 text-sm flex justify-between px-3">
        Don't have an Account <Link to="/register">Register</Link>
      </p>

      {/* login with email */}
      <button
        onClick={handleGoogleSignin}
        className="bg-slate-50 hover:bg-slate-200 text-block shadow-md rounded border-2 w-full border-gray-300 py-2 px-4"
      >
        Google Login
      </button>

      <a
        href="#!"
        className="my-4 text-sm flex justify-between px-3"
        onClick={handleResetPassword}
      >
        Forgot Password ?
      </a>
    </div>
  );
};
