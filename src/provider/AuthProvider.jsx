import { createContext, useState } from "react";
import { createUserWithEmailAndPassword, getAuth, updateProfile } from "firebase/auth";
import { app } from "../firebase/firebase.init";

export const AuthContext = createContext();
const auth = getAuth(app);

const AuthProvider = ({ children }) => {

    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    const signUpWithEmail = (email, password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password);
    }

    const updateInfo = (updatedData) => {
        return updateProfile(auth.currentUser, updatedData);
    }

    const authData = {
        user, setUser,
        loading, setLoading,
        signUpWithEmail, 
        updateInfo

    }
    return <AuthContext value={authData} > {children} </AuthContext>;
}

export default AuthProvider;