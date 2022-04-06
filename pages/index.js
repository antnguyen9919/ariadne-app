import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
// import '../node_modules/bootstrap/dist/js/bootstrap.js';
import Script from 'next/script';
export default function Home() {
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

      
      <Script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-ka7Sk0Gln4gmtz2MlQnikT1wXgYsOg+OMhuP+IlRH9sENBO0LRn5q+8nbTov4+1p" crossorigin="anonymous" />

     <main>
       <h1>Welcome</h1>
     </main>
    </div>
  )
}
