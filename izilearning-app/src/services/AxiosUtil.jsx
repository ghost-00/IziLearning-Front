import axios from "axios";

const AxiosUtil = () => {
  const instance = axios.create({
    baseURL: "/",
    headers: {
      Accept: "application/json",
    },
  });

  const getAxiosInstance = () => {
    return instance;
  };

  const getToken = () => {
    return localStorage.getItem("token");
  };

  const isAxiosError = (error) => {
    return axios.isAxiosError(error);
  };
  const logAxiosError = (error) => {
    if (axios.isAxiosError(error)) {
      console.log("Axios Error:", {
        message: error.message,
        status: error.response?.status,
        headers: error.response?.headers,
        data: error.response?.data,
      });
    } else {
      console.error("Unexpected error:", error);
    }
  };

  return {
    getAxiosInstance,
    getToken,
    logAxiosError,
    isAxiosError,
  };
};

export default AxiosUtil;
