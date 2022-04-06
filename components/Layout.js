import React,{useEffect} from 'react'
import Nav from './Nav'
import Script from 'next/script';
import { useRouter } from 'next/router';
import { useAuth } from '../context/authContext'
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
    
    <div>
       <Script
  src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js"
  integrity="sha384-ka7Sk0Gln4gmtz2MlQnikT1wXgYsOg+OMhuP+IlRH9sENBO0LRn5q+8nbTov4+1p" 
  strategy="beforeInteractive"
  crossOrigin="anonymous" 
/>
        {!user?null:<Nav/>}
        {children}
    </div>
  )
}

export default Layout