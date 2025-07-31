import { Button, ButtonGroup, Card } from "react-bootstrap"
import useCommentDelete from "../hooks/comments/useCommentDelete"

function SingleComment({ comment, onCommentDeleted  }) {

    const { deleteComment, isDeleting, error } = useCommentDelete()

    async function eliminaCommento(){
        const commentoEliminato = await deleteComment(comment._id)

        if (commentoEliminato && onCommentDeleted){
            onCommentDeleted()
        }
    }

    return (
        <>
            <Card className="d-flex flex-column justify-content-between p-2 bg-light mb-3">

                <h6><em className="text-success">{comment.author}</em> ha scritto:</h6>

                <p>{comment.comment}</p>

                <ButtonGroup className="gap-2 d-flex mt-auto">
                    <Button variant="warning">
                        <i className="bi bi-pencil-square me-2"></i>
                        Modifica
                    </Button>

                    <Button
                        variant="danger"
                        disabled={isDeleting}
                        onClick={eliminaCommento}
                    >
                        <i className="bi bi-trash-fill me-2"></i>
                        {isDeleting ? "Eliminando..." : "Elimina"}
                    </Button>

                </ButtonGroup>
            </Card>
        </>
    )
}

export default SingleComment