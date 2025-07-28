import { useState } from "react";

function useCommentDelete() {
    const [isDeleting, setIsDeleting] = useState(false);
    const [error, setError] = useState(null);

    async function deleteComment(asin) {
        setIsDeleting(true)
        setError(null)

        const API_URL = `https://striveschool-api.herokuapp.com/api/comments/${asin}`

        try {

            const response = await fetch(API_URL, {
                method: 'DELETE',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2ODdhODE4ZTQwMTRhZjAwMTVmMGM1NWEiLCJpYXQiOjE3NTI4NTkwMjIsImV4cCI6MTc1NDA2ODYyMn0.i1ChD9nJdUO5ygRJfzMd9cD2AiLBdlHBk4i6W5iPBDk'
                }
            })

            if (!response.ok) {
                throw new Error('Errore nella DELETE')
            }

            return true

        } catch (error) {
            console.log('Errore nella fetch ', error)
            setError('Impossibile cancellare il commento')
            return false
        } finally {
            setIsDeleting(false)
        }
    }

    return { deleteComment, isDeleting, error }

}

export default useCommentDelete;
