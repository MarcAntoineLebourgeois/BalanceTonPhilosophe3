import React from "react";
import {Grid,Typography, Card,CardActionArea,CardMedia,CardContent} from "@material-ui/core";
import Background1 from "../Data/dissertImage.jpg"
import Background2 from "../Data/themesImage.jpg"
import Background3 from "../Data/philosopherImage.jpg"
import Background4 from "../Data/quizImage.jpg"
import { makeStyles } from '@material-ui/core/styles';
import { Link} from "react-router-dom";
import "../styles.css";

const ThreeBlocks = (props) => {
    const useStyles = makeStyles(theme => ({
        media: {
          height: 0,
          paddingTop: '100%', // 16:9
        }
      }));
    const classes = useStyles();
    return(
    <div > 
        <Grid style={{height:"70px",margin:"auto"}} container direction='row' alignItems="flex-end" justify="space-around">
            <Typography variant="h6"> Comment utiliser BalanceTonPhilosophe ? </Typography>
        </Grid>
        <p></p>
        <Grid 
            container 
            item
            direction='row'
            alignItems="center" 
            justify="space-around" 
            xs={12} sm={12} md={10} lg={10} xl={10} 
            style={{margin: "auto", padding:"20px"}}
        >
        
        <Link to='/dissertation' style={{ textDecoration: 'none' }}>
            <Grid container item style={{width: '280px' }}>

                <Card onClick={props.reinitForm} >
                        <CardActionArea>
                            <CardMedia className={classes.media} image={Background1} />
                            <CardContent style={{backgroundColor: "#ea8f8f" }}>
                            <Typography gutterBottom variant="h6" > Pour les dissertations </Typography>
                            <Typography variant="body2" color="textSecondary" align='justify'>
                                Si tu cherches des sources a un sujet de dissertation, notre IA peut t'aider. 
                            </Typography>
                            <Typography variant="body2" color="textSecondary" align='justify'>
                                Elle cherchera les themes qui ressortent en analysant les mots puis te proposera des philosophes.
                            </Typography>
                            <Typography variant="body2" color="textSecondary" align='justify'>    
                                Attention toutefois, elle peut parfois etre a cote de la plaque :)
                            </Typography>
                            </CardContent>
                        </CardActionArea>
                    </Card>

            </Grid>
        </Link>
        <Link to='/theme' style={{ textDecoration: 'none' }}>
            <Grid container item style={{width: '280px'}}>
                <Card onClick={props.reinitForm} >
                        <CardActionArea>
                            <CardMedia className={classes.media} image={Background2} />
                            <CardContent style={{backgroundColor: "#ea8f8f" }}>
                            <Typography gutterBottom variant="h6" > Pour les themes </Typography>
                            <Typography variant="body2" color="textSecondary" align='justify'>
                                Ici, tu peux chercher quel philosophe a ecrit sur un theme.
                            </Typography> 
                            <Typography variant="body2" color="textSecondary" align='justify'>
                                L'avantage, c'est que tu peux mettre plusieurs themes.
                            </Typography>
                            <Typography variant="body2" color="textSecondary" align='justify'>
                                Cela permettra d'etre beaucoup plus precis dans le rendu et trouver la meilleure source :)
                            </Typography>
                            </CardContent>
                        </CardActionArea>
                    </Card>                
            </Grid>
        </Link>
        <Link to='/philosophe' style={{ textDecoration: 'none' }}>
            <Grid container item style={{width: '280px' }}>
                <Card onClick={props.reinitForm} >
                    <CardActionArea>
                        <CardMedia className={classes.media} image={Background3} />
                        <CardContent style={{backgroundColor: "#ea8f8f" }}>
                        <Typography gutterBottom variant="h6" > Pour les philosophes </Typography>
                        <Typography variant="body2" color="textSecondary" align='justify'>
                            Difficile de trouver un resume convenable de la pensee d'un philosophe sur les themes du bac?
                        </Typography>
                        <Typography variant="body2" color="textSecondary" align='justify'>
                            Via cette recherche, tu pourras facilement le trouver. C'est aussi plutot pratique pour comparer deux philosophes. 
                        </Typography>
                        </CardContent>
                    </CardActionArea>
                </Card>  
            </Grid>
        </Link>
        <Link to='/quiz' style={{ textDecoration: 'none' }}>
            <Grid container item style={{width: '280px' }}>
                <Card onClick={props.reinitForm} >
                    <CardActionArea>
                        <CardMedia className={classes.media} image={Background4} />
                        <CardContent style={{backgroundColor: "#ea8f8f" }}>
                        <Typography gutterBottom variant="h6" > Les Quiz </Typography>
                        <Typography variant="body2" color="textSecondary" align='justify'>
                            Teste tes connaissances avec ces quiz qui t'entraineront a te rappeler des diverses punchlines. 
                        </Typography>
                        <Typography variant="body2" color="textSecondary" align='justify'>
                            Aux professeurs: cela peut aussi etre un bon moyen pour evaluer les eleves via un quiz.
                            Cliquez pour plus de details. 
                        </Typography>
                        </CardContent>
                    </CardActionArea>
                </Card>  
            </Grid>
        </Link>
        </Grid>

        <p></p>
    </div>
)
}

export default ThreeBlocks;
