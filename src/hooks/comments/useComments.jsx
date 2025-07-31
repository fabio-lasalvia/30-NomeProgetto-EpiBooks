import { useState } from "react";


function useComments() {

    const [loading, setLoading] = useState(false);
    const [comments, setComments] = useState([])
    const [error, setError] = useState(null)

    async function fetchComments(asin) {
        setLoading(true)
        setComments([])
        setError(null)

        const API_URL = `https://striveschool-api.herokuapp.com/api/books/${asin}/comments`

        try {
            const response = await fetch(API_URL)

            if (!response.ok) {
                throw new Error('Errore nella fetch')
            }

            const data = await response.json()
            console.log(data)
            setComments(data)

        } catch (error) {
            console.log('Errore nella fetch ', error)
            setError('Impossibile visualizzare i commenti')
        } finally {
            setLoading(false)
        }
    }

    return { fetchComments, loading, comments, error }
}

export default useComments