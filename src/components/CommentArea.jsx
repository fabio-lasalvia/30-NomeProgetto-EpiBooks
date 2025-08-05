import "../CSS/CommentArea.css";

import { useEffect } from "react";
import { Button } from "react-bootstrap";

import CommentList from "./CommentList";
import AddComment from "./AddComment";

import useComments from "../hooks/comments/useComments";
import useModalVisibility from "../hooks/comments/useModalVisibility";

function CommentArea({ asin }) {
  const { fetchComments, loading, comments, error } = useComments();

  useEffect(() => {
    if (asin) {
      fetchComments(asin);
    }
  }, [asin]);

  const { openModal, showModal } = useModalVisibility();

  return (
    <div className="card p-3 mt-4 text-center">
      <h1 className="me-2 text-center">Area Commenti</h1>

      <Button onClick={openModal}>
        <i className="bi bi-plus-lg me-2"></i>
        Aggiungi
      </Button>

      {showModal && (
        <AddComment asin={asin} onCommentSaved={() => fetchComments(asin)} />
      )}

      {error && (
        <div className="position-fixed top-50 start-50 translate-middle z-3">
          <div
            className="alert alert-danger shadow text-center p-3"
            role="alert"
          >
            {error}
          </div>
        </div>
      )}
      {loading && <p className="text-center">Caricamento commenti...</p>}

      <CommentList
        comments={comments}
        asin={asin}
        onCommentDeleted={() => fetchComments(asin)}
      />
    </div>
  );
}

export default CommentArea;
