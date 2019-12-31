
import Head from 'next/head';

import Nav2_Team from "../components/Nav2_Team";
import Header_Team from "../components/Header_Team";
import { MaterialGrid_Team } from "../components/MaterialGrid_Team";




const index = () =>{
    return(
        <div>
            <Head>
                <title>ISTE MANIT TEAM</title>
                <meta name="viewport" content="initial-scale=1.0, width=device-width" />
                
                
                <link href="https://fonts.googleapis.com/css?family=Poppins&display=swap" rel="stylesheet"></link>
                
                <link href="https://fonts.googleapis.com/css?family=Roboto:300&display=swap" rel="stylesheet"></link> 
                <link href="https://fonts.googleapis.com/css?family=Noto+Sans:600&display=swap" rel="stylesheet"></link>
                <link href="https://fonts.googleapis.com/css?family=Ubuntu&display=swap" rel="stylesheet"></link>
            </Head>
           
            
            
            
            <Nav2_Team/>
            <Header_Team/>
            <MaterialGrid_Team />
            
            
        </div>
       
 
    )
}
  
  export default index;
