import {app} from '../firebase-config';
import {getAuth, signInWithEmailAndPassword, createUserWithEmailAndPassword} from 'firebase/auth'
import {useState} from "react";


export const register = (email, password) => {
    const authentication = getAuth();
    return createUserWithEmailAndPassword(authentication, email, password)
        .then(response=>{
            console.log(123)
            console.log(response)
            localStorage.setItem('token',response._tokenResponse.refreshToken)
        })
}

export const login = (email, password) => {
    const authentication = getAuth();
    return signInWithEmailAndPassword(authentication, email, password)
        .then(response=>{
            console.log(123)
            console.log(response)

            localStorage.setItem('token',response._tokenResponse.refreshToken)
        })
}
export const UserService=()=>{
    const [user, setUser] = useState({email:'',userId:''});
}
