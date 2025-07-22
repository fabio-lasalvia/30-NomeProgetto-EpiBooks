import { Col, Card } from "react-bootstrap"


function SingleBook({libro}) {

    return (

        <Col>
            <Card>
                <Card.Img src={libro.img} variant="top" />
                <Card.Body>
                    <Card.Title>{libro.title}</Card.Title>
                    <Card.Text>€ {libro.price}</Card.Text>
                </Card.Body>
            </Card>
        </Col>

    )
}

export default SingleBook