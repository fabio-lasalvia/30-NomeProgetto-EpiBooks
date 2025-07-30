import { useState, useEffect } from "react"

function useSelectedBook() {
    const [selectedBook, setSelectedBook] = useState(null)

    useEffect(() => {
        console.log("Il libro selezionato è:", selectedBook)
    }, [selectedBook])

    function toggleSelectedBook(asin){
        setSelectedBook(prev => (prev === asin ? null : asin))
    }

    return { toggleSelectedBook, selectedBook }
}

export default useSelectedBook