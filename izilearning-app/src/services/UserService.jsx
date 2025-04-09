import AxiosUtil from "./AxiosUtil";

export const getCurrentUserAPI = async () => {
  const { getAxiosInstance, getToken, isAxiosError } = AxiosUtil();
  if (getToken()) {
    const axiosInstance = getAxiosInstance();
    try {
      const resp = await axiosInstance.get("api/user/me", {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${getToken()}`,
        },
      });
      return resp.data;
    } catch (error) {
      if (isAxiosError(error)) {
        console.error("Axios Error in service:", error.message);
        throw new Error(`User API Error: ${error.message}`); // Re-throw
      } else {
        throw error;
      }
    }
  }
  return null;
};
