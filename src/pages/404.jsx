import { Button, Container } from "react-bootstrap";
import { Link } from "react-router-dom";

function NotFound() {
  return (
    <Container
      className="d-flex flex-column justify-content-center align-items-center"
      style={{ minHeight: "70vh", textAlign: "center" }}
    >
      <h3 className="mb-3" style={{fontSize:'4em'}}>ERROR</h3>
      <h1 className="mb-4" style={{fontSize:'8em'}}>404</h1>

      <Button as={Link} to="/home" variant="danger">
        <i className="bi bi-house-door-fill me-2"></i>
        Torna alla Home
      </Button>
    </Container>
  );
}

export default NotFound;
