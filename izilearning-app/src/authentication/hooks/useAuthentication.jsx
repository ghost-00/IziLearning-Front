import { useState } from "react";
import AuthenticationService from "../../services/AuthenticationService";

const useAuthentication = () => {
  const { loginAPI, logoutAPI } = AuthenticationService();

  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [isLogged, setIsLogged] = useState(false);

  const login = async (form) => {
    setIsLoading(true);
    try {
      const data = await loginAPI(form); // Call service
      localStorage.setItem("token", data);
    } catch (err) {
      setError(err.message);
    } finally {
      setIsLoading(false);
      setIsLogged(true);
    }
  };

  const logout = () => {
    logoutAPI();
  };

  return {
    isLoading,
    isLogged,
    error,
    login,
    logout,
  };
};
export default useAuthentication;
