import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

import Link from 'next/link'
import React, {useState,useEffect } from 'react'


import { useRouter } from 'next/router';
import { useAuth } from '../context/authContext';


export default function SignUp() {
  const {user,login} = useAuth()
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);

  const router = useRouter();

  useEffect(()=>{
    if(user !== null){
      console.log("weird: ",user)
      router.push('/overview')
    }
  
  },[user])



console.log(user)

  const onSubmit = async(e) => {
      e.preventDefault()
      setError(null)
     try{
         await login(email,password).then(user=>{
          router.push('/overview');
         })
         
     } catch(err){
      setError("Login failed")
      setEmail('')
      setPassword('')
     }
     
    };    







  return (
    <div className={styles.container}>
      <Head>
        <title>Ariadne Client App</title>
        <meta httpEquiv='X-UA-Compatible' content='IE-edge'/>

        <meta name="description" content="AriadneMaps Client App " />
        <meta name='viewport' content ='width=device-width,initial-scale=1, maximum-scale=1, user-scalable=no' />
        <link rel="icon" href="/favicon.ico" />

        {/* Android  */}
        <meta name='theme-color' content='red'/>
        <meta name='mobile-web-app-capable' content='yes'/>
        {/* iOs  */}
        <meta name='apple-mobile-web-app-title' content ="Application title"/>
        <meta name='apple-mobile-web-app-capable' content ="yes"/>
        <meta name ="apple-mobile-web-status-bar-style" content ='default' />




      </Head>

      
      {/* <Script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-ka7Sk0Gln4gmtz2MlQnikT1wXgYsOg+OMhuP+IlRH9sENBO0LRn5q+8nbTov4+1p" crossorigin="anonymous" /> */}

     <main>
      {!user? <div className="container " style={{height:'100vh'}} >
         
          <div className="row justify-content-center  align-items-center min-vh-100">
          <div className='col-6 text-center' >
          
          <h1 className='text-center'>Welcome to AriadneMaps Client App</h1>
          <h4>Please contact us to create an Account</h4>

          <div className="row justify-content-center">
          <div className="col-3  text-end">
        <Link href='/password-recovery'><a>Forgot password</a></Link>
      </div>
    <div className="col-6  text-end">
        <Link href='/'><a>Go to Login</a></Link>
      </div>
    </div>
      </div>
          </div>
          
          
          
       </div> :null}
      
     </main>
    </div>
  )
}
