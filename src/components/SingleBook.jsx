import { Col, Card, Button } from "react-bootstrap"


function SingleBook({ libro }) {

    return (

        <Col sm={12} md={6} lg={4}>
            <Card>
                <Card.Img
                    src={libro.img}
                    variant="top"
                    className="w-100"
                    style={{
                        height: "400px",
                        objectFit: "cover"
                    }}
                />

                <Card.Body className="d-flex flex-column">
                    <Card.Title title={libro.title} className="text-truncate">{libro.title}</Card.Title>
                    <Card.Text className="text-center fst-italic fw-semibold text-primary">€ {libro.price}</Card.Text>

                    <Button variant="primary" className="mt-auto">
                        Aggiungi
                    </Button>
                </Card.Body>
            </Card>
        </Col>

    )
}

export default SingleBook