import { Container, Row, Col } from "react-bootstrap";

import Hero from "../components/Hero";
import CookieBanner from "../components/CookieBanner";
import CategorySection from "../components/CategorySection";

import fantasyBooks from "../data/fantasy.json";
import historyBooks from "../data/history.json";
import horrorBooks from "../data/horror.json";
import romanceBooks from "../data/romance.json";
import scifiBooks from "../data/scifi.json";

import useSelectedBook from "../hooks/books/useSelectedBook";

function Home() {
  const { toggleSelectedBook, selectedBook } = useSelectedBook();

  return (
    <>
      <h1 className="text-center py-3">EpiBooks</h1>
      <Hero />
      <Container>
        <Row>
          <Col>
            <CategorySection
              title="Fantasy"
              books={fantasyBooks}
              toggleSelectedBook={toggleSelectedBook}
              selectedBook={selectedBook}
              itemsPerPage={6}
            />
            <CategorySection
              title="History"
              books={historyBooks}
              toggleSelectedBook={toggleSelectedBook}
              selectedBook={selectedBook}
              itemsPerPage={6}
            />
            <CategorySection
              title="Horror"
              books={horrorBooks}
              toggleSelectedBook={toggleSelectedBook}
              selectedBook={selectedBook}
              itemsPerPage={6}
            />
            <CategorySection
              title="Romance"
              books={romanceBooks}
              toggleSelectedBook={toggleSelectedBook}
              selectedBook={selectedBook}
              itemsPerPage={6}
            />
            <CategorySection
              title="Sci-Fi"
              books={scifiBooks}
              toggleSelectedBook={toggleSelectedBook}
              selectedBook={selectedBook}
              itemsPerPage={6}
            />
          </Col>

          <CookieBanner />
        </Row>
      </Container>
    </>
  );
}

export default Home;
