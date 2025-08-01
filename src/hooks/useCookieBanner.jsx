import { useEffect, useState } from "react"

function useCookieBanner() {

    const [showCookieBanner, setShowCookieBanner] = useState(true)

    useEffect(() => {
        (localStorage.getItem("cookiesAccepted") === "true") ? setShowCookieBanner(false) : setShowCookieBanner(true)
    }, [])

    function gestioneCookieBanner(azione) {
        if (azione === "accetta") {
            (localStorage.setItem("cookiesAccepted", "true"))
            setShowCookieBanner(false)
        } else if (azione === "rifiuta") {
            setShowCookieBanner(false)
        }
    }

    return { gestioneCookieBanner, showCookieBanner }
}

export default useCookieBanner