import '../styles/globals.css'
// import {useEffect} from 'react'
import Layout from '../components/Layout'
import {AuthContextProvider} from '../context/authContext'
import '../node_modules/bootstrap/dist/css/bootstrap.css'
import Head from 'next/head'
import Script from 'next/head'

function MyApp({ Component, pageProps }) {

//   useEffect(() => {
//     import("../node_modules/bootstrap/dist/js/bootstrap");
// }, []);

  return <AuthContextProvider>
   
    <Head>
    <meta name='viewport' content ='width=device-width,initial-scale=1, maximum-scale=1, user-scalable=no' />
   
</Head>



    <Layout>
    
    <Component {...pageProps} />
  </Layout>
  </AuthContextProvider>
}

export default MyApp
