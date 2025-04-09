import { useEffect, useState } from "react";
import QuestionService from "../../services/QuestionService";
const useQuestion = () => {
  const [questionsList, setQuestionsList] = useState([]);
  const [newQuestion, setNewQuestion] = useState(null);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const { getAPI, postAPI, paths } = QuestionService();

  useEffect(() => {
    const fetchUsers = async () => {
      setIsLoading(true);
      try {
        const data = await getAPI(paths.questionsList);
        setQuestionsList(data);
      } catch (error) {
        setError(error);
      } finally {
        setIsLoading(false);
      }
    };
    fetchUsers();
  }, []);

  const createQuestion = async (form) => {
    postAPI(paths.newQuestion, form).then((resp) => {
      setNewQuestion(resp);
    });
    return newQuestion;
  };

  return {
    createQuestion,
    questionsList,
    error,
    isLoading,
  };
};
export default useQuestion;
