import React from "react";
import "../styles.css";
import {Grid} from "@material-ui/core";

import AppBarFront from "./AppBar"
import SelectionPanel from "./SelectionPanel"
import Rendu from "./Rendu"
import BottomBar from "./BottomBar"

const ThemesPage = (props) => {

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

export default ThemesPage;
