import React from "react";
import "../styles.css";
import {Grid} from "@material-ui/core";
import AppBarFront from "./AppBar"
import SelectionPanel from "./SelectionPanel"
import ThreeBlocks from "./ThreeBlocks"
import BottomBar from "./BottomBar"

const HomePage = (props) => {
	return(

	<>
    <Grid className="BackgroundPage" style={{padding:10, height: '50vh'}}>
      <AppBarFront {...props} />
      <SelectionPanel {...props}  />
    </Grid>
	  <ThreeBlocks {...props} />
	  <BottomBar/> 
	</>  
		  )
}

export default HomePage;








































