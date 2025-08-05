import { useState } from "react";

function useCommentDelete() {
    const [isDeleting, setIsDeleting] = useState(false);
    const [error, setError] = useState(null);

    const token = import.meta.env.VITE_API_TOKEN

    async function deleteComment(asin) {
        setIsDeleting(true)
        setError(null)

        const API_URL = `https://striveschool-api.herokuapp.com/api/comments/${asin}`

        try {

            const response = await fetch(API_URL, {
                method: 'DELETE',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${token}`
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
