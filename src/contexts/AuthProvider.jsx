import { createContext, useState, useContext } from "react";

// 1. Crea il contesto
const AuthContext = createContext();

// 2. Componente provider
function AuthProvider({ children }) {
  const [authUser, setAuthUser] = useState(null); // Puoi mettere un oggetto utente reale

  return (
    <AuthContext.Provider value={{ authUser, setAuthUser }}>
      {children}
    </AuthContext.Provider>
  );
}

// 3. Hook personalizzato
function useAuth() {
  return useContext(AuthContext);
}

export { useAuth };
export default AuthProvider;
