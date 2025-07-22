import AllTheBooks from "../components/AllTheBooks"
import Hero from "../components/Hero"

import fantasyBooks from "../data/fantasy.json"
import historyBooks from "../data/history.json"
import horrorBooks from "../data/horror.json"
import romanceBooks from "../data/romance.json"
import scifiBooks from "../data/scifi.json"

function Home() {
    return (
        <>
            <Hero />

            <AllTheBooks libri={fantasyBooks} category="Fantasy" />
            <AllTheBooks libri={historyBooks} category="History" />
            <AllTheBooks libri={horrorBooks} category="Horror" />
            <AllTheBooks libri={romanceBooks} category="Romance" />
            <AllTheBooks libri={scifiBooks} category="Sci-Fi" />
        </>
    )
}

export default Home
