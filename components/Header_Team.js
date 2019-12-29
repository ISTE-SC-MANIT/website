import '../styles/scss/header_Team.scss';
import { makeStyles } from "@material-ui/core/styles";
import React from "react";
import Paper from '@material-ui/core/Paper';



const styles = {
    Header: {
     
  backgroundImage: "url('/static/breadcrumb.png')",
     height: "300px",
     marginTop: "70px",
     marginBottom: "70px",
     margin:"auto",
     
    },
    heading: {


    }
    ,
  };
  
  
  const useStyles = makeStyles(styles);
const Header = () =>
{
    const classes = useStyles();
    return(
        
       <div>
             <Paper elevation={3} >
                 <div className={classes.Header}>
                   <br></br><br></br>
                     <p className="heading">Meet Our Team!</p>
                 </div>   
                 </Paper>
       </div>
    )
}
export default Header;