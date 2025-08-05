import { Modal, Button, Alert, Spinner } from "react-bootstrap";

function ModalCommentDelete({ 
  show, 
  onClose, 
  onConfirm, 
  isDeleting, 
  error 
}) {
  return (
    <Modal show={show} onHide={onClose} centered>
      <Modal.Header closeButton>
        <Modal.Title>Conferma eliminazione</Modal.Title>
      </Modal.Header>

      <Modal.Body>
        {error && <Alert variant="danger">{error}</Alert>}
        <p>Sei sicuro di voler cancellare questo commento?</p>
      </Modal.Body>

      <Modal.Footer>
        <Button variant="secondary" onClick={onClose} disabled={isDeleting}>
          Annulla
        </Button>

        <Button variant="danger" onClick={onConfirm} disabled={isDeleting}>
          {isDeleting ? <Spinner animation="border" size="sm" /> : "Elimina"}
        </Button>
      </Modal.Footer>
    </Modal>
  );
}

export default ModalCommentDelete;
