import { Await, useParams } from "react-router-dom";
import { API, setAuthToken } from "../lib/API";
import { IThreadCards } from "./../features/thread/components/ThreadsCard";
import { useState, useEffect } from "react";

export function useHook() {
  //fetchData
  const [thread, setThreads] = useState<IThreadCards[]>([]);

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

  const [detailThreads, setDetailThreads] = useState<IThreadCards | null>(null);

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

  const [contentData, setContentData] = useState("");
  const handleContentChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;
    setContentData(value);
  };

  const [imageData, setImageData] = useState<string | Blob>();

  const handleImageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files && event.target.files[0];
    if (file) {
      setImageData(file);
    }
  };

  const fetchCreatePost = async (event: React.FormEvent) => {
    event.preventDefault();
    setAuthToken(localStorage.token);
    const formData = new FormData();
    formData.append("content", contentData);
    if (imageData !== null) {
      formData.append("image", imageData as File);
    } else {
      formData.append("image", "");
    }

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
    handleImageChange,
    handleContentChange,
  };
}
