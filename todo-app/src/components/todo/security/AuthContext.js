import { createContext, useContext, useState } from "react";


//1: create a context
export const AuthContext = createContext();

export const useAuth = () => useContext(AuthContext);



//put some state in the context
//share the created context with other components
const AuthProvider = ({children}) => {

    //put some state in the context
    const [isAuthenticated, setAuthenticated] = useState(false);

    const [username, setUsername] = useState(null);

    const login = (username, password) => {
        if (username === "in28minutes" && password === "dummy") {
            setAuthenticated(true);
            setUsername(username);
            return true;
          } else {
            setAuthenticated(false);
            setUsername(null);
            return false;
          }
    }

    const logout = () => {
        setAuthenticated(false);
    }



    return (
        <AuthContext.Provider value={ {isAuthenticated, login, logout, username} }>
            {children}
        </AuthContext.Provider>
    )
};

export default AuthProvider;
