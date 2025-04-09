import AxiosUtil from "./AxiosUtil";

const QuestionService = () => {
  const { getAxiosInstance, getToken } = AxiosUtil();

  const paths = {
    questionsList: "api/questions",
    newQuestion: "api/questions/new",
  };

  const getAPI = async (path) => {
    try {
      const resp = await getAxiosInstance().get(path);
      return resp.data;
    } catch (error) {
      throw new Error(error);
    }
  };

  const postAPI = async (path, data) => {
    try {
      const resp = await getAxiosInstance().post(path, JSON.stringify(data), {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${getToken()}`,
        },
      });
      return resp.data;
    } catch (error) {
      throw new Error(error);
    }
  };

  return {
    getAPI,
    postAPI,
    paths,
  };
};

export default QuestionService;
