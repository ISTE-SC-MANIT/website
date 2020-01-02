
import Head from 'next/head';

import Nav1 from "../components/Nav1";
import Carousel1 from "../components/Carousel1";
import About1 from "../components/About1";
import Why1 from "../components/Why1";
import Faq1 from "../components/Faq1";
import Contact1 from "../components/Contact1";





const index = () =>{
    return(
        <div>
            <Head>
                <title>Chemira-X</title>
                <meta name="viewport" content="initial-scale=1.0, width=device-width" />
                
                {/* <link href="https://fonts.googleapis.com/css?family=Roboto:400,500&display=swap" rel="stylesheet"></link> */}
                <link href="https://fonts.googleapis.com/css?family=Poppins&display=swap" rel="stylesheet"></link>
                {/* <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap" /> */}
                <link href="https://fonts.googleapis.com/css?family=Roboto:300&display=swap" rel="stylesheet"></link> 
                <link href="https://fonts.googleapis.com/css?family=Noto+Sans:600&display=swap" rel="stylesheet"></link>
                <link href="https://fonts.googleapis.com/css?family=Ubuntu&display=swap" rel="stylesheet"></link>
            </Head>
           
            
            
            
            <Nav1/>
            <Carousel1/>
            <About1/>
            <Why1/>
            <Faq1/>
            <Contact1/>
            
        </div>
       
 
    )
}
  
  export default index;