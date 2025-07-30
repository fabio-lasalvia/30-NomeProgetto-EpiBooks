import { useState } from "react";

function useAuth() {
    const [isLogged, setIsLogged] = useState(false);

    const toggleLogin = () => setIsLogged(prev => !prev);

    return { isLogged, toggleLogin };
}

export default useAuth;
