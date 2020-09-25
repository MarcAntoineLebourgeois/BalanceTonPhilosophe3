import React from "react";
import "../styles.css";
import {Grid} from "@material-ui/core";


const BottomBar = () => {
	
	return(
      <Grid className="BackgroundBottom" style={{padding:15,position: 'fixed', bottom: 0, width: '100%'}}>
        <Grid container item direction='row' alignItems="center" justify="space-around" 
          xs={12} sm={12} md={10} lg={8} xl={8} style={{margin: "auto"}}>

            <Grid container item style={{width: '300px', height: '20vh' }}>
              <Grid className="BackgroundBottom2" item style={{width:"100%", height:"90%", margin: "auto"}}>
                contact : balancetonphilosophe@gmail.com
              </Grid>
            </Grid>
            <Grid container item style={{width: '300px', height: '20vh' }}>
              <Grid className="BackgroundBottom2" item style={{width:"100%", height:"90%", margin: "auto"}}>
                projet opensource
              </Grid>
            </Grid>
            <Grid container item style={{width: '300px', height: '20vh' }}>
              <Grid className="BackgroundBottom2" item style={{width:"100%", height:"90%", margin: "auto"}}>
                N'hesitez a nous rejoindre!
              </Grid>
            </Grid>
            
        </Grid>
      </Grid>
	)
}

export default BottomBar;