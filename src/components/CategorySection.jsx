import { Pagination } from "react-bootstrap";
import AllTheBooks from "./AllTheBooks";
import usePagination from "../hooks/usePagination";

function CategorySection({ title, books, toggleSelectedBook, selectedBook, itemsPerPage = 8 }) {
  const { currentItems, currentPage, totalPages, goToPage, nextPage, prevPage } =
    usePagination(books, itemsPerPage);

  // Creiamo la lista di numeri di pagina col for
  let pages = [];
  for (let i = 1; i <= totalPages; i++) {
    pages.push(
      <Pagination.Item
        key={i}
        active={i === currentPage}
        onClick={() => goToPage(i)}
      >
        {i}
      </Pagination.Item>
    );
  }

  return (
    <div className="mb-5">
      <AllTheBooks
        toggleSelectedBook={toggleSelectedBook}
        selectedBook={selectedBook}
        libri={currentItems}
        category={title}
      />

      {totalPages > 1 && (
        <Pagination className="d-flex justify-content-center mt-2">
          <Pagination.Prev onClick={prevPage} disabled={currentPage === 1} />
          {pages}
          <Pagination.Next onClick={nextPage} disabled={currentPage === totalPages} />
        </Pagination>
      )}
    </div>
  );
}

export default CategorySection;
