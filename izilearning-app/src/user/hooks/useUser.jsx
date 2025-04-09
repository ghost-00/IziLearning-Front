import { useEffect, useState, useContext } from "react";
import { getCurrentUserAPI } from "../../services/UserService";
import { UserContext } from "../context/UserContext";

const useUser = () => {
  const { currentUser, setCurrentUser } = useContext(UserContext);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const fetchCurrentUser = async () => {
      setIsLoading(true);
      try {
        const data = await getCurrentUserAPI();
        setCurrentUser(data);
      } catch (error) {
        setError(error.message);
        setCurrentUser(null);
      } finally {
        setIsLoading(false);
      }
    };

    fetchCurrentUser();
  }, []);

  return {
    currentUser,
    error,
    isLoading,
  };
};

export default useUser;
