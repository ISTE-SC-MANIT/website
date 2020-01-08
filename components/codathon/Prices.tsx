import React from "react";
import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import { ButtonGroup } from "@material-ui/core";

const theme = createMuiTheme({
    typography: {
        fontFamily: [
            "-apple-system",
            "BlinkMacSystemFont",
            '"Segoe UI"',
            "Roboto",
            '"Helvetica Neue"',
            "Arial",
            "sans-serif",
            '"Apple Color Emoji"',
            '"Segoe UI Emoji"',
            '"Segoe UI Symbol"'
        ].join(",")
        // Tell Material-UI what the font-size on the html element is.
    }
});
const useStyles = makeStyles(theme => ({
    root: {
        borderColor:"Black",
        borderWidth:"2px"
    },
    paper: {
        padding: theme.spacing(2),
        textAlign: "center",
        color: theme.palette.text.secondary
        
    },
    head: {
        textAlign: "center"
    },
    section: {
        backgroundImage: `url(${"/static/abt.jpg"})` ,
        backgroundAttachment: "fixed",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover"
    },
    card: {
        margin: "20px",
        height: "140px",
        border:"30px",
        borderColor:"Black",
        borderWidth:"20px"
               
    },
    card2: {
        padding:"10px",
        margin: "25px",
        height: "160px",
        border:"30px"
               
    },
    cardReg: {
        padding:"2px",
        margin: "15px",
        height: "220px",
        marginLeft:"80px",
        marginRight:"80px"
        
               
    },
    paperterms: {
        padding:"2px",
        margin: "15px",
        height: "220px",
        width:"3px"
               
    },
    pricepaper:{
      backgroundColor:"lightblue",
      margin:"auto",
      width:"80%"
    }
   ,
    media: {
        height: 250
    },
    button:{
        marginLeft:"auto",
        marginRight:"auto"

    },
    [theme.breakpoints.down("sm")]: {
        media: {
            height: 200
        }
    }
}));

