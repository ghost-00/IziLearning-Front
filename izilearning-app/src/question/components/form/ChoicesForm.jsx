function ChoicesForm({ choices, handleChoices }) {
  const removechoice = (choice) => {
    // Get index choice to remove
    const index = choices.indexOf(choice);
    // Remove choice from the list
    choices.splice(index, 1);
    handleChoices(choices);
  };

  return (
    <>
      <ul>
        {choices?.map((choice, index) => (
          <li key={index}>
            <div>{`${index} ${choice.text} ${choice.isAnswer}`}</div>
            <button
              id={index}
              type="button"
              onClick={() => removechoice(choice)}
            >
              Remove
            </button>
          </li>
        ))}
      </ul>
    </>
  );
}

export default ChoicesForm;
