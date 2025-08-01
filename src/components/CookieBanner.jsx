import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import useCookieBanner from '../hooks/useCookieBanner';

function CookieBanner() {

    const { gestioneCookieBanner, showCookieBanner } = useCookieBanner()

    return (
        <>
            <Modal
                show={showCookieBanner}
                onHide={() => gestioneCookieBanner('rifiuta')}
                backdrop="static"
                keyboard={false}
            >
                <Modal.Header closeButton>
                    <Modal.Title>Cookies</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsa, atque. Vel reiciendis voluptatibus molestias quam quae officiis cum optio aspernatur magni, cumque maxime enim, quibusdam fugit unde labore amet quo?
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={() => gestioneCookieBanner('rifiuta')}>
                        Rifiuta
                    </Button>
                    <Button variant="primary" onClick={() => gestioneCookieBanner('accetta')}>Salva</Button>
                </Modal.Footer>
            </Modal>
        </>
    )
}

export default CookieBanner