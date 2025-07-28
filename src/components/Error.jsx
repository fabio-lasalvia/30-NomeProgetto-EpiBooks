function ErrorPage({ error }) {
  return (
    <>
      <h1>Si è verificato un errore durante il processo:</h1>
      <br />
      <h2>{error}</h2>
    </>
  );
}

export default ErrorPage