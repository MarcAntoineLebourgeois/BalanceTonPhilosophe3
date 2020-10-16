import React from "react";
import "../styles.css";
import {Grid} from "@material-ui/core";

import AppBarFront from "./AppBar"
import SelectionPanel from "./SelectionPanel"
import BottomBar from "./BottomBar"

const SelectionPage = (props) => {

	return(
    <>
      <Grid className="BackgroundPage" style={{padding:10}}>   
        <AppBarFront {...props}/>
        <SelectionPanel {...props}/>      
    </Grid>
    <div style={{height:'30vh'}}/>
    <BottomBar />
    </>
		  )
}

export default SelectionPage;
