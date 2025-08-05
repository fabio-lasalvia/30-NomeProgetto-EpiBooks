import { useState } from "react"


function usePagination(items = [], itemsPerPage) {

    const [currentPage, setCurrentPage] = useState(1)
    const totalPages = Math.ceil(items.length / itemsPerPage)

    const startIndex = (currentPage - 1) * itemsPerPage

    const endIndex = startIndex + itemsPerPage

    const currentItems = items.slice(startIndex, endIndex)

    function goToPage(n) {
        if (n >= 1 && n <= totalPages) {
            setCurrentPage(n)
        }
    }

    function nextPage() {
        currentPage < totalPages && setCurrentPage(currentPage + 1)
    }

    function prevPage() {
        if (currentPage > 1) {
            setCurrentPage(currentPage - 1)
        }
    }

    return { currentItems, currentPage, totalPages, goToPage, nextPage, prevPage }
}

export default usePagination