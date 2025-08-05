import { Button, Pagination } from "react-bootstrap";
import usePagination from "../hooks/usePagination";

function Paginazione({ items = [], itemsPerPage }) {
  const {
    currentItems,
    currentPage,
    totalPages,
    goToPage,
    nextPage,
    prevPage,
  } = usePagination(items, itemsPerPage);

  let paginationItems = [];

  paginationItems.push(
    <Pagination.Prev
      key="prev"
      onClick={prevPage}
      disabled={currentPage === 1}
    />
  );

  for (let number = 1; number <= totalPages; number++) {
    paginationItems.push(
      <Pagination.Item
        key={number}
        active={number === currentPage}
        onClick={() => goToPage(number)}
      >
        {number}
      </Pagination.Item>
    );
  }

  paginationItems.push(
    <Pagination.Next
      key="next"
      onClick={nextPage}
      disabled={currentPage === totalPages}
    />
  );

  return (
    <>
      <Pagination>{paginationItems}</Pagination>
    </>
  );
}

export default Paginazione;
