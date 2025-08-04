import { Button, Pagination } from 'react-bootstrap'
import usePagination from '../hooks/usePagination'

function Paginazione() {

    const { currentItems, currentPage, totalPages, goToPage, nextPage, prevPage } = usePagination()

    let paginationItems = []

    paginationItems.push(
        <Pagination.Prev key="prev" onClick={() => prevPage()} disbled={currentPage === 1}></Pagination.Prev>
    )

    for (let number = 1; number <= totalPages; number++) {
        items.push(
            <Pagination.Item key={number} active={number === currentPage} onClick={() => goToPage()}>
                {number}
            </Pagination.Item>
        )
    }

    paginationItems.push(
        <Pagination.Next key="prev" onClick={() => nextPage()} disbled={currentPage === totalPages}></Pagination.Next>
    )

    return (
        <>
            <Pagination>{paginationItems}</Pagination>
        </>
    )
}

export default Paginazione