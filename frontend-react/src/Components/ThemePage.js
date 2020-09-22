import React,{useEffect} from "react";
import "../styles.css";
import {Grid} from "@material-ui/core";

import AppBarFront from "./AppBar"
import SelectionPanel from "./SelectionPanel"
import Rendu from "./Rendu"
import BottomBar from "./BottomBar"

const ThemePage = (props) => {

  if (props.match.params.theme.includes(','))
       {var ListeThemeUrl = props.match.params.theme.split(',')}
  else {var ListeThemeUrl = [props.match.params.theme]}

	useEffect(()=>{
		props.setForm({...props.form,Theme: ListeThemeUrl});
		props.setLaunch(true);
	},[props.match.params.theme])

  if (props.launch){
    props.handleSubmit();
    props.setLaunch(false)
  }
  
	return(
        <>
          <Grid className="BackgroundPage" style={{padding:10, height: '60vh'}}>
            <AppBarFront {...props}/>
            <SelectionPanel {...props}/>
          </Grid>
          <Rendu {...props}/>
          <BottomBar/>
        </> 
		  )
}

export default ThemePage;
