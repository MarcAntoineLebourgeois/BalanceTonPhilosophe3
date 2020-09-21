import React from "react";
import "../styles.css";
import {Grid} from "@material-ui/core";

import AppBarFront from "./AppBar"
import SelectionPanel from "./SelectionPanel"
import BottomBar from "./BottomBar"

const DissertsPage = (props) => {

	return(
    <>
      <Grid className="BackgroundPage" style={{padding:10, height: '60vh'}}>   
        <AppBarFront {...props}/>
        <SelectionPanel {...props}/>
      </Grid>
    <BottomBar/>
    </>
		  )
}

export default DissertsPage;
