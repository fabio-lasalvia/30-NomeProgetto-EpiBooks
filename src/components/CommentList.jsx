import { useEffect } from "react"
import SingleComment from "./singleComment"

function CommentList({ comments, asin }) {

    const API_URL = `https://striveschool-api.herokuapp.com/api/comments/${asin}`

    function eliminaCommento(e) {
        e => e.preventDefault()

        fetch(API_URL, {
            method: 'DELETE',
            headers: {
                'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2ODdhODE4ZTQwMTRhZjAwMTVmMGM1NWEiLCJpYXQiOjE3NTI4NTkwMjIsImV4cCI6MTc1NDA2ODYyMn0.i1ChD9nJdUO5ygRJfzMd9cD2AiLBdlHBk4i6W5iPBDk'
            }
        })
            .then((response) => {
                if (response.ok) {
                    console.log('Commento eliminato con successo')
                } else {
                    console.warn('Errore nella DELETE')
                }
            })
            .catch(error => {
                console.log('Errore nella fetch: ', error)
            })
    }


    return (
        <>

            <div>
                <h3>Commenti:</h3>

                <ul>
                    {comments.map((comment) => (
                        <SingleComment key={comment._id} comment={comment} onDelete={eliminaCommento} />
                    ))}

                </ul>
            </div>

        </>
    )
}

export default CommentList