export default function Prices() {
    const classes = useStyles();
    return (
        <div className={classes.section}>
            
            <ThemeProvider theme={theme}>
                <div className={classes.head}>
                    <br></br>
                    <Typography
                        variant="h3"
                        style={{
                            backgroundColor:"white",
                            color: "Black",
                            textAlign: "center",
                            marginTop: "8px",
                            marginBottom:"0px"
                        }}
                    >
                        Prices
                    </Typography>
                </div>
            </ThemeProvider>
            <div>
                <Paper className={classes.pricepaper}>
                <Grid container>
                    <Grid item xs={12} sm={5} lg={4}>
                        <Card className={classes.card}>
                            <CardActionArea>
                                
                                <CardContent style={{
                                         textAlign: "center",
                                                }}>
                                    <Typography
                                        gutterBottom
                                        variant="h5"
                                        component="h2"
                                    >   12,000 ₹
                                        
                                    </Typography>
                                   
                                </CardContent>
                            </CardActionArea>
                            <CardActions>
                                <Button size="large" color="primary" className={classes.button}>
                                First Price
                                </Button>
                            </CardActions>
                        </Card>
                    </Grid>
                    <Grid item xs={12} sm={5} lg={4}>
                        <Card className={classes.card}>
                            <CardActionArea>
                               
                                <CardContent style={{
                                         textAlign: "center",
                                                }}>
                                    <Typography
                                        gutterBottom
                                        variant="h5"
                                        component="h2"
                                    >
                                       9,000 ₹
                                    </Typography>
                                   </CardContent>
                            </CardActionArea>
                            <CardActions>
                                <Button size="large" color="primary"className={classes.button}>
                                   Second Price
                                </Button>
                            </CardActions>
                        </Card>
                    </Grid>
                    <Grid item xs={12} sm={5} lg={4}>
                        <Card className={classes.card}>
                            <CardActionArea>
                               
                                <CardContent style={{
                                         textAlign: "center",
                                                }}>
                                    <Typography
                                        gutterBottom
                                        variant="h5"
                                        component="h2"
                                    >
                                       6,000 ₹ 
                                    </Typography>
                                   </CardContent>
                            </CardActionArea>
                            <CardActions>
                                <Button size="large" color="primary" className={classes.button}>
                                    Third Price
                                </Button>
                            </CardActions>
                        </Card>
                    </Grid>
                    <Grid item xs={12} sm={5} lg={4}>
                        <Card className={classes.card}>
                            <CardActionArea>
                                
                                <CardContent  style={{
                                         textAlign: "center",
                                                }} >
                                    <Typography
                                        gutterBottom
                                        variant="h5"
                                        component="h2"
                                    >
                                        4,000 ₹
                                    </Typography>
                                    
                                </CardContent>
                            </CardActionArea>
                            <CardActions >
                                <Button size="large" color="primary" className={classes.button}>
                                   Fourth Price
                                </Button>
                            </CardActions>
                        </Card>
                    </Grid>
                    <Grid item xs={12} sm={5} lg={4}>
                        <Card className={classes.card}>
                            <CardActionArea>
                               
                                <CardContent  style={{
                                         textAlign: "center",
                                                }}>
                                    <Typography
                                        gutterBottom
                                        variant="h5"
                                        component="h2"
                                    >
                                       2,000 ₹
                                    </Typography>
                                    
                                </CardContent>
                            </CardActionArea>
                            <CardActions>
                                <Button size="large" color="primary" className={classes.button}>
                                   Fifth Price
                                </Button>
                            </CardActions>
                        </Card>
                    </Grid>
                       </Grid> 
                        </Paper>
                           <Card className={classes.card2} >
      <CardContent>
      <Typography className={classes.pos} color="textSecondary">
          Other Prices
        </Typography>
        <Typography className={classes.title} color="textPrimary" gutterBottom>
        • Hackerearth T-Shirts to top scorer from each NIT & IIIT. (Provided the participation from their respective institute is more than 100 students)
                            <br/>
                           • Giveaway from our In-kind Partner Coding Blocks :

                             20 Coding Blocks Bags for top rankers among NITs.
                             10 Mastering Competitive Programming Books for top rankers among IIITs.
                             Coding Blocks T-shirts for the top rankers of host institute.
                         
        </Typography>
        
        
        
      </CardContent>
      
    </Card><Grid container  style={{margin:"auto"}} spacing={0} >
    <Grid item xs={12} sm={6} lg={6} >
    <Card className={classes.cardReg}>
                            <CardActionArea>
                               
                                <CardContent  style={{
                                         textAlign: "center",
                                                }}>
                                    <Typography
                                        gutterBottom
                                        variant="h5"
                                        component="h2"
                                    >
                                      Past Contests
                                    </Typography>
                                    
                                </CardContent>
                            </CardActionArea>
                            <CardActions>
                            <ButtonGroup className={classes.button}
                                     orientation="vertical"
                                         color="primary"
                                     aria-label="vertical outlined primary button group"
                                              >
                                <Button size="large" variant="contained" color="primary">
                                  Codathon:2019
                                </Button><br/>
                                <Button size="large" variant="contained" color="primary" href="https://www.hackerearth.com/challenges/college/codathon18-nitbhopal/">
                                   Codathon:2018
                                </Button> </ButtonGroup>
                            </CardActions>
                            
                        </Card></Grid>
                        <Grid item xs={12} sm={6} lg={6}>
                         <Card className={classes.cardReg}>
                            <CardActionArea>
                               
                                <CardContent  style={{
                                         textAlign: "center",
                                                }}>
                                    <Typography
                                        gutterBottom
                                        variant="h5"
                                        component="h2"
                                    >
                                      Registration
                                    </Typography>
                                    
                                </CardContent>
                            </CardActionArea>
                            <CardActions>
                                <Button size="large" variant="contained" color="primary" href="http://bit.ly/codathon-20" className={classes.button}>
                                   Register Now
                                </Button>
                                <Button size="large" variant="contained" color="primary" href="https://www.hackerearth.com/challenges/college/codathon20-nitbhopal/" className={classes.button}>
                                   Goto Contest
                                </Button>
                            </CardActions>
                            <CardContent><Typography
                                        gutterBottom
                                        color="textSecondary"
                                          style={{fontSize:"12px"}}                                      
                                    >
                                      NOTE : REGISTER AT THE LINK ABOVE. THEN PROCEED TO REGISTER AT HACKEREARTH. LINK IS PROVIDED AT THE END OF ABOVE FORM.
                                       REGISTRATION ON BOTH LINKS IS MANDATORY.
                                    </Typography></CardContent>
                            
                        </Card></Grid></Grid>
                <Paper className={classes.terms}>
                    <Typography style={{textAlign:"center",
                fontSize:"20px",margin:"11px"}}>  Terms and Conditions</Typography>
                  <Typography color="textSecondary"
                  style={{textAlign:"center"}}>
                  * The hackerearth internship will be provided to the top female coder from 2nd or 3rd year pursuing her B.Tech from an NIT.
<br/>** T-shirts will be given to top coders from a given NIT or IIIT provided that the number of participants is greater than or equal to 50 from that NIT or IIIT
<br/>*** Only students from NITs are eligible for cash prizes. Prize money for the winners will be electronically transferred after successful verification of bonafide certificate from their respective institutes.
                  </Typography>
                    </Paper>    
                
            </div>
        </div>
    );
}
