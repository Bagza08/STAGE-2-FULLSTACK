import { ChangeEvent, useState } from "react";
import { API } from "../lib/API";
import { useNavigate } from "react-router-dom";
import { IRegister } from "../interfaces/user";

export function useRegister() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState<IRegister>({
    username: "",
    full_name: "",
    email: "",
    password: "",
  });

  const handleRegister = (event: React.FormEvent) => {
    event.preventDefault();
    try {
      const response = API.post("/auth/register", formData);
      console.log("error", response);
      navigate("/login");
    } catch (error) {
      console.log("REGISTER GAGAL!");
    }
  };

  const handchange = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    console.log(name);
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  return { handleRegister, useRegister, handchange, formData };
}
