import React from "react";
import {Grid,Typography,Paper,Avatar} from '@material-ui/core';

const RenduPhilosophe = (props) => {
    return(

<Grid container direction="column" justify="center" alignItems="center" > 
    <Grid item style={{padding:10,marginTop: 50, marginLeft: 'auto',marginRight: 'auto'}}
        xs={11} sm={10} md={9} lg={8} xl={7} >
        <Grid container direction="row" >
            <Grid item xs={12} sm={6} md={6} lg={6} xl={6} >
                <Typography variant="h6" >
                    {props.responseDicts.Philosophe}
                </Typography>
                <p/>
                <Typography>
                    Siecle: {props.responseDicts.Siecle}
                </Typography>
                <p/>
                <Typography>
                    Nationalite: {props.responseDicts.Nationalite}
                </Typography>
            </Grid>
            <Grid container item xs={12} sm={6} md={6} lg={6} xl={6} justify="center" >
                <Avatar 
                    alt={props.responseDicts.Philosophe} 
                    src={props.responseDicts.Image}
                    style={{width: "180px", height: "180px"}}/>
            </Grid>
        </Grid>
        <p/>
        {props.responseDicts.Theme.map((ListeThemes,i) => {
        return(
        <>
        <Paper style={{padding: "20px"}}>
            <Typography > 
            Theme: {ListeThemes.map(themes => {return(themes +"/")})}
            </Typography>
            <p/>
            <Typography variant="body1" align="justify">   
            {props.responseDicts.Texte[i]}
            </Typography>
        </Paper>
        <p></p>
        </>
        )
        })} 
        <p></p>
    </Grid>

</Grid>
    
    )
};

export default RenduPhilosophe;









