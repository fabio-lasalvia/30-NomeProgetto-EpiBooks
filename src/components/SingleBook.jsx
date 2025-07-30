import { useState } from "react";
import { Col, Card, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

function SingleBook({ libro, toggleSelectedBook, selectedBook }) {

  return (
    <Col sm={12} md={6} lg={4}>
      <Card onClick={() => toggleSelectedBook(libro.asin)}
        className={selectedBook === libro.asin ? "border border-danger border-3" : ""}
        style={{ cursor: "pointer" }}>
        <Card.Img
          src={libro.img}
          variant="top"
          className="w-100"
          style={{
            height: "400px",
            objectFit: "cover",
          }}
        />

        <Card.Body className="d-flex flex-column">
          <Card.Title title={libro.title} className="text-truncate">
            {libro.title}
          </Card.Title>
          <Card.Text className="text-center fst-italic fw-semibold text-primary">
            € {libro.price}
          </Card.Text>

          <Button variant="primary" className="mt-auto mb-2">
            Aggiungi
          </Button>
          <Link
            to={`/books/${libro.asin}`}
            state={libro}
            className="btn btn-primary mt-auto"
          >
            Dettagli
          </Link>
        </Card.Body>
      </Card>
    </Col>
  );
}

export default SingleBook;
