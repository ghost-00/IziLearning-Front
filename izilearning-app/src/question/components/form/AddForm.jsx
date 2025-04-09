import { useState } from "react";
import ChoicesForm from "./ChoicesForm";
import SelectCorrectChoice from "./SelectCorrectChoice";
import useQuestion from "../../hooks/useQuestion";

function AddForm() {
  const [choice, setChoice] = useState({ text: "", isAnswer: false });
  const [formData, setFormData] = useState({
    questionText: "",
    choices: [],
    hint: "",
  });

  const { createQuestion } = useQuestion();

  // Add choice
  const addChoice = () => {
    if (choice !== null && choice.text !== "") {
      formData.choices = [...formData.choices, choice];
      if (formData.answer === "") {
        setFormData({ ...formData, answer: choice.text });
      }
      setChoice((prevChoice) => ({ ...prevChoice, text: "" }));
    }
  };

  // Handle choice change
  const handleChoiceChange = (e) => {
    setChoice((prevChoice) => ({ ...prevChoice, text: e.target.value }));
  };

  // Handle choices
  const handleChoices = (Choices) => {
    setFormData({ ...formData, choices: Choices });
  };

  // Handle correct choice
  const handleCorrectChoice = (e) => {
    const correctIndex = parseInt(e.target.value);
    formData.choices.forEach(
      (choice, index) =>
        (choice.isAnswer = correctIndex === index ? true : false)
    );
    setFormData({
      ...formData,
      choices: formData.choices,
    });
  };

  // Handle input change
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Handle submit
  const handleSubmit = async (e) => {
    await createQuestion(formData);
  };

  return (
    <>
      <h1>Question Form</h1>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Question</label>
          <input
            name="questionText"
            type="text"
            className="form-control"
            placeholder="Question"
            value={formData.questionText}
            onChange={handleInputChange}
          />
        </div>
        <div className="form-group">
          <label>Choices</label>
          <ChoicesForm
            choices={formData.choices}
            handleChoices={handleChoices}
          />
          <input
            id="newChoice"
            type="text"
            className="form-control"
            placeholder="Add answer Choice"
            onChange={handleChoiceChange}
            value={choice?.text}
          />
          <button type="button" onClick={addChoice}>
            Add choice
          </button>
        </div>
        <div className="form-group">
          <label>Answer</label>
          <SelectCorrectChoice
            choices={formData.choices}
            handleCorrectChoice={handleCorrectChoice}
          />
        </div>
        <div className="form-group">
          <label>Hint</label>
          <input
            name="hint"
            type="text"
            className="form-control"
            placeholder="hint"
            value={formData.hint}
            onChange={handleInputChange}
          />
        </div>

        <br />
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </>
  );
}

export default AddForm;
