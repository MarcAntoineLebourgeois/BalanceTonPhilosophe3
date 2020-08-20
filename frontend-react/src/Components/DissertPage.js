import React,{useEffect,useState} from "react";
import "../styles.css";
import {Grid} from "@material-ui/core";

import AppBarFront from "./AppBar"
import SelectionPanel from "./SelectionPanel"
import Rendu from "./Rendu"
import BottomBar from "./BottomBar"

const DissertPage = ({
	DarkModeOn,
	FuncShowRatingForm,
	showBienvenue,
	handleClick1,
    responseDicts, ChangeResponseDicts, ChangeMots,mots,
    form, setForm,
    setDissert, dissert,
    listeReplyTheme,ExempleThemes,
    listeReplyPhilosophe,ExemplePhilosophe,
	setShowRendu,setRoute,match,launch,setLaunch
}) => {
	  
	const [loading, setLoading] = useState(false);

  const handleSubmit = async () =>  {
    setLoading(true);
    const envoi1 = await fetch("https://api.balancetonphilosophe.com/SujetDissertation",{method:'POST',headers: {"Content-type":"application/json"},body: JSON.stringify(dissert)})
    const retour1 = await envoi1.json();
    setForm({...form, Theme:retour1[0].ListeTheme,Mots:retour1[1].ListeMots});
    setLaunch(true)
    }
  async function fetchdata(){
    const envoi2 = await fetch("https://api.balancetonphilosophe.com/form",{method:'POST',headers: {"Content-type":"application/json"},body: JSON.stringify(form)})
    const retour2 = await envoi2.json();
    ChangeResponseDicts(retour2[0].ListReply);
    ChangeMots(retour2[1].ListeMots)
    setLoading(false);
  }  
  
	console.log(match)
	useEffect(()=>{
		setDissert(match.params.dissert);
	},[])

	useEffect(()=>{
		handleSubmit()
	},[setDissert])


  if (launch){
    fetchdata();
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
            handleClick1={handleClick1} 
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

export default DissertPage;
