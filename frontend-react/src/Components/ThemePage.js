import React,{useEffect} from "react";
import "../styles.css";
import {Grid} from "@material-ui/core";

import AppBarFront from "./AppBar"
import SelectionPanel from "./SelectionPanel"
import Rendu from "./Rendu"
import BottomBar from "./BottomBar"

import { usePromiseTracker } from "react-promise-tracker";
import { trackPromise } from 'react-promise-tracker';
import Loader from 'react-loader-spinner';

const ThemePage = (props) => {

  const LoadingIndicator = props => {
    const { promiseInProgress } = usePromiseTracker();
    return (
      promiseInProgress &&  
      <div style={{ width: "100%", height: "100", display: "flex", justifyContent: "center", alignItems: "center"}}>
        <Loader type="ThreeDots" color="#ea8f8f" height="100" width="100" />
      </div>
  );  
  }


  if (props.match.params.theme.includes(','))
       {var ListeThemeUrl = props.match.params.theme.split(',')}
  else {var ListeThemeUrl = [props.match.params.theme]}

	useEffect(()=>{
		props.setForm({...props.form,Theme: ListeThemeUrl});
		props.setLaunch(true);
	},[props.match.params.theme])

  if (props.launch){
    trackPromise(props.handleSubmit());
    props.setLaunch(false)
  }
  
	return(
        <>
          <Grid className="BackgroundPage" style={{padding:10}}>
            <AppBarFront {...props}/>
          </Grid>
            <SelectionPanel {...props}/>
          <LoadingIndicator/>
          <Rendu {...props}/>
          <BottomBar/>
        </> 
		  )
}

export default ThemePage;
