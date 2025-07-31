import { useState } from "react";


function useCommentPost() {

    const [loading, setLoading] = useState(false)
    const [isPosting, setIsPosting] = useState('')
    const [error, setError] = useState(null)

    async function commentPost(commentData) {
        setLoading(false)
        setIsPosting(true)
        setError(null)

        const API_URL = `https://striveschool-api.herokuapp.com/api/comments`

        try {
            const response = await fetch(API_URL, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2ODdhODE4ZTQwMTRhZjAwMTVmMGM1NWEiLCJpYXQiOjE3NTI4NTkwMjIsImV4cCI6MTc1NDA2ODYyMn0.i1ChD9nJdUO5ygRJfzMd9cD2AiLBdlHBk4i6W5iPBDk'
                },
                body: JSON.stringify(commentData)
            })

            if (!response.ok) {
                throw new Error('Errore nella POST')
            }

            const data = await response.json()
            setIsPosting(false)
            return data
        } catch (error) {
            console.log('Errore nella fetch ', error)
            setError(error.message)
            setIsPosting(false)
            setLoading(false)
            return null
        }


    }
    
    return { commentPost, loading, isPosting, error }
}

export default useCommentPost