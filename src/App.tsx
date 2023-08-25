import { Routes, Route, useNavigate, Outlet, Navigate } from "react-router-dom";
import Register from "./pages/Register";
import IndexPage from "./pages";
import DetailPage from "./pages/DetailPage";
import Login from "./pages/Login";
import { API, setAuthToken } from "./lib/API";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { AUTH_CHECK, AUTH_ERROR } from "./stores/rootReducer";
import { useSelector } from "react-redux";
import { RootState } from "./stores/types/rootState";

function App() {
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const auth = useSelector((state: RootState) => state.auth);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  async function AuthCheck() {
    try {
      setAuthToken(localStorage.token);
      const response = await API.get("/check");
      dispatch(AUTH_CHECK(response.data.user));
      //console.log("auth cek berhasil", response);
      setIsLoading(false);
    } catch (err) {
      dispatch(AUTH_ERROR());
      setIsLoading(false);
      navigate("/login");
      // console.log("auth error", err);
    }
  }

  useEffect(() => {
    if (localStorage.token) {
      AuthCheck();
    } else {
      setIsLoading(false);
    }
  }, []);

  function IsLogin() {
    if (!auth.email) {
      return <Navigate to={"/login"} />;
    } else {
      return <Outlet />;
    }
  }

  function IsNotLogin() {
    if (auth.email) {
      return <Navigate to={"/"} />;
    } else {
      return <Outlet />;
    }
  }

  return (
    <>
      {isLoading ? null : (
        <Routes>
          <Route path="/" element={<IsLogin />}>
            <Route path="/" element={<IndexPage />} />
            <Route path="/threaddetail/:id" element={<DetailPage />} />
          </Route>

          <Route path="/" element={<IsNotLogin />}>
            <Route path="/register" element={<Register />} />
            <Route path="/login" element={<Login />} />
          </Route>
        </Routes>
      )}
    </>
  );
}

export default App;
