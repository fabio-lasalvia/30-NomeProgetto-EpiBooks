import { useEffect, useState } from "react";
import { Card, Row, Col, Button } from "react-bootstrap";
import { replace, useNavigate, useParams } from "react-router-dom";
import NotFound from "../pages/NotFound";

function BookDetails({ libro }) {
  const { asin } = useParams();
  const navigate = useNavigate;

  const [loading, setLoading] = useState(true);
  const [details, setDetails] = useState("");
  const [error, setError] = useState(null);

  const API_URL = `https://striveschool-api.herokuapp.com/api/books:${asin}/comments`;

  useEffect(() => {
    let ignore = false;
    fetch(API_URL, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2ODdhODE4ZTQwMTRhZjAwMTVmMGM1NWEiLCJpYXQiOjE3NTI4NTkwMjIsImV4cCI6MTc1NDA2ODYyMn0.i1ChD9nJdUO5ygRJfzMd9cD2AiLBdlHBk4i6W5iPBDk",
      },
    })
      .then((response) => {
        if (response.status === 404) {
          navigate("/404", { replace: true });
          throw new Error("Libro non trovato");
        }
        return response.json();
      })
      .then((data) => {
        if (!ignore) setDetails(data);
      })
      .catch((error) => {
        console.log("Errore nella fetch: ", error);
        setError("Errore nella fetch");
      })
      .finally(() => {
        setLoading(false);
      });

    return () => {
      ignore = true;
    };
  }, [API_URL]);

  return (
    <>
      <Button className="m-3" onClick={() => navigate(-1)}>
        Indietro
      </Button>

      <Card className="m-3 p-3">
        <Row className="align-items-center">
          {/* Colonna immagine */}
          <Col xs={12} md={3}>
            <Card.Img src={libro.img} />
          </Col>

          {/* Colonna testo centrale */}
          <Col xs={12} md={6} className="text-center">
            <Card.Title>{libro.title}</Card.Title>
            <Card.Text>{libro.description}</Card.Text>
          </Col>

          {/* Colonna prezzo */}
          <Col xs={12} md={3} className="text-end">
            <h4>{libro.price}</h4>
          </Col>
        </Row>
      </Card>
    </>
  );
}

export default BookDetails;
