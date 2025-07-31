import { useState } from "react"


function useShowAddComment(){

    const [showModal, setShowModal] = useState(false)

    function mostraAddComment(){
        setShowModal(true)
    }

    return{mostraAddComment, showModal}
}

export default useShowAddComment