import { ChangeEvent, useState } from "react";
import { API, setAuthToken } from "../lib/API";
import { useNavigate } from "react-router-dom";

interface Login {
  email: string;
  password: string;
}

export function useLogin() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState<Login>({
    email: "",
    password: "",
  });

  const handchange = (event: ChangeEvent<HTMLInputElement>) => {
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
      console.log("login berhasil yeyyyyyyyyy!!", response);
      alert("Berhasil Login!");
      localStorage.setItem("token", response.data.token);
      setAuthToken(localStorage.token);
      navigate("/");
    } catch (error) {
      alert("LOGIN GAGAL SILAHKAN LOGIN KEMBALI!");
      console.log("LOGIN GAGAL!!", error);
    }
  }

  return { useLogin, handleLogin, handchange, formData };
}
