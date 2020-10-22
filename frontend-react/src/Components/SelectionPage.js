import React from "react";
import "../styles.css";
import {Grid} from "@material-ui/core";

import AppBarFront from "./AppBar"
import SelectionPanel from "./SelectionPanel"
import BottomBar from "./BottomBar"
import ThreeBlocks from "./ThreeBlocks";

const SelectionPage = (props) => {

	return(
    <>
      <Grid className="BackgroundPage" style={{padding:10}}>   
        <AppBarFront {...props}/>
    </Grid>
        <SelectionPanel {...props}/>      
    <ThreeBlocks {...props}/>
    <BottomBar />
    </>
		  )
}

export default SelectionPage;
