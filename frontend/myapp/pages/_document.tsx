// pages/_document.tsx

import Document ,{ Html, Head, Main, NextScript } from 'next/document';
//import Head from 'next/head';


const MyDocument = () =>  {

 

  
    return (
      <Html>
        <Head >
        <link rel="manifest" href="/manifest.json" />
    <link rel="apple-touch-icon" href="/manifest/icon-512x512.png"></link>
    <meta name="theme-color" content="#000" />
        </Head>
      
      
        <body>
          <Main />
          <NextScript />
        </body> 
        <footer>
        <script type="text/javascript" src="//dapi.kakao.com/v2/maps/sdk.js?appkey=88fa5e46979c83c2b9f77cf0c4da1025&libraries=services,clusterer"></script>
        </footer>
      </Html>
    );
}

export default MyDocument;
