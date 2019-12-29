import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import '../styles/scss/MaterialGrid_Team.scss';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';

const styles = {
  card: {
    maxWidth: 345,
    margin:30,
  },
  media: {
    height: 140,
    
  },
  paper: {
    padding: "2vw",
    textAlign: "center",
    color: "#000000",
    whiteSpace: "nowrap",
    background: "#A0DB9E",
    marginTop: "3vh",
    marginBottom: "2vh"
    
  }, 
  img:{
    // width="65/100",
    textAlign: "center",
    color: "#000000",
    borderRadius: "50%",
    width: "65%",
    margin:"auto"
  },
  media:{
    width:"65%"
  }
  
};
const useStyles = makeStyles(styles);

export const MaterialGrid_Team = () => {
  const classes = useStyles();
  return (
    <div>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={6} lg={3}>
        <Card className={classes.card}>
      <CardActionArea>
      
      <CardMedia  
      classes={{
        img: classes.img, // class name, e.g. `classes-nesting-root-x`
        media: classes.media, // class name, e.g. `classes-nesting-label-x`
      }}
          component="img"
          alt="Director"
          height="240"
          image="/static/ns.jpg" 
          title="Director"
          
          
         
        />
        
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            Dr. N.S Raghuvanshi
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            Director MANIT
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary">
          Share
        </Button>
        <Button size="small" color="primary">
          Learn More
        </Button>
      </CardActions>
    </Card>
    
        </Grid>
        <Grid item xs={12} sm={6} lg={3}>
        <Card className={classes.card}>
      <CardActionArea>
      <CardMedia classes={{
        img: classes.img, // class name, e.g. `classes-nesting-root-x`
        media: classes.media, // class name, e.g. `classes-nesting-label-x`
      }}
          component="img"
          alt="Dean Student-Welfare MANIT"
          height="240"
          image="/static/sw.jpg"
          title="Director"
         
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
          Dr. J.L Bhagoria
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
          Dean Student-Welfare MANIT
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary">
          Share
        </Button>
        <Button size="small" color="primary">
          Learn More
        </Button>
      </CardActions>
    </Card>
        </Grid>
        <Grid item xs={12} sm={6} lg={3}>
        <Card className={classes.card}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image="/static/images/cards/contemplative-reptile.jpg"
          title="Contemplative Reptile"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            Demo Text
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            Student Activity incharge
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary">
          Share
        </Button>
        <Button size="small" color="primary">
          Learn More
        </Button>
      </CardActions>
    </Card>
        </Grid>
        <Grid item xs={12} sm={6} lg={3}>
        <Card className={classes.card}>
      <CardActionArea>
      <CardMedia classes={{
        img: classes.img, // class name, e.g. `classes-nesting-root-x`
        media: classes.media, // class name, e.g. `classes-nesting-label-x`
      }}
          component="img"
          alt="Faculty-Head"
          height="240"
          image="/static/facultyhead.jpg"
          title="Director"
         
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
          Dr. Prashant Baredar
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            Faculty Head
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary">
          Share
        </Button>
        <Button size="small" color="primary">
          Learn More
        </Button>
      </CardActions>
    </Card>
        </Grid>
        <Grid item xs={12} sm={6} lg={3}>
        <Card className={classes.card}>
      <CardActionArea>
      <CardMedia classes={{
        img: classes.img, // class name, e.g. `classes-nesting-root-x`
        media: classes.media, // class name, e.g. `classes-nesting-label-x`
      }}
          component="img"
          alt="Dean Student-Welfare MANIT"
          height="240"
          image="/static/Kanishk.jpg"
          title="Director"
         
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            Kanishk Gupta
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            Chairman ISTE SC MANIT
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary">
          Share
        </Button>
        <Button size="small" color="primary">
          Learn More
        </Button>
      </CardActions>
    </Card>
        </Grid>
        <Grid item xs={12} sm={6} lg={3}>
        <Card className={classes.card}>
      <CardActionArea>
      <CardMedia classes={{
        img: classes.img, // class name, e.g. `classes-nesting-root-x`
        media: classes.media, // class name, e.g. `classes-nesting-label-x`
      }}
          component="img"
          alt="Dean Student-Welfare MANIT"
          height="240"
          image="/static/Rajveer.jpg"
          title="Director"
         
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            Rajveer Singh Rajawat
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
          Vice Chairperson (Administration)
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary">
          Share
        </Button>
        <Button size="small" color="primary">
          Learn More
        </Button>
      </CardActions>
    </Card>
        </Grid>
        <Grid item xs={12} sm={6} lg={3}>
        <Card className={classes.card}>
      <CardActionArea>
      <CardMedia classes={{
        img: classes.img, // class name, e.g. `classes-nesting-root-x`
        media: classes.media, // class name, e.g. `classes-nesting-label-x`
      }}
          component="img"
          alt="Dean Student-Welfare MANIT"
          height="240"
          image="/static/mansi.jpg"
          title="Director"
         
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            Mansi Oberai
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
          Vice Chairperson Events
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary">
          Share
        </Button>
        <Button size="small" color="primary">
          Learn More
        </Button>
      </CardActions>
    </Card>
        </Grid>
        <Grid item xs={12} sm={6} lg={3}>
        <Card className={classes.card}>
      <CardActionArea>
      <CardMedia classes={{
        img: classes.img, // class name, e.g. `classes-nesting-root-x`
        media: classes.media, // class name, e.g. `classes-nesting-label-x`
      }}
          component="img"
          alt="Dean Student-Welfare MANIT"
          height="240"
          image="/static/diksha.jpg"
          title="Director"
         
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
          Diksha Sharma 
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
           Executive
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary">
          Share
        </Button>
        <Button size="small" color="primary">
          Learn More
        </Button>
      </CardActions>
    </Card>
        </Grid>
        <Grid item xs={12} sm={6} lg={3}>
        <Card className={classes.card}>
      <CardActionArea>
      <CardMedia classes={{
        img: classes.img, // class name, e.g. `classes-nesting-root-x`
        media: classes.media, // class name, e.g. `classes-nesting-label-x`
      }}
          component="img"
          alt="Dean Student-Welfare MANIT"
          height="240"
          image="/static/deepali.jpg"
          title="Director"
         
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
          Deepali Rawat
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            Executive
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary">
          Share
        </Button>
        <Button size="small" color="primary">
          Learn More
        </Button>
      </CardActions>
    </Card>
        </Grid>
        <Grid item xs={12} sm={6} lg={3}>
        <Card className={classes.card}>
      <CardActionArea>
      <CardMedia classes={{
        img: classes.img, // class name, e.g. `classes-nesting-root-x`
        media: classes.media, // class name, e.g. `classes-nesting-label-x`
      }}
          component="img"
          alt="Dean Student-Welfare MANIT"
          height="240"
          image="/static/karishma.jpg"
          title="Director"
         
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
          Karishma Puri
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            Executive
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary">
          Share
        </Button>
        <Button size="small" color="primary">
          Learn More
        </Button>
      </CardActions>
    </Card>
        </Grid>
        <Grid item xs={12} sm={6} lg={3}>
        <Card className={classes.card}>
      <CardActionArea>
      <CardMedia classes={{
        img: classes.img, // class name, e.g. `classes-nesting-root-x`
        media: classes.media, // class name, e.g. `classes-nesting-label-x`
      }}
          component="img"
          alt="Dean Student-Welfare MANIT"
          height="240"
          image="/static/Hardik.jpg"
          title="Director"
         
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
          Hardik Vijayvargiya
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            Executive
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary">
          Share
        </Button>
        <Button size="small" color="primary">
          Learn More
        </Button>
      </CardActions>
    </Card>
        </Grid>
        <Grid item xs={12} sm={6} lg={3}>
        <Card className={classes.card}>
      <CardActionArea>
      <CardMedia classes={{
        img: classes.img, // class name, e.g. `classes-nesting-root-x`
        media: classes.media, // class name, e.g. `classes-nesting-label-x`
      }}
          component="img"
          alt="Dean Student-Welfare MANIT"
          height="240"
          image="/static/siddharth.jpg"
          title="Director"
         
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            Siddharth Bhattacharya
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            Joint Genral Secretary
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary">
          Share
        </Button>
        <Button size="small" color="primary">
          Learn More
        </Button>
      </CardActions>
    </Card>
        </Grid>
        <Grid item xs={12} sm={6} lg={3}>
        <Card className={classes.card}>
      <CardActionArea>
      <CardMedia classes={{
        img: classes.img, // class name, e.g. `classes-nesting-root-x`
        media: classes.media, // class name, e.g. `classes-nesting-label-x`
      }}
          component="img"
          alt="Dean Student-Welfare MANIT"
          height="240"
          image="/static/ashutosh.jpg"
          title="Director"
         
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
          Aushotosh Bose
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
          Joint Genral Secretary
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary">
          Share
        </Button>
        <Button size="small" color="primary">
          Learn More
        </Button>
      </CardActions>
    </Card>
        </Grid>
        <Grid item xs={12} sm={6} lg={3}>
        <Card className={classes.card}>
      <CardActionArea>
      <CardMedia classes={{
        img: classes.img, // class name, e.g. `classes-nesting-root-x`
        media: classes.media, // class name, e.g. `classes-nesting-label-x`
      }}
          component="img"
          alt="Dean Student-Welfare MANIT"
          height="240"
          image="/static/Raghvendra.jpg"
          title="Director"
         
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
          Raghvendra Awasthi 
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            Head Logistics
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary">
          Share
        </Button>
        <Button size="small" color="primary">
          Learn More
        </Button>
      </CardActions>
    </Card>
        </Grid>
        <Grid item xs={12} sm={6} lg={3}>
        <Card className={classes.card}>
      <CardActionArea>
      <CardMedia classes={{
        img: classes.img, // class name, e.g. `classes-nesting-root-x`
        media: classes.media, // class name, e.g. `classes-nesting-label-x`
      }}
          component="img"
          alt="Dean Student-Welfare MANIT"
          height="240"
          image="/static/Eshaan.jpg"
          title="Director"
         
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
          Eshaan Agrawal
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
          Sponsorship and Marketing Head
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary">
          Share
        </Button>
        <Button size="small" color="primary">
          Learn More
        </Button>
      </CardActions>
    </Card>
        </Grid>
        <Grid item xs={12} sm={6} lg={3}>
        <Card className={classes.card}>
      <CardActionArea>
      <CardMedia classes={{
        img: classes.img, // class name, e.g. `classes-nesting-root-x`
        media: classes.media, // class name, e.g. `classes-nesting-label-x`
      }}
          component="img"
          alt="Dean Student-Welfare MANIT"
          height="240"
          image="/static/vanshikha.jpeg"
          title="Director"
         
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
          Vanshika Warathe
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
          Head- Technical
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary">
          Share
        </Button>
        <Button size="small" color="primary">
          Learn More
        </Button>
      </CardActions>
    </Card>
        </Grid>
        <Grid item xs={12} sm={6} lg={3}>
        <Card className={classes.card}>
      <CardActionArea>
      <CardMedia classes={{
        img: classes.img, // class name, e.g. `classes-nesting-root-x`
        media: classes.media, // class name, e.g. `classes-nesting-label-x`
      }}
          component="img"
          alt="Dean Student-Welfare MANIT"
          height="240"
          image="/static/Neelesh.jpg"
          title="Director"
         
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
          Neelesh Sharma
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
          Head General Affairs
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary">
          Share
        </Button>
        <Button size="small" color="primary">
          Learn More
        </Button>
      </CardActions>
    </Card>
        </Grid>
        <Grid item xs={12} sm={6} lg={3}>
        <Card className={classes.card}>
      <CardActionArea>
      <CardMedia classes={{
        img: classes.img, // class name, e.g. `classes-nesting-root-x`
        media: classes.media, // class name, e.g. `classes-nesting-label-x`
      }}
          component="img"
          alt="Dean Student-Welfare MANIT"
          height="240"
          image="/static/Rahul.jpg"
          title="Director"
         
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
          Rahul Tyagi
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
          Head PR
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary">
          Share
        </Button>
        <Button size="small" color="primary">
          Learn More
        </Button>
      </CardActions>
    </Card>
        </Grid>
        <Grid item xs={12} sm={6} lg={3}>
        <Card className={classes.card}>
      <CardActionArea>
      <CardMedia classes={{
        img: classes.img, // class name, e.g. `classes-nesting-root-x`
        media: classes.media, // class name, e.g. `classes-nesting-label-x`
      }}
          component="img"
          alt="Dean Student-Welfare MANIT"
          height="240"
          image="/static/Challa.jpg"
          title="Director"
         
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
          Challa Jaahnvi
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
          Executive
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary">
          Share
        </Button>
        <Button size="small" color="primary">
          Learn More
        </Button>
      </CardActions>
    </Card>
        </Grid>
        <Grid item xs={12} sm={6} lg={3}>
        <Card className={classes.card}>
      <CardActionArea>
      <CardMedia classes={{
        img: classes.img, // class name, e.g. `classes-nesting-root-x`
        media: classes.media, // class name, e.g. `classes-nesting-label-x`
      }}
          component="img"
          alt="Dean Student-Welfare MANIT"
          height="240"
          image="/static/Minesh.jpg"
          title="Director"
         
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
          Minesh Agrawal
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
          Head Finance
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary">
          Share
        </Button>
        <Button size="small" color="primary">
          Learn More
        </Button>
      </CardActions>
    </Card>
        </Grid>
        <Grid item xs={12} sm={6} lg={3}>
        <Card className={classes.card}>
      <CardActionArea>
      <CardMedia classes={{
        img: classes.img, // class name, e.g. `classes-nesting-root-x`
        media: classes.media, // class name, e.g. `classes-nesting-label-x`
      }}
          component="img"
          alt="Dean Student-Welfare MANIT"
          height="240"
          image="/static/gourav.jpg"
          title="Director"
         
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
          Gourav Raj
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
          Web Developer
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary">
          Share
        </Button>
        <Button size="small" color="primary">
          Learn More
        </Button>
      </CardActions>
    </Card>
        </Grid>
        <Grid item xs={12} sm={6} lg={3}>
        <Card className={classes.card}>
      <CardActionArea>
      <CardMedia classes={{
        img: classes.img, // class name, e.g. `classes-nesting-root-x`
        media: classes.media, // class name, e.g. `classes-nesting-label-x`
      }}
          component="img"
          alt="Dean Student-Welfare MANIT"
          height="240"
          image="/static/archit.jpg"
          title="Director"
         
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
          Archit Raghuvanshi
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
          Executive
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary">
          Share
        </Button>
        <Button size="small" color="primary">
          Learn More
        </Button>
      </CardActions>
    </Card>
        </Grid>
        <Grid item xs={12} sm={6} lg={3}>
        <Card className={classes.card}>
      <CardActionArea>
      <CardMedia classes={{
        img: classes.img, // class name, e.g. `classes-nesting-root-x`
        media: classes.media, // class name, e.g. `classes-nesting-label-x`
      }}
          component="img"
          alt="Dean Student-Welfare MANIT"
          height="240"
          image="/static/rajat.jpg"
          title="Director"
         
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
          Rajat Bhavasar
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
          Executive
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary">
          Share
        </Button>
        <Button size="small" color="primary">
          Learn More
        </Button>
      </CardActions>
    </Card>
        </Grid>
        <Grid item xs={12} sm={6} lg={3}>
        <Card className={classes.card}>
      <CardActionArea>
      <CardMedia classes={{
        img: classes.img, // class name, e.g. `classes-nesting-root-x`
        media: classes.media, // class name, e.g. `classes-nesting-label-x`
      }}
          component="img"
          alt="Dean Student-Welfare MANIT"
          height="240"
          image="/static/harshit.jpg"
          title="Director"
         
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
          Harshit Kumar Jain
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
          Executive
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary">
          Share
        </Button>
        <Button size="small" color="primary">
          Learn More
        </Button>
      </CardActions>
    </Card>
        </Grid>
        <Grid item xs={12} sm={6} lg={3}>
        <Card className={classes.card}>
      <CardActionArea>
      <CardMedia classes={{
        img: classes.img, // class name, e.g. `classes-nesting-root-x`
        media: classes.media, // class name, e.g. `classes-nesting-label-x`
      }}
          component="img"
          alt="Dean Student-Welfare MANIT"
          height="240"
          image="/static/sharan.jpg"
          title="Director"
         
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
          Sharan Saikumar
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
          Executive
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary">
          Share
        </Button>
        <Button size="small" color="primary">
          Learn More
        </Button>
      </CardActions>
    </Card>
        </Grid>
        <Grid item xs={12} sm={6} lg={3}>
        <Card className={classes.card}>
      <CardActionArea>
      <CardMedia classes={{
        img: classes.img, // class name, e.g. `classes-nesting-root-x`
        media: classes.media, // class name, e.g. `classes-nesting-label-x`
      }}
          component="img"
          alt="Dean Student-Welfare MANIT"
          height="240"
          image="/static/neelanjan.png"
          title="Director"
         
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
          Neelanjan Banerjee
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
          Executive
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary">
          Share
        </Button>
        <Button size="small" color="primary">
          Learn More
        </Button>
      </CardActions>
    </Card>
        </Grid>
        <Grid item xs={12} sm={6} lg={3}>
        <Card className={classes.card}>
      <CardActionArea>
      <CardMedia classes={{
        img: classes.img, // class name, e.g. `classes-nesting-root-x`
        media: classes.media, // class name, e.g. `classes-nesting-label-x`
      }}
          component="img"
          alt="Dean Student-Welfare MANIT"
          height="240"
          image="/static/vanshikha(2).jpeg"
          title="Director"
         
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
          Vanshika Agarwal
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
          Content Writer
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary">
          Share
        </Button>
        <Button size="small" color="primary">
          Learn More
        </Button>
      </CardActions>
    </Card>
        </Grid>
        <Grid item xs={12} sm={6} lg={3}>
        <Card className={classes.card}>
      <CardActionArea>
      <CardMedia classes={{
        img: classes.img, // class name, e.g. `classes-nesting-root-x`
        media: classes.media, // class name, e.g. `classes-nesting-label-x`
      }}
          component="img"
          alt="Dean Student-Welfare MANIT"
          height="240"
          image="/static/sparsh.jpg"
          title="Director"
         
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
          Sparsh Shrivastava
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
          Executive
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary">
          Share
        </Button>
        <Button size="small" color="primary">
          Learn More
        </Button>
      </CardActions>
    </Card>
        </Grid>
        <Grid item xs={12} sm={6} lg={3}>
        <Card className={classes.card}>
      <CardActionArea>
      <CardMedia classes={{
        img: classes.img, // class name, e.g. `classes-nesting-root-x`
        media: classes.media, // class name, e.g. `classes-nesting-label-x`
      }}
          component="img"
          alt="Dean Student-Welfare MANIT"
          height="240"
          image="/static/khushali.jpg"
          title="Director"
         
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
          Khushali Bilare
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
          Executive
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary">
          Share
        </Button>
        <Button size="small" color="primary">
          Learn More
        </Button>
      </CardActions>
    </Card>
        </Grid>
        <Grid item xs={12} sm={6} lg={3}>
        <Card className={classes.card}>
      <CardActionArea>
      <CardMedia classes={{
        img: classes.img, // class name, e.g. `classes-nesting-root-x`
        media: classes.media, // class name, e.g. `classes-nesting-label-x`
      }}
          component="img"
          alt="Dean Student-Welfare MANIT"
          height="240"
          image="/static/meetanshi.jpg"
          title="Director"
         
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
          Meetanshi Gupta
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
          Executive
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary">
          Share
        </Button>
        <Button size="small" color="primary">
          Learn More
        </Button>
      </CardActions>
    </Card>
        </Grid>
        <Grid item xs={12} sm={6} lg={3}>
        <Card className={classes.card}>
      <CardActionArea>
      <CardMedia classes={{
        img: classes.img, // class name, e.g. `classes-nesting-root-x`
        media: classes.media, // class name, e.g. `classes-nesting-label-x`
      }}
          component="img"
          alt="Dean Student-Welfare MANIT"
          height="240"
          image="/static/saloni.jpg"
          title="Director"
         
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
          Saloni Goyal
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
          Executive
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary">
          Share
        </Button>
        <Button size="small" color="primary">
          Learn More
        </Button>
      </CardActions>
    </Card>
        </Grid>
        <Grid item xs={12} sm={6} lg={3}>
        <Card className={classes.card}>
      <CardActionArea>
      <CardMedia classes={{
        img: classes.img, // class name, e.g. `classes-nesting-root-x`
        media: classes.media, // class name, e.g. `classes-nesting-label-x`
      }}
          component="img"
          alt="Dean Student-Welfare MANIT"
          height="240"
          image="/static/monika.jpg"
          title="Director"
         
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
          Monika Shri Mondal
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
          Executive
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary">
          Share
        </Button>
        <Button size="small" color="primary">
          Learn More
        </Button>
      </CardActions>
    </Card>
        </Grid>
        <Grid item xs={12} sm={6} lg={3}>
        <Card className={classes.card}>
      <CardActionArea>
      <CardMedia classes={{
        img: classes.img, // class name, e.g. `classes-nesting-root-x`
        media: classes.media, // class name, e.g. `classes-nesting-label-x`
      }}
          component="img"
          alt="Dean Student-Welfare MANIT"
          height="240"
          image="/static/ankit.jpg"
          title="Director"
         
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
          Ankit Khandelwal
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
          Executive
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary">
          Share
        </Button>
        <Button size="small" color="primary">
          Learn More
        </Button>
      </CardActions>
    </Card>
        </Grid>
        <Grid item xs={12} sm={6} lg={3}>
        <Card className={classes.card}>
      <CardActionArea>
      <CardMedia classes={{
        img: classes.img, // class name, e.g. `classes-nesting-root-x`
        media: classes.media, // class name, e.g. `classes-nesting-label-x`
      }}
          component="img"
          alt="Dean Student-Welfare MANIT"
          height="240"
          image="/static/deepansh.jpg"
          title="Director"
         
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
          Deepansh Shrivastav
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
          Executive
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary">
          Share
        </Button>
        <Button size="small" color="primary">
          Learn More
        </Button>
      </CardActions>
    </Card>
        </Grid>
        <Grid item xs={12} sm={6} lg={3}>
        <Card className={classes.card}>
      <CardActionArea>
      <CardMedia classes={{
        img: classes.img, // class name, e.g. `classes-nesting-root-x`
        media: classes.media, // class name, e.g. `classes-nesting-label-x`
      }}
          component="img"
          alt="Dean Student-Welfare MANIT"
          height="240"
          image="/static/rakesh.png"
          title="Director"
         
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
          Rakesh Kumar
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
          Executive
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary">
          Share
        </Button>
        <Button size="small" color="primary">
          Learn More
        </Button>
      </CardActions>
    </Card>
        </Grid>
        <Grid item xs={12} sm={6} lg={3}>
        <Card className={classes.card}>
      <CardActionArea>
      <CardMedia classes={{
        img: classes.img, // class name, e.g. `classes-nesting-root-x`
        media: classes.media, // class name, e.g. `classes-nesting-label-x`
      }}
          component="img"
          alt="Dean Student-Welfare MANIT"
          height="240"
          image="/static/rajeshwari.jpg"
          title="Director"
         
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
          Rajeshwari P
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
          Executive
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary">
          Share
        </Button>
        <Button size="small" color="primary">
          Learn More
        </Button>
      </CardActions>
    </Card>
        </Grid>
        <Grid item xs={12} sm={6} lg={3}>
        <Card className={classes.card}>
      <CardActionArea>
      <CardMedia classes={{
        img: classes.img, // class name, e.g. `classes-nesting-root-x`
        media: classes.media, // class name, e.g. `classes-nesting-label-x`
      }}
          component="img"
          alt="Dean Student-Welfare MANIT"
          height="240"
          image="/static/richa.jpg"
          title="Director"
         
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
          Richa soni
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
          Executive
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary">
          Share
        </Button>
        <Button size="small" color="primary">
          Learn More
        </Button>
      </CardActions>
    </Card>
        </Grid>
        <Grid item xs={12} sm={6} lg={3}>
        <Card className={classes.card}>
      <CardActionArea>
      <CardMedia classes={{
        img: classes.img, // class name, e.g. `classes-nesting-root-x`
        media: classes.media, // class name, e.g. `classes-nesting-label-x`
      }}
          component="img"
          alt="Dean Student-Welfare MANIT"
          height="240"
          image="/static/prena.jpg"
          title="Director"
         
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
          Prena Singh
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
          Executive
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary">
          Share
        </Button>
        <Button size="small" color="primary">
          Learn More
        </Button>
      </CardActions>
    </Card>
        </Grid>
      </Grid>
    </div>
  );
};
