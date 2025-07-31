import CommentList from "./CommentList"
import AddComment from "./AddComment"

import useComments from "../hooks/comments/useComments"
import { useEffect } from "react"
import { Button } from "react-bootstrap"
import useShowAddComment from "../hooks/comments/useShowAddComment"

function CommentArea({ asin }) {

    const { fetchComments, loading, comments, error } = useComments()

    useEffect(() => {
        if (asin) {
            fetchComments(asin)
        }
    }, [asin])

    const { mostraAddComment, showModal } = useShowAddComment()

    return (
        <div className="card p-3 mt-4">

            <h1 className="me-2">Commenti</h1>

            <Button onClick={mostraAddComment}>
                <i className="bi bi-plus-lg me-2"></i>
                Aggiungi
            </Button>

            {showModal && <AddComment asin={asin} onCommentSaved={() => fetchComments(asin)} />}

            {error && (
                <div className="position-fixed top-50 start-50 translate-middle z-3">
                    <div className="alert alert-danger shadow text-center p-3" role="alert">
                        {error}
                    </div>
                </div>
            )}
            {loading && <p className="text-center">Caricamento commenti...</p>}

            <CommentList comments={comments} asin={asin} onCommentDeleted={fetchComments} />
        </div>
    )
}

export default CommentArea