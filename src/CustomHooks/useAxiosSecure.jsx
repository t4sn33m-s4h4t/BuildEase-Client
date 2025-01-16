import axios from "axios";

const useAxiosSecure = () => {
  
  const instance = axios.create({
    baseURL: import.meta.env.REACT_APP_API_URL,
  });
  
  instance.interceptors.request.use((config) => {
    const token = localStorage.getItem("authToken");
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  });

  return instance;
};

export default useAxiosSecure;
