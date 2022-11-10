import { useState } from "react";

export const Register = () => {
  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  //para actualizar el state email and password usamos =>
  const handleChange = (e) => {
    console.log(e);
  };

  return (
    <form>
      <label htmlFor="email">Email</label>
      <input type="email" name="email" placeholder="youremail@company.ltd" />

      <label htmlFor="password">Password</label>
      <input type="password" name="password" id="password" />
    </form>
  );
};
