import React, {useState} from "react";
import "./styles.css";
import {CssBaseline} from "@material-ui/core";
import { BrowserRouter as Router, Route, Redirect  } from "react-router-dom";

import HomePage from "./Components/HomePage"
import DissertsPage from "./Components/DissertsPage"
import ThemesPage from "./Components/ThemesPage"
import PhilosophesPage from "./Components/PhilosophesPage"
import RatingPage from "./Components/RatingPage"
import PhilosophePage from "./Components/PhilosophePage"
import ThemePage from "./Components/ThemePage"
import DissertPage from "./Components/DissertPage"

import listeReplyTheme from "./Data/ListeThemes"
import listeReplyPhilosophe from "./Data/ListePhilosophes"

import { createMuiTheme, MuiThemeProvider } from '@material-ui/core/styles';
//import { blue,yellow,red } from '@material-ui/core/colors';


const App = () => {
	
const [ theme, DarkModeOn ] = useDarkMode();
const Maintheme = createMuiTheme(theme)

const [launch,setLaunch] = useState(false);
const [,setRoute] = useState('')
const [responseDicts, setResponseDicts] = useState([]);
const [dissert, setDissert] = useState('');
const [form, setForm] = useState({Theme: [],Philosophe: [],Format: "Card",Mots:[]});
const [mots,setMots] = useState([])

const [showBienvenue,] = useState(true)
const [, setShowRendu] = useState(false)

const reinitForm = () => {
setForm({Theme: [],Philosophe: [],Format: "Card",Mots:[]});
setResponseDicts([]);
};

const ChangeResponseDicts = Response => {setResponseDicts(Response)};
const ChangeMots = mots => {setMots(mots)};

const handleSubmit = async () => {
	const envoi1 = await fetch("https://api.balancetonphilosophe.com/form",{method:'POST',headers: {"Content-type":"application/json"},body: JSON.stringify(form)})
	const retour1 = await envoi1.json();
	setResponseDicts(retour1[0].ListReply);
	setMots(retour1[1].ListeMots);
	setShowRendu(true)
}

/* Link to example */
const ExempleThemes = () => {setForm({...form,Theme:['morale','politique']})}
const ExemplePhilosophe = () => {setForm({...form,Philosophe:['Nicolas Machiavel']})}

//Formulaire de rating
const [showRatingForm,setShowRatingForm] = useState(false)
const FuncShowRatingForm = () => {
setShowRatingForm(!showRatingForm)
};



return (
<MuiThemeProvider theme={Maintheme} >
	<Router >
		<CssBaseline/>
		
		<Route exact path="/">
			<Redirect to="/home" /> 
		</Route>
		
		<Route exact path='/home' render={() => ( <HomePage/> )}/>
		
		<Route exact path='/dissertations'
			render={() => (
			<DissertsPage 
				DarkModeOn={DarkModeOn}
				FuncShowRatingForm={FuncShowRatingForm}
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
				mots={mots}
				responseDicts={responseDicts}
			/>
			)}/>
		
		<Route exact path='/themes'
			render={() => (
			<ThemesPage 
				DarkModeOn={DarkModeOn}
				FuncShowRatingForm={FuncShowRatingForm}
				showBienvenue={showBienvenue}
				reinitForm={reinitForm} 
				ChangeResponseDicts={ChangeResponseDicts} 
				handleSubmit = {handleSubmit}
				form = {form}
				setForm={setForm}
				ChangeMots={ChangeMots}
				ExempleThemes={ExempleThemes}
				ExemplePhilosophe={ExemplePhilosophe}
				setShowRendu={setShowRendu}
				listeReplyTheme={listeReplyTheme}
				listeReplyPhilosophe={listeReplyPhilosophe}
				setRoute = {setRoute}
				mots={mots}
				responseDicts={responseDicts}
			/>
			)}/>
		
		<Route exact path='/philosophes'
			render={(props) => (
			<PhilosophesPage 
			{...props}
				DarkModeOn={DarkModeOn}
				FuncShowRatingForm={FuncShowRatingForm}
				showBienvenue={showBienvenue}
				reinitForm={reinitForm} 
				ChangeResponseDicts={ChangeResponseDicts} 
				handleSubmit = {handleSubmit}
				form = {form}
				setForm={setForm}
				ChangeMots={ChangeMots}
				ExempleThemes={ExempleThemes}
				ExemplePhilosophe={ExemplePhilosophe}
				setShowRendu={setShowRendu}
				listeReplyTheme={listeReplyTheme}
				listeReplyPhilosophe={listeReplyPhilosophe}
				setRoute = {setRoute}
				mots={mots}
				responseDicts={responseDicts}
			/>
			)}/>
		
		<Route exact path='/philosophe/:philosophe'
			render={(props) => (
			<PhilosophePage 
				{...props}	
				DarkModeOn={DarkModeOn}
				FuncShowRatingForm={FuncShowRatingForm}
				showBienvenue={showBienvenue}
				reinitForm={reinitForm} 
				ChangeResponseDicts={ChangeResponseDicts} 
				handleSubmit = {handleSubmit}
				form = {form}
				setForm={setForm}
				ChangeMots={ChangeMots}
				ExempleThemes={ExempleThemes}
				ExemplePhilosophe={ExemplePhilosophe}
				setShowRendu={setShowRendu}
				listeReplyTheme={listeReplyTheme}
				listeReplyPhilosophe={listeReplyPhilosophe}
				setRoute = {setRoute}
				mots={mots}
				responseDicts={responseDicts}
				launch={launch}
				setLaunch={setLaunch}
			/>
			)}/>
		
		<Route exact path='/theme/:theme'
		render={(props) => (
		<ThemePage
			{...props}				
			DarkModeOn={DarkModeOn}
			FuncShowRatingForm={FuncShowRatingForm}
			showBienvenue={showBienvenue}
			reinitForm={reinitForm} 
			ChangeResponseDicts={ChangeResponseDicts} 
			handleSubmit = {handleSubmit}
			form = {form}
			setForm={setForm}
			ChangeMots={ChangeMots}
			ExempleThemes={ExempleThemes}
			ExemplePhilosophe={ExemplePhilosophe}
			setShowRendu={setShowRendu}
			listeReplyTheme={listeReplyTheme}
			listeReplyPhilosophe={listeReplyPhilosophe}
			setRoute = {setRoute}
			mots={mots}
			responseDicts={responseDicts}
			launch={launch}
			setLaunch={setLaunch}
		/>
		)}/>
		
		<Route exact path='/dissertation/:dissert'
		render={(props) => (
		<DissertPage 
			{...props}
			DarkModeOn={DarkModeOn}
			FuncShowRatingForm={FuncShowRatingForm}
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
			mots={mots}
			responseDicts={responseDicts}
			launch={launch}
			setLaunch={setLaunch}
		/>
		)}/>
			
		<Route exact path='/rating' render={()=> <RatingPage FuncShowRatingForm={FuncShowRatingForm}/> }/>	  

	</Router> 
</MuiThemeProvider>
  );
}

export default App;
