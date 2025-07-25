import { useState } from "react"
import { Form, Button } from "react-bootstrap"

function AddComment({ asin }) {

    const [datiForm, setDatiForm] = useState({
        elementId: asin,
        comment: "",
        rate: "1"
    })

    const API_URL = 'https://striveschool-api.herokuapp.com/api/comments'

    function salvaDati(e) {
        e.preventDefault()

        console.log(datiForm)

        fetch(API_URL, {
            method: 'POST',
            body: JSON.stringify(datiForm),
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2ODdhODE4ZTQwMTRhZjAwMTVmMGM1NWEiLCJpYXQiOjE3NTI4NTkwMjIsImV4cCI6MTc1NDA2ODYyMn0.i1ChD9nJdUO5ygRJfzMd9cD2AiLBdlHBk4i6W5iPBDk'
            }
        })
            .then(response => response.json())
            .then(data => {
                console.log(data)
            })
            .catch(error => {
                console.log('Errore nella fetch: ', error)
            })
    }

    const handleChange = (e) => {
        setDatiForm({
            ...datiForm,
            [e.target.name]: e.target.value
        })
    }

    return (
        <>
            <Form>
                <Form.Group>
                    <Form.Label>Commento</Form.Label>
                    <Form.Control type='text'
                        name="comment"

                        onChange={handleChange} />
                </Form.Group>

                <Form.Group>
                    <Form.Label>Valutazione</Form.Label>
                    <Form.Select type='text'
                        name="rate"
                        onChange={handleChange}>
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                        <option value="5">5</option>
                    </Form.Select>
                </Form.Group>
                <Button onClick={salvaDati} className="btn btn-primary btn-sm me-2 mt-2">Salva</Button>
                <Button onClick={() => onDelete(comment._id)} className="btn btn-danger btn-sm mt-2">Elimina</Button>
            </Form>
        </>
    )
}

export default AddComment