import React from "react";
import "../styles.css";
import {Grid} from "@material-ui/core";
import AppBarFront from "./AppBar"
import SelectionPanel from "./SelectionPanel"
import ThreeBlocks from "./ThreeBlocks"
import BottomBar from "./BottomBar"
import SnackBar from "./snackBar";

const HomePage = (props) => {

	return(

	<>
    <Grid className="BackgroundPage" style={{padding:10, height: '50vh'}}>
      <AppBarFront {...props} />
      <SelectionPanel {...props}  />
    </Grid>
	{props.launchSnackBar? <SnackBar {...props} contentText={props.snackbarMessage} open={props.launchSnackBar} setOpen={props.setLaunchSnackBar}/> :<></>}
	  <ThreeBlocks {...props} />
	  <BottomBar/> 
	</>  
		  )
}

export default HomePage;








































