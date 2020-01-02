import React from 'react';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

const theme = createMuiTheme({
  typography: {
    fontFamily: [
        '-apple-system',
        'BlinkMacSystemFont',
        '"Segoe UI"',
        'Roboto',
        '"Helvetica Neue"',
        'Arial',
        'sans-serif',
        '"Apple Color Emoji"',
        '"Segoe UI Emoji"',
        '"Segoe UI Symbol"',
      ].join(','),
    
   
  },
 

});
const useStyles = makeStyles(theme => ({
    root: {
      flexGrow: 1,
    },
    paper: {
      padding: theme.spacing(2),
      textAlign: 'center',
      color: theme.palette.text.secondary,
    },
    head:{
        textAlign: "center",
      },
      main:{
        margin:"50px"
      },
  }));

export default function FontSizeTheme() {
    const classes = useStyles();
  return (
      <div>
    <ThemeProvider theme={theme}>
      <div className={classes.head}>
          <br></br><br></br>
        <Typography variant="h2">ABOUT US</Typography>
      </div>
    </ThemeProvider>
    <br></br>
    <div>
                <Grid container spacing={0}>
                    <Grid item xs={12} sm={6} lg={6} className={classes.main}>
                        <Typography variant="h1"
                         style={{
                            color: "#0a183d",
                            textAlign: "center",
                            marginTop:"90px",

                            
                          }}>To Travel is to <br></br>live</Typography>
                    </Grid>
                    <Grid item xs={12} sm={6} lg={6} className={classes.main}>
                        <Typography variant="h6" gutterBottom>Chimera-X is the flagship event of ISTE Students' Chapter MANIT organised as a part of our annual students' conclave Chimera.
                                    Chimera-X was first organised in 2003 and is entering its 17th edition. This experience and legacy of 17 years is what has made Chimera-X central India's largest quiz contest and that too undisputed. From 2017 onwards Chimera-X took its first steps into the national quizzing scene after its prelims were conducted in 9 cities of the country. This figure went to 11 in the subsequent edition and is expected to push to other new cities. Chimera-x has already been conducted in Gwalior, Allahabad, Nagpur, Ujjain, Indore, Raipur, Mathura, Jabalpur, Hyderabad, New Delhi, Jaipur, Pune and Bhopal.
                                    Chimera-X is a general quiz consisting of city prelims and finale at MANIT Bhopal.
                                    <br></br><br></br>
                                    <Button variant="contained" color="secondary">
                                        Chimera 2K19 
                                    </Button>
                       </Typography>
                    </Grid>
                
                </Grid>
  </div>
  </div>
  );
}