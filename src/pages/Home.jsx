import "../CSS/CommentArea.css";
import { Container, Row, Col } from "react-bootstrap";


import Hero from "../components/Hero";
import AllTheBooks from "../components/AllTheBooks";
import CommentArea from "../components/CommentArea";


import fantasyBooks from "../data/fantasy.json";
import historyBooks from "../data/history.json";
import horrorBooks from "../data/horror.json";
import romanceBooks from "../data/romance.json";
import scifiBooks from "../data/scifi.json";

function Home() {
    return (
        <>
            <Hero />
            <Container>
                <Row>
                    <Col md={9}>
                        <AllTheBooks libri={fantasyBooks} category="Fantasy" />
                        <AllTheBooks libri={historyBooks} category="History" />
                        <AllTheBooks libri={horrorBooks} category="Horror" />
                        <AllTheBooks libri={romanceBooks} category="Romance" />
                        <AllTheBooks libri={scifiBooks} category="Sci-Fi" />
                    </Col>
                    <Col md={3}>
                        <div className="comment-area-sticky">
                            <CommentArea />
                        </div>
                    </Col>
                </Row>
            </Container>
        </>
    );
}

export default Home;