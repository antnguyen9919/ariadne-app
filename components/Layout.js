import React,{useEffect} from 'react'
import Nav from './Nav'
import { useRouter } from 'next/router';
import { useAuth } from '../context/authContext'
import { Head } from 'next/document';
// import '../node_modules/bootstrap/dist/js/bootstrap.js';
const Layout = ({children}) => {
  const router = useRouter()
  const {user} = useAuth();
  useEffect(()=>{
    if(user === null){
      console.log("weird: ",user)
      router.push('/')
    }
  
  },[user])



  return (
    <><Head></Head>
 <div>
        {!user?null:<Nav/>}
        {children}
    </div>
    
    </>
   
  )
}

export default Layout