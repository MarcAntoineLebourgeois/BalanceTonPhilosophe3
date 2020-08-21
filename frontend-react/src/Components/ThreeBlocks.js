import React from "react";
import {Grid,Typography, Card,CardActionArea,CardMedia,CardContent} from "@material-ui/core";
import Background1 from "../Data/dissertImage.jpg"
import Background2 from "../Data/themesImage.jpg"
import Background3 from "../Data/philosopherImage.jpg"
import { makeStyles } from '@material-ui/core/styles';
import { Link} from "react-router-dom";

const ThreeBlocks = (props) => {
    const useStyles = makeStyles(theme => ({
        media: {
          height: 0,
          paddingTop: '100%', // 16:9
        }
      }));
      const classes = useStyles();
return(
    <>
    <Grid style={{height:"70px",margin:"auto"}} container direction='row' alignItems="flex-end" justify="space-around">
        <Typography> Utiliser BalanceTonPhilosophe </Typography>
    </Grid>
    <Grid 
        container 
        direction='row'
        alignItems="center" 
        justify="space-around" 
        xs={12} sm={12} md={10} lg={8} xl={8} 
        style={{margin: "auto"}}
    >
    
    <Link to='/dissertations' style={{ textDecoration: 'none' }}>
        <Grid container item style={{width: '300px', height: '70vh' }}>
            <Grid item style={{height:"90%", margin: "auto"}}>
                <Card onClick={props.reinitForm} >
                    <CardActionArea>
                        <CardMedia className={classes.media} image={Background1} />
                        <CardContent style={{backgroundColor: "#ea8f8f" }}>
                        <Typography gutterBottom variant="h5" component="h2"> Pour les dissertations </Typography>
                        <Typography variant="body2" color="textSecondary" component="p" align='justify'>
                            Si tu cherches des sources a un sujet de dissertation, notre IA peut t'aider. 
                            Elle cherchera les themes qui ressortent en analysant les mots puis te proposera des philosophes.
                            Attention toutefois, elle peut parfois etre a cote de la plaque :)
                        </Typography>
                        </CardContent>
                    </CardActionArea>
                </Card>
            </Grid>
        </Grid>
    </Link>
    <Link to='/themes' style={{ textDecoration: 'none' }}>
        <Grid container item style={{width: '300px', height: '70vh' }}>
            <Grid item style={{height:"90%", margin: "auto"}}>
                <Card onClick={props.reinitForm} >
                    <CardActionArea>
                        <CardMedia className={classes.media} image={Background2} />
                        <CardContent style={{backgroundColor: "#ea8f8f" }}>
                        <Typography gutterBottom variant="h5" component="h2"> Pour les themes </Typography>
                        <Typography variant="body2" color="textSecondary" component="p" align='justify'>
                            Ici, tu peux chercher quel philosophe a ecrit sur un theme. 
                            L'avantage, c'est que tu peux mettre plusieurs themes.
                            Cela permettra d'etre beaucoup plus precis dans le rendu et trouver la meilleure source :)
                        </Typography>
                        </CardContent>
                    </CardActionArea>
                </Card>                
            </Grid>
        </Grid>
    </Link>
    <Link to='/philosophes' style={{ textDecoration: 'none' }}>
        <Grid container item style={{width: '300px', height: '70vh' }}>
            <Grid item style={{height:"90%", margin: "auto"}}>
                <Card onClick={props.reinitForm} >
                    <CardActionArea>
                        <CardMedia className={classes.media} image={Background3} />
                        <CardContent style={{backgroundColor: "#ea8f8f" }}>
                        <Typography gutterBottom variant="h5" component="h2"> Pour les philosophes </Typography>
                        <Typography variant="body2" color="textSecondary" component="p" align='justify'>
                            Difficile de trouver un resume convenable de la pensee d'un philosophe sur les themes du bac, non?
                            Via cette recherche, tu pourras facilement le trouver. C'est aussi plutot pratique pour comparer deux philosophes. 
                        </Typography>
                        </CardContent>
                    </CardActionArea>
                </Card>  
            </Grid>
        </Grid>
    </Link>
    </Grid>

    <p></p>
    </>
)
}

export default ThreeBlocks;
