import { useState } from "react";


function useCommentPost() {

    const [loading, setLoading] = useState(false)
    const [isPosting, setIsPosting] = useState(false)
    const [error, setError] = useState(null)

    const API_URL = `https://striveschool-api.herokuapp.com/api/comments`
    const token = import.meta.env.VITE_API_TOKEN

    async function commentPost(commentData) {
        setLoading(true)
        setIsPosting(true)
        setError(null)

        try {
            const response = await fetch(API_URL, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${token}`
                },
                body: JSON.stringify(commentData)
            })

            if (!response.ok) {
                throw new Error('Errore nella POST')
            }

            const data = await response.json()
            //setIsPosting(false)
            return data
        } catch (error) {
            console.log('Errore nella fetch ', error)
            setError(error.message)
            return null
        } finally {
            setIsPosting(false)
            setLoading(false)
        }

    }

    return { commentPost, loading, isPosting, error }
}

export default useCommentPost