// pages/_app.js
import Nav from "./Nav"
import '../styles/globals.css';
import '../styles/app.css';
import '../styles/app.module.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Footer from "./components/Footer";
import { useEffect } from "react";


function MyApp({ Component, pageProps }) {
  useEffect(() => {
    require("bootstrap/dist/js/bootstrap.bundle.min.js");
  }, []);
  return (
 
        <>
        
        <Nav/>
      <Component {...pageProps} />
      <Footer/>
     

        </>

  );
}

export default MyApp;

