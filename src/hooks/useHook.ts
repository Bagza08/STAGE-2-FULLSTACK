import { Await, useParams } from "react-router-dom";
import { API } from "../lib/API";
import { ThreadCards } from "./../features/thread/components/ThreadsCard";
import { useState, useEffect } from "react";

export function useHook() {
  //fetchData
  const [thread, setThreads] = useState<ThreadCards[]>([]);

  async function fetch() {
    const response = await API.get("/threads");
    setThreads(response.data);
    console.log(response.data, "ini dataa");
  }

  useEffect(() => {
    fetch();
  }, []);

  //detail threads
  const { id } = useParams();

  const [detailThreads, setDetailThreads] = useState<ThreadCards | null>(null);

  async function getThread() {
    try {
      const response = await API.get(`/thread/${id}`);
      setDetailThreads(response.data);
    } catch (error) {
      console.log("data gagal di ambil", error);
    }
  }

  useEffect(() => {
    getThread();
  }, []);

  //post
  const [formData, setFormData] = useState({
    content: "",
    image: "",
  });

  const fetchCreatePost = async (event: React.FormEvent) => {
    event.preventDefault();
    try {
      const response = await API.post("/thread/create", formData);
      console.log("error", response.data);
    } catch (error) {
      console.log("data gagal di post");
    }
  };

  const handchange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    console.log(name);
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  return {
    thread,
    detailThreads,
    fetchCreatePost,
    handchange,
    formData,
    setFormData,
  };
}
