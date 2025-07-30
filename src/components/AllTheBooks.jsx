import { Row } from "react-bootstrap"
import SingleBook from "./SingleBook"


function AllTheBooks({ libri, category, toggleSelectedBook }) {

    return (
        <>
            <h1 className="m-4 text-center">{category}</h1>

            <Row className="g-3">
                {libri.map((libro) => (
                    <SingleBook key={libro.asin} libro={libro} toggleSelectedBook={toggleSelectedBook} />
                ))}
            </Row>


        </>
    )
}

export default AllTheBooks