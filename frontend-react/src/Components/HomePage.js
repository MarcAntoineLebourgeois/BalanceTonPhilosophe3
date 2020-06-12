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
	handleClick1,handleClick2,handleClick3,handleSubmit,
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
            handleClick1={handleClick1} 
            handleClick2={handleClick2} 
            handleClick3={handleClick3} 
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
		handleClick1={handleClick1} 
		handleClick2={handleClick2} 
		handleClick3={handleClick3}
	  />

	  <BottomBar/>
		</>  
		  )
}

export default HomePage;








































