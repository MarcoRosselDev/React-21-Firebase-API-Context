import { useState } from "react";
import { useAuth } from "../context/authContext";
import { useNavigate } from "react-router-dom";

export const Login = () => {
  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  const { login, loginWithGoogle } = useAuth();
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
    }
  };

  // login with google

  const handleGoogleSignin = async () => {
    try {
      await loginWithGoogle();
      navigate("/");
    } catch (error) {
      setError(error.message);
    }
  };

  return (
    <div>
      {error && <p>{error}</p>}
      <form onSubmit={handleSubmit}>
        <label htmlFor="email">Email</label>
        <input
          type="email"
          name="email"
          placeholder="youremail@company.ltd"
          onChange={handleChange}
        />

        <label htmlFor="password">Password</label>
        <input
          type="password"
          name="password"
          id="password"
          onChange={handleChange}
          placeholder="******"
        />
        <button>login</button>
      </form>

      {/* login with email */}
      <button onClick={handleGoogleSignin}>Google Login</button>
    </div>
  );
};
