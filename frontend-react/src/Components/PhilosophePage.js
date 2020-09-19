import React,{useEffect} from "react";
import "../styles.css";
import {Grid} from "@material-ui/core";

import AppBarFront from "./AppBar"
import SelectionPanel from "./SelectionPanel"
import Rendu from "./Rendu"
import BottomBar from "./BottomBar"

const PhilosophePage = (props) => {
	/*
	useEffect(()=>{
		props.setForm({...props.form,Philosophe: [props.match.params.philosophe]});
		props.setLaunch(true);
	},[])

  if (props.launch){
    props.handleSubmit();
    props.setLaunch(false)
  }
  */
 
	return(
      <>
        <Grid className="BackgroundPage" style={{padding:10, height: '60vh'}}>
          <AppBarFront {...props}/>
          <SelectionPanel {...props}/>
        </Grid>
        <Rendu {...props} />
        <BottomBar/>
      </> 
		  )
}

export default PhilosophePage;
