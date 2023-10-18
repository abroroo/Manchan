// pages/_document.tsx

import Document ,{ Html, Head, Main, NextScript } from 'next/document';



const MyDocument = () =>  {

 

  
    return (
      <Html>
         <Head>
          {/* Include the Kakao Map SDK script here */}
           
        
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
