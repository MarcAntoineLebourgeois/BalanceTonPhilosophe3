import React from "react";
import "../styles.css";
import {Grid} from "@material-ui/core";

import AppBarFront from "./AppBar"
import SelectionPanel from "./SelectionPanel"
import ThreeBlocks from "./ThreeBlocks"
import BottomBar from "./BottomBar"

const HomePage = ({
	DarkModeOn,
	FuncShowRatingForm,
	showBienvenue,
	reinitForm,handleSubmit,
    ChangeResponseDicts, ChangeMots,
    form, setForm,
    setDissert, dissert,
    listeReplyTheme,ExempleThemes,
    listeReplyPhilosophe,ExemplePhilosophe,
	setShowRendu,setRoute
}) => {

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

	 <ThreeBlocks             
		reinitForm={reinitForm} 
	  />

	  <BottomBar/>
		</>  
		  )
}

export default HomePage;








































