import { useState } from "react"
import { Form, Button, Spinner, Alert } from "react-bootstrap"
import useCommentPost from "../hooks/comments/useCommentPost"

function AddComment({ asin }) {
  const { commentPost, isPosting, error } = useCommentPost()

  const [formData, setFormData] = useState({
    comment: '',
    rate: '1',
    elementId: asin
  })

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
      elementId: asin
    })
  }

  const salvaDati = async (e) => {
    e.preventDefault()
    await commentPost(formData)
    setFormData({
      comment: '',
      rate: '1',
      elementId: asin
    })
  }

  return (
    <>
      <Form onSubmit={salvaDati}>
        <Form.Group className="mb-2">
          <Form.Label>Commento</Form.Label>
          <Form.Control
            type="text"
            name="comment"
            value={formData.comment}
            onChange={handleChange}
            placeholder="Scrivi un commento..."
            disabled={isPosting}
          />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Valutazione</Form.Label>
          <Form.Select
            name="rate"
            value={formData.rate}
            onChange={handleChange}
            disabled={isPosting}
          >
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
          </Form.Select>
        </Form.Group>

        {error && <Alert variant="danger">Errore: {error.message}</Alert>}

        <Button
          type="submit"
          className="btn btn-primary btn-sm"
          disabled={isPosting}
        >
          {isPosting ? <Spinner animation="border" size="sm" /> : 'Salva'}
        </Button>
      </Form>
    </>
  )
}

export default AddComment
