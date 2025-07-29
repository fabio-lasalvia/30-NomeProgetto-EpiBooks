import { createContext, useState } from "react";

// Creazione del context
export const AuthContext = createContext();

function AuthProvider({ children }) {
    const [authUser, setAuthUser] = useState(null);

    return (
        <AuthContext.Provider value={{ authUser, setAuthUser }}>
            {children}
        </AuthContext.Provider>
    );
}

export default AuthProvider;
