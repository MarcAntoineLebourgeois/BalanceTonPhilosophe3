import React,{useEffect} from "react";
import "../styles.css";
import {Grid} from "@material-ui/core";

import AppBarFront from "./AppBar"
import SelectionPanel from "./SelectionPanel"
import Rendu from "./Rendu"
import BottomBar from "./BottomBar"

const PhilosophesPage = ({
	DarkModeOn,
	FuncShowRatingForm,
	showBienvenue,
	reinitForm,handleSubmit,
    responseDicts, ChangeResponseDicts, ChangeMots,mots,
    form, setForm,
    setDissert, dissert,
    listeReplyTheme,ExempleThemes,
    listeReplyPhilosophe,ExemplePhilosophe,
	setShowRendu,setRoute,match,launch,setLaunch
}) => {
	  
	
  
	console.log(match)
	useEffect(()=>{
		setForm({...form,Philosophe: [match.params.philosophe]});
		setLaunch(true);
	},[])

  if (launch){
    handleSubmit();
    setLaunch(false)
  }
  
	return(
	<>
      <Grid className="BackgroundPage" style={{padding:10, height: '60vh'}}>
          
		  <AppBarFront 
            DarkModeOn={DarkModeOn}
            FuncShowRatingForm={FuncShowRatingForm}
          />
		  
          <SelectionPanel
            showBienvenue={showBienvenue}
            reinitForm={reinitForm} 
            ChangeResponseDicts={ChangeResponseDicts} 
            handleSubmit = {handleSubmit}
            form = {form}
            setForm={setForm}
            ChangeMots={ChangeMots}
            setDissert={setDissert}
            dissert={dissert}
            ExempleThemes={ExempleThemes}
            ExemplePhilosophe={ExemplePhilosophe}
            setShowRendu={setShowRendu}
            listeReplyTheme={listeReplyTheme}
            listeReplyPhilosophe={listeReplyPhilosophe}
			setRoute = {setRoute}
            />
			
      </Grid>

	 <Rendu             
		  responseDicts={responseDicts}
		  mots={mots}
		  form={form}
	  />

	  <BottomBar/>
	</> 
		  )
}

export default PhilosophesPage;
