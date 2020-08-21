import React from "react";
import "../styles.css";
import {Grid} from "@material-ui/core";

import AppBarFront from "./AppBar"
import SelectionPanel from "./SelectionPanel"
import RatingForm from "./RatingForm"
import BottomBar from "./BottomBar"

const RatingPage = (props) => {

	return(
      <>
        <Grid className="BackgroundPage" style={{padding:10, height: '60vh'}}>      
          <AppBarFront {...props}/>
          <SelectionPanel {...props}/>
        </Grid>
      <RatingForm {...props}/>
      <BottomBar/>
      </>
		  )
}

export default RatingPage;