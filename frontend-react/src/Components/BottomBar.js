import React from "react";
import "../styles.css";
import {Grid, Typography} from "@material-ui/core";


const BottomBar = () => {
	
	return(
      <Grid className="BackgroundBottom" 
        style={{padding:15, position: 'relative', bottom: 0, width: '100%', height: '20%'}}>
        <Grid container item direction='row' alignItems="center" justify="space-around" 
          xs={12} sm={12} md={10} lg={8} xl={8} style={{margin: "auto"}}>

            <Grid container item style={{width: '300px', height: '15vh' }} >
              <Grid className="BackgroundBottom2" container style={{width:"100%", height:"90%", margin: "auto"}} alignItems="center" justify="center">
                <Typography>Projet Opensource</Typography>
              </Grid>
            </Grid>
            <Grid container item style={{width: '300px', height: '15vh' }}>
              <Grid className="BackgroundBottom2" container style={{width:"100%", height:"90%", margin: "auto"}} alignItems="center" justify="center" >
                <Typography>contact :</Typography>
                <Typography>balancetonphilosophe@gmail.com </Typography>
              </Grid>
            </Grid>
            <Grid container item style={{width: '300px', height: '15vh' }}>
              <Grid className="BackgroundBottom2" container style={{width:"100%", height:"90%", margin: "auto"}} alignItems="center" justify="center" >
                <Typography>N'hesitez a rejoindre le projet!</Typography>
              </Grid>
            </Grid>
            
        </Grid>
      </Grid>
	)
}

export default BottomBar;