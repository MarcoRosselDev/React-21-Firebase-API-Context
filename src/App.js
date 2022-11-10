import { Routes, Route } from "react-router-dom";
import { Alert } from "./components/Alert";
import { Home } from "./components/Home";
import { Register } from "./components/Register";
import { ProjectedRoute } from "./components/ProjectedRoute";
import { Login } from "./components/Login";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />}></Route>
      <Route path="/alert" element={<Alert />}></Route>
      <Route path="/login" element={<Login />}></Route>
      <Route path="/register" element={<Register />}></Route>
      <Route path="/projected-route" element={<ProjectedRoute />}></Route>
    </Routes>
  );
};

export default App;
