// pages/_document.js

import Document, { Html, Head, Main, NextScript } from 'next/document';
import Script from "next/script"
const MyDocument = () =>  {

 

  
    return (
      <Html>
        <Head>
          {/* Include the Kakao Map SDK script here */}
          <Script type="text/javascript" src="//dapi.kakao.com/v2/maps/sdk.js?appkey=88fa5e46979c83c2b9f77cf0c4da1025&libraries=services,clusterer"></Script>
        
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
}

export default MyDocument;
