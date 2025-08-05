import { Card, Row, Col, Button } from "react-bootstrap";
import { useLocation, useNavigate } from "react-router-dom";

import CommentArea from "../components/CommentArea"
import NotFound from "../pages/NotFound";

function BookDetails() {
  const location = useLocation();
  const navigate = useNavigate();
  const libro = location.state;

  // Se il libro non viene passato tramite state, mostriamo NotFound
  if (!libro) return <NotFound />;

  return (
    <>
      <Button className="m-3" variant="dark" onClick={() => navigate(-1)}>
        <i className="bi bi-arrow-left me-2"></i>
        Indietro
      </Button>

      <Card className="m-3 p-3">
        <Row className="align-items-center">
          {/* Immagine */}
          <Col xs={12} md={3}>
            <Card.Img src={libro.img} alt={libro.title} className="w-100" />
          </Col>

          {/* Titolo + Descrizione */}
          <Col xs={12} md={6}>
            <Card.Body className="text-center">
              <Card.Title className="fs-3">{libro.title}</Card.Title>
              <Card.Text className="mt-2 text-muted">
                {libro.description || "Nessuna descrizione disponibile."}
              </Card.Text>
            </Card.Body>
          </Col>

          {/* Prezzo */}
          <Col xs={12} md={3} className="text-md-end text-center mt-3 mt-md-0">
            <h4 className="text-primary">{libro.price} €</h4>
          </Col>
        </Row>
      </Card>

      <CommentArea asin={libro.asin} />


    </>
  );
}

export default BookDetails;
