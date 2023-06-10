import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
export const AuthContext = createContext();
import app from "../Firebase/firebase.config";
import { GoogleAuthProvider } from "firebase/auth";
const auth = getAuth(app)
const provider = new GoogleAuthProvider();

const AuthProvider = ({ children }) => {
    const [users, setUsers] = useState(null);
    const [loading, setLoading] = useState(true);

    const signIn = (email, password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password);
    }
    const googlePopup = () => {
        setLoading(true);
        return signInWithPopup(auth, provider);
    }
    const profilesUpdate = (name, photo) => {
        setLoading(true);
        return updateProfile(auth.currentUser, {
            displayName: name, photoURL: photo
        })
    }

    const login = (email, password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password);
    }
    const logOut=()=>{
        return signOut(auth);
    }

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            setUsers(currentUser);
            // console.log(currentUser);
            setLoading(false);

        })
        return () => {
            return unsubscribe();
        }
    }, [])



    const info = {
        signIn,
        logOut,
        login,
        profilesUpdate,
        googlePopup,
        loading,
        users

    }

    return (
        <AuthContext.Provider value={info}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;