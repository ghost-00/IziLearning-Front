import useQuestion from "../hooks/useQuestion";
const QuestionsList = () => {
  const { questionsList, error, isLoading } = useQuestion();

  if (isLoading) {
    return <p>Loading users...</p>;
  }

  if (error) {
    return <p>Error: {error}</p>;
  }

  return (
    <>
      <h1>Questions List</h1>
      <ul>
        {questionsList.map((question, index) => (
          <li key={index}>{question.questionText}</li>
        ))}
      </ul>
    </>
  );
};

export default QuestionsList;
