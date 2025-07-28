import { Button } from "bootstrap";
import { Link } from "react-router-dom";

function NotFound() {
  return (
    <>
      <h1>Questa pagina non esiste</h1>
      <h2>Torna alla</h2>
      <br />

      <Button as={Link} to="/home" variant="danger">
        Home
      </Button>
    </>
  );
}

export default NotFound;
