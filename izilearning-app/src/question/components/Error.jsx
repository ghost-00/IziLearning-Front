function ErrorAPI({ errorFunct }) {
  const { status, data } = errorFunct();
  return (
    <>
      <h2>
        Error API ({status}) : {data}
      </h2>
    </>
  );
}

export default ErrorAPI;
