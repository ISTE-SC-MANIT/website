
import Head from 'next/head';
import Home from "../components/Home";
import About from "../components/About";
import Events1 from "../components/events1";
import Nav2 from "../components/Nav2";
import Contact from "../components/Contact";



const index = () =>{
    return(
        <div>
            <Head>
                <title>ISTE MANIT</title>
                <meta name="viewport" content="initial-scale=1.0, width=device-width" />
                
                
                <link href="https://fonts.googleapis.com/css?family=Poppins&display=swap" rel="stylesheet"></link>
                
                <link href="https://fonts.googleapis.com/css?family=Roboto:300&display=swap" rel="stylesheet"></link> 
                <link href="https://fonts.googleapis.com/css?family=Noto+Sans:600&display=swap" rel="stylesheet"></link>
                <link href="https://fonts.googleapis.com/css?family=Ubuntu&display=swap" rel="stylesheet"></link>
            </Head>
           
            
            <Home/>
            <About/>
            <Events1/>
            
            <Nav2/>
            <Contact/>
        </div>
       
 
    )
}
  
  export default index;
