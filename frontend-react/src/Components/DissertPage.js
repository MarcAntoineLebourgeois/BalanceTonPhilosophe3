import React,{useEffect,useState} from "react";
import "../styles.css";
import {Grid} from "@material-ui/core";

import AppBarFront from "./AppBar"
import SelectionPanel from "./SelectionPanel"
import Rendu from "./Rendu"
import BottomBar from "./BottomBar"

import { usePromiseTracker } from "react-promise-tracker";
import { trackPromise } from 'react-promise-tracker';
import Loader from 'react-loader-spinner';

const DissertPage = (props) => {
	  
  const LoadingIndicator = props => {
    const { promiseInProgress } = usePromiseTracker();
    return (
      promiseInProgress &&  
      <div style={{ width: "100%", height: "100", display: "flex", justifyContent: "center", alignItems: "center"}}>
        <Loader type="ThreeDots" color="#ea8f8f" height="100" width="100" />
      </div>
  );  
  }

useEffect(()=>{
    trackPromise(handleSubmit());
	},[props.setDissert])

const handleSubmit = async () =>  {

    const envoi1 = await fetch("https://api.balancetonphilosophe.com/SujetDissertation",{method:'POST',headers: {"Content-type":"application/json"},body: JSON.stringify(props.match.params.dissert)})
    const retour1 = await envoi1.json();
    props.setForm({...props.form, Theme:retour1[0].ListeTheme,Mots:retour1[1].ListeMots});
    props.setLaunch(true)

    }
  async function fetchdata(){
    const envoi2 = await fetch("https://api.balancetonphilosophe.com/form",{method:'POST',headers: {"Content-type":"application/json"},body: JSON.stringify(props.form)})
    const retour2 = await envoi2.json();
    props.ChangeResponseDicts(retour2[0].ListReply);
    props.ChangeMots(retour2[1].ListeMots)
  }  
  
	useEffect(()=>{
		props.setDissert(props.match.params.dissert);
	},[])

  if (props.launch){
    trackPromise(fetchdata());
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

export default DissertPage;
