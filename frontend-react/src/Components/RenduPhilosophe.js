import React from "react";
import {Grid,Typography,Paper} from '@material-ui/core';

const RenduPhilosophe = (props) => {

    return(

<Grid container direction="column" justify="center" alignItems="center" > 
    <Grid item style={{padding:10,marginTop: 50, marginLeft: 'auto',marginRight: 'auto'}}
        xs={11} sm={10} md={9} lg={8} xl={7} >
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
        <p/>
        {props.responseDicts.Theme.map((ListeThemes,i) => {
        return(
        <>
        <Paper style={{padding: "20px"}}>
            <p/>
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









