import { createContext, useEffect, useState,useContext } from "react";

import { getAuth, onAuthStateChanged, signInWithEmailAndPassword,signOut } from "firebase/auth";

import { auth } from "../config/firebase";

const AuthContext = createContext({
    user: null,
    loading: true,
  
});



export const AuthContextProvider =({children})=>{ 
    const [user,setUser] =useState(null)
    const [loading,setLoading] = useState(true)
   
     
    useEffect(()=>{
            const unsubscribe= onAuthStateChanged(auth,(user)=>{
                if(user){
                    setUser({
                        uid:user.uid,
                        email:user.email,
                        
                    })
                } else {setUser(null)
                }
                setLoading(false)
            })

            return ()=>unsubscribe()
    },[])

    const login=(email,password)=>{
        return signInWithEmailAndPassword(auth,email,password)
    }
    const logout= async ()=>{
        setUser(null)
        await signOut(auth)
    }


    

    return (
        <AuthContext.Provider value={{user,login,logout}} >
            {children}
        </AuthContext.Provider>
    )
}
// custom hook to use the authUserContext and access authUser and loading
export const useAuth = () => useContext(AuthContext);
