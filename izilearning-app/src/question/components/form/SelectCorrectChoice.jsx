function SelectCorrectChoice({ choices, handleCorrectChoice }) {
  return (
    <>
      <select name="answer" onChange={handleCorrectChoice}>
        {choices.map((choice, index) => (
          <option key={index} value={index} defaultValue={choices[0].text}>
            {choice.text}
          </option>
        ))}
      </select>
    </>
  );
}

export default SelectCorrectChoice;
