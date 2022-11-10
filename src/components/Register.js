import { useState } from "react";
import { useAuth } from "../context/authContext";

export const Register = () => {
  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  const { signup } = useAuth();

  //para actualizar el state email and password usamos =>
  const handleChange = ({ target: { name, value } }) => {
    setUser({ ...user, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    signup(user.email, user.password);
  };

  return (
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
      />
      <button>Register</button>
    </form>
  );
};
