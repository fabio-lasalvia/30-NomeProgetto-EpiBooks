import CommentList from "./CommentList"
import AddComment from "./AddComment"

import useComments from "../hooks/useComments"
import { useEffect } from "react"

function CommentArea({ asin }) {

    const { fetchComments, loading, comments, error } = useComments()

    useEffect(() => {
        if (asin) {
            fetchComments(asin)
        }
    }, [asin])

    return (
        <>
            <AddComment asin={asin} />

            {error && (
                <div className="position-fixed top-50 start-50 translate-middle z-3">
                    <div className="alert alert-danger shadow text-center p-3" role="alert">
                        {error}
                    </div>
                </div>
            )}
            {loading && <p className="text-center">Caricamento commenti...</p>}

            <CommentList comments={comments} asin={asin} />
        </>
    )
}

export default CommentArea