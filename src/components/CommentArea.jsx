import { useEffect, useState } from "react"
import CommentList from "./commentList"
import AddComment from "./AddComment"

function CommentArea({ asin }) {

    const API_URL = `https://striveschool-api.herokuapp.com/api/books/${asin}/comments`

    const [comments, setComments] = useState([])

    const handleComments = () => {
        fetch(API_URL)
            .then(response => response.json())
            .then(data => {
                console.log(data)
                setComments(data)
            })
            .catch(error => {
                console.log(error)
            })
    }

    useEffect(() => {
        handleComments()
    }, [])

    return (
        <>
            <AddComment asin={asin} />
            <CommentList comments={comments} setComments={setComments} asin={asin} />
        </>
    )
}

export default CommentArea