import { useState } from "react"


function useSelectedBook() {
    const [selectedBook, setSelectedBook] = useState(null)

    function toggleSelectedBook(asin){
        selectedBook === asin ? setSelectedBook(null) : setSelectedBook(asin)
    }

    return{toggleSelectedBook, selectedBook}
}

export default useSelectedBook