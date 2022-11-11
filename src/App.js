import { Routes, Route } from "react-router-dom";
import { Alert } from "./components/Alert";
import { Home } from "./components/Home";
import { Register } from "./components/Register";
import { ProtectedRoute } from "./components/ProtectedRoute";
import { Login } from "./components/Login";
import { AuthProvider } from "./context/authContext";

const App = () => {
  return (
    <div className="bg-slate-200 h-screen text-white flex text-black ">
      <AuthProvider>
        <Routes>
          <Route
            path="/"
            element={
              <ProtectedRoute>
                <Home />
              </ProtectedRoute>
            }
          />
          <Route path="/alert" element={<Alert />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Routes>
      </AuthProvider>
    </div>
  );
};

export default App;
