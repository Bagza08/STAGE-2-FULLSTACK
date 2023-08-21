import { ChangeEvent, useState } from "react";
import { API } from "../lib/API";
import { useNavigate } from "react-router-dom";

interface Register {
  username: string;
  full_name: string;
  email: string;
  password: string;
}

export function useRegister() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState<Register>({
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
