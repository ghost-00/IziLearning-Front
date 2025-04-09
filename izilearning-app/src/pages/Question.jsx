import AddForm from "../question/components/form/AddForm";
import useQuestion from "../question/hooks/useQuestion";

const Question = () => {
  const { questionsList, error, isLoading } = useQuestion();
  if (isLoading) {
    return <p>Is loading</p>;
  }
  if (error) {
    return <p>{error?.message}</p>;
  }
  return (
    <>
      <h1>Adding Question</h1>
      <ul>
        {questionsList.map((question, index) => (
          <li key={index}>{question.questionText}</li>
        ))}
      </ul>
      <AddForm />
    </>
  );
};

export default Question;
