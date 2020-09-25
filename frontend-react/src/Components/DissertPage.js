import React,{useEffect,useState} from "react";
import "../styles.css";
import {Grid} from "@material-ui/core";

import AppBarFront from "./AppBar"
import SelectionPanel from "./SelectionPanel"
import Rendu from "./Rendu"
import BottomBar from "./BottomBar"

const DissertPage = (props) => {
	  


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

	useEffect(()=>{
    handleSubmit()
	},[props.setDissert])


  if (props.launch){
    fetchdata();
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

export default DissertPage;
