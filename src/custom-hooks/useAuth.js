import { auth } from "../firebase/firebase";
import {useState, useEffect} from 'react';
import{ onAuthStateChanged } from 'firebase/auth';

const useAuth = () => {
    const [currentUser, setCurrentUser] = useState({});

    useEffect(()=> {
        onAuthStateChanged(auth, (user) =>{
            user ? setCurrentUser(user) : setCurrentUser(null)
        });
    });

    return {
        currentUser
    }
}

export default useAuth;