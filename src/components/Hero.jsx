import { Link } from 'react-router-dom';
import Carousel from 'react-bootstrap/Carousel';
import '../CSS/Hero.css';

function Hero() {

    const base = import.meta.env.BASE_URL;

    return (
        <div className="hero-section" >
            <Carousel fade controls indicators style={{ borderRadius: '35px', overflow: 'hidden' }}>
                {/* SLIDE 1 - Fantasy */}
                <Carousel.Item>
                    <Link to="/fantasy" title="Vai alla sezione Libri Fantasy" className="d-block position-relative">
                        <img
                            src={`${base}img/hero/heroFantasy.png`}
                            alt="Copertina Libri Fantasy"
                            className="carousel-img d-block w-100"
                        />
                        <div className="hero-overlay" />
                        <Carousel.Caption>
                            <h3 className="fw-bold">Fantasy</h3>
                            <p>Dove la realtà finisce, comincia la magia.</p>
                        </Carousel.Caption>
                    </Link>
                </Carousel.Item>

                {/* SLIDE 2 - History */}
                <Carousel.Item>
                    <Link to="/history" title="Vai alla sezione Libri Storici" className="d-block position-relative">
                        <img
                            src={`${base}img/hero/heroHistory.jpg`}                            
                            alt="Copertina Libri Storici"
                            className="carousel-img d-block w-100"
                        />
                        <div className="hero-overlay" />

                        <Carousel.Caption className="text-shadow-sm">
                            <h3 className="fw-bold">Storici</h3>
                            <p>Viaggi nel tempo tra imperi, battaglie e figure leggendarie del passato.</p>
                        </Carousel.Caption>
                    </Link>
                </Carousel.Item>

                {/* SLIDE 3 - Horror */}
                <Carousel.Item>
                    <Link to="/horror" title="Vai alla sezione Libri Horror" className="d-block position-relative">
                        <img
                            src={`${base}img/hero/heroHorror.jpg`}
                            alt="Copertina Libri Horror"
                            className="carousel-img d-block w-100"
                        />
                        <div className="hero-overlay" />
                        <Carousel.Caption className="text-shadow-sm">
                            <h3 className="fw-bold">Horror</h3>
                            <p>Dove le ombre raccontano storie…e i libri respirano nel buio.</p>
                        </Carousel.Caption>
                    </Link>
                </Carousel.Item>

                {/* SLIDE 4 - Romantico */}
                <Carousel.Item>
                    <Link to="/romantico" title="Vai alla sezione Libri Romance" className="d-block position-relative">
                        <img
                            src={`${base}img/hero/heroRomance.jpg`}                        
                            alt="Copertina Libri Romantici"
                            className="carousel-img d-block w-100"
                        />
                        <div className="hero-overlay" />
                        <Carousel.Caption>
                            <h3 className="fw-bold">Romantico</h3>
                            <p>Per chi crede nei colpi di fulmine…e nei finali scritti bene.</p>
                        </Carousel.Caption>
                    </Link>
                </Carousel.Item>

                {/* SLIDE 5 - Sci-Fi */}
                <Carousel.Item>
                    <Link to="/scifi" title="Vai alla sezione Libri Sci-Fi" className="d-block position-relative">
                        <img
                            src={`${base}img/hero/heroSciFi.jpg`}                            
                            alt="Copertina Libri Sci-Fi"
                            className="carousel-img d-block w-100"
                        />
                        <div className="hero-overlay" />
                        <Carousel.Caption>
                            <h3 className="fw-bold">Sci-Fi</h3>
                            <p>Galassie lontane, intelligenze artificiali e confini della realtà da esplorare.</p>
                        </Carousel.Caption>
                    </Link>
                </Carousel.Item>
            </Carousel>
        </div>
    );
}

export default Hero;