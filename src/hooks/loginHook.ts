import { ChangeEvent, useState } from "react";
import { API, setAuthToken } from "../lib/API";
import { useNavigate } from "react-router-dom";
import { ILogin } from "../interfaces/user";
import { AUTH_LOGIN, AUTH_LOGOUT } from "../stores/rootReducer";
import { useDispatch } from "react-redux";

export function useLogin() {
  const navigate = useNavigate();
  const dispach = useDispatch();
  const [formData, setFormData] = useState<ILogin>({
    email: "",
    password: "",
  });

  const handChange = (event: ChangeEvent<HTMLInputElement>) => {
    //const { name, value } = event.target;
    //console.log(name);
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
  };

  async function handleLogin() {
    try {
      const response = await API.post("/auth/login", formData);
      dispach(AUTH_LOGIN(response.data));
      console.log(response.data);
      // console.log("login berhasil yeyyyyyyyyy!!", response);
      // alert("Berhasil Login!");
      // localStorage.setItem("token", response.data.token);
      navigate("/");
    } catch (error) {
      alert("LOGIN GAGAL SILAHKAN LOGIN KEMBALI!");
      console.log("LOGIN GAGAL!!", error);
    }
  }

  async function handleLogout() {
    //isloading()
    try {
      const response = await API.get("/auth/logout");
      dispach(AUTH_LOGOUT(response.data));
      //console.log(response.data);
      // console.log("login berhasil yeyyyyyyyyy!!", response);
      // alert("Berhasil Login!");
      // localStorage.setItem("token", response.data.token);
      navigate("/login");
    } catch (error) {
      alert("LOGOUT GAGAL!");
      console.log("LOGIN GAGAL!!", error);
    }
  }

  return { useLogin, handleLogin, handChange, formData, handleLogout };
}
