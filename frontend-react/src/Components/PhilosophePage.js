import React,{useEffect} from "react";
import "../styles.css";
import {Grid} from "@material-ui/core";

import AppBarFront from "./AppBar"
import SelectionPanel from "./SelectionPanel"
import RenduPhilosophe from "./RenduPhilosophe"
import BottomBar from "./BottomBar"
import ListDictsPhilosophers from "../Data/ListDictsPhilosophers"

const PhilosophePage = (props) => {

	useEffect(()=>{
		props.setForm({...props.form,Philosophe: [props.match.params.philosophe]});
		props.setLaunch(true);
	},[])

  if (props.launch){
    {ListDictsPhilosophers.map(dict => {
      if (dict.Philosophe === props.form.Philosophe[0]) {
        props.ChangeResponseDicts(dict);
      }
    })}
    props.setLaunch(false)
  }


  if (props.responseDicts.length === 0) {return null}
  else{
	return(
      <>
        <Grid className="BackgroundPage" style={{padding:10, height: '60vh'}}>
          <AppBarFront {...props}/>
          <SelectionPanel {...props}/>
        </Grid>
        <RenduPhilosophe {...props} />
        <BottomBar/>
      </> 
      )
  }
}

export default PhilosophePage;
