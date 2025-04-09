import AxiosUtil from "./AxiosUtil";

const AuthenticationService = () => {
  const loginAPI = async (body) => {
    const { getAxiosInstance } = AxiosUtil();
    try {
      const resp = await getAxiosInstance().post(
        "api/auth/login",
        JSON.stringify(body),
        {
          headers: { "Content-Type": "application/json" },
        }
      );
      return resp.data;
    } catch (error) {
      throw new Error(`Authentification : ${error.message}`);
    }
  };

  const logoutAPI = () => {
    localStorage.removeItem("token"); // Clear auth token
  };

  return {
    loginAPI,
    logoutAPI,
  };
};

export default AuthenticationService;
