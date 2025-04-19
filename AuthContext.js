import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "@firebase/auth";
import { createContext } from "react";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";


const UserContext = createContext();

export const AuthContextProvider = ({children}) =>{
    const [user, setUser] = useState({});

    const createUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password)

    };

    const signIn = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password)
    };

    const logout = () => {
        return signOut(auth)
    };

    return (
        <UserContext.Provider 
            value={{createUser, signIn, logout, user}}>
        </UserContext.Provider>
    );
};

export const userAuth = () => {
    return userContext(UserContext);
};