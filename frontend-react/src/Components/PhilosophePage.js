import React,{useEffect} from "react";
import "../styles.css";
import {Grid} from "@material-ui/core";

import AppBarFront from "./AppBar"
import SelectionPanel from "./SelectionPanel"
import RenduPhilosophe from "./RenduPhilosophe"
import BottomBar from "./BottomBar"
//import ListDictsPhilosophers from "../Data/ListDictsPhilosophers"

const PhilosophePage = (props) => {

  if (props.responseDicts.length === 0) {return null}
  else{
	return(
      <>
        <Grid className="BackgroundPage" style={{padding:10}}>
          <AppBarFront {...props}/>
        </Grid>
          <SelectionPanel {...props}/>
        <RenduPhilosophe {...props} />
        <BottomBar/>
      </> 
      )
  }
}

export default PhilosophePage;
