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
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-ka7Sk0Gln4gmtz2MlQnikT1wXgYsOg+OMhuP+IlRH9sENBO0LRn5q+8nbTov4+1p" crossorigin="anonymous"  ></script>
</Head>


    <Layout>
    <Component {...pageProps} />
  </Layout>
  </AuthContextProvider>
}

export default MyApp
