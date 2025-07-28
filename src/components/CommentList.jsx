import SingleComment from "./singleComment"

import useCommentDelete from '../hooks/comments/useCommentDelete'

function CommentList({ comments, asin }) {

    const { deleteComment, isDeleting, error } = useCommentDelete()


    return (
        <>

            <div>
                <h3>Commenti:</h3>

                <ul>
                    {comments.map((comment) => (
                        <SingleComment key={comment._id} comment={comment} onDelete={() => deleteComment(comment._id)} />
                    ))}

                </ul>

                {error && (
                    <div className="position-fixed top-50 start-50 translate-middle z-3">
                        <div className="alert alert-danger text-center shadow-lg" role="alert">
                            {error}
                        </div>
                    </div>
                )}


            </div>

        </>
    )
}

export default CommentList