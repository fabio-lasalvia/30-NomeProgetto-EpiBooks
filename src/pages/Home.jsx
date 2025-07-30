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

import useSelectedBook from "../hooks/books/useSelectedBook";

function Home() {

  const { toggleSelectedBook, selectedBook } = useSelectedBook()

  return (
    <>
      <h1 className="text-center py-3">EpiBooks</h1>
      <Hero />
      <Container>
        <Row>
          <Col md={9}>
            <AllTheBooks toggleSelectedBook={toggleSelectedBook} libri={fantasyBooks} category="Fantasy" />
            <AllTheBooks toggleSelectedBook={toggleSelectedBook} libri={historyBooks} category="History" />
            <AllTheBooks toggleSelectedBook={toggleSelectedBook} libri={horrorBooks} category="Horror" />
            <AllTheBooks toggleSelectedBook={toggleSelectedBook} libri={romanceBooks} category="Romance" />
            <AllTheBooks toggleSelectedBook={toggleSelectedBook} libri={scifiBooks} category="Sci-Fi" />
          </Col>
          <Col md={3}>
            <div className="comment-area-sticky">
              <CommentArea selectedBook={selectedBook}/>
            </div>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default Home;
