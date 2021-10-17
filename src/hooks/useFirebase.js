import initializeAuth from "../Firebase/firebase.inti";
import { getAuth, signInWithPopup, GoogleAuthProvider, signOut, onAuthStateChanged } from "firebase/auth";
import { useState, useEffect } from 'react';
initializeAuth();
const useFirebase = () => {
    const auth = getAuth();
    const googleProvider = new GoogleAuthProvider();
    const [user, setUser] = useState();
    const [error, setError] = useState();

    const googleSignIn = () => {
        return signInWithPopup(auth, googleProvider)

            .catch((error) => {
                setError(error.message);
            });
    }

    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            if (user) {
                setUser(user);
            }
        });
    }, [])

    const logOut = () => {
        signOut(auth)
            .then(() => {
                setUser({});
            })
            .catch((error) => {
                console.log(error);
            });
    }

    return {
        googleSignIn,
        user,
        error,
        logOut
    }
}

export default useFirebase;