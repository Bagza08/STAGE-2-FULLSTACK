import { Routes, Route, useNavigate } from "react-router-dom";
import Register from "./pages/Register";
import IndexPage from "./pages";
import DetailPage from "./pages/DetailPage";
import Login from "./pages/Login";
import { API, setAuthToken } from "./lib/API";
import { useEffect, useState } from "react";

function App() {
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const navigate = useNavigate();

  async function AuthCheck() {
    try {
      setAuthToken(localStorage.token);
      const response = await API.get("/check");
      console.log("auth cek berhasil", response);
      setIsLoading(false);
    } catch (err) {
      localStorage.removeItem("token");
      navigate("/login");
      setIsLoading(false);
      console.log("auth error", err);
    }
  }

  useEffect(() => {
    AuthCheck();
  }, []);

  return (
    <>
      {isLoading ? null : (
        <Routes>
          <Route path="/" element={<IndexPage />} />
          <Route path="/threaddetail/:id" element={<DetailPage />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      )}
    </>
  );
}

export default App;
