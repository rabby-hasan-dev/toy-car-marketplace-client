import { createUserWithEmailAndPassword, getAuth } from "firebase/auth";
import { createContext } from "react";
export const AuthContext = createContext();
import app from "../Firebase/firebase.config";
const auth = getAuth(app)

const AuthProvider = ({ children }) => {

    const signIn = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password);
    }




    const info = {
        signIn

    }

    return (
        <AuthContext.Provider value={info}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;