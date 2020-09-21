import React, {useState} from "react";
import "./styles.css";
import {CssBaseline} from "@material-ui/core";
import { BrowserRouter as Router, Route, Redirect,Switch} from "react-router-dom";

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
import ListDictsPhilosophers from "./Data/ListDictsPhilosophers"


const Maintheme = {
    palette: {
        primary: {
            main: "#ea8f8f",
          },
        secondary: {
            main: '#52CDD1',
          },
        type: 'light'
    }
}

const useDarkMode = () => {
    const [theme,setTheme] = useState(Maintheme)
    const { palette : {type}} = theme;
    const DarkModeOn = () => {
        const updatedTheme = {
            ...theme,
            palette:{
                ...theme.palette,
                type: type === 'light' ? 'dark' : 'light'
            }
        }
        setTheme(updatedTheme)
    }
    return[ theme, DarkModeOn ]
}

const App = () => {
	
const [ theme ] = useDarkMode();
const Maintheme = createMuiTheme(theme)

const [launch,setLaunch] = useState(false);
const [,setRoute] = useState('')
const [responseDicts, setResponseDicts] = useState([]);
const [dissert, setDissert] = useState('');
const [form, setForm] = useState({Theme: [],Philosophe: [],Format: "Card",Mots:[]});
const [mots,setMots] = useState([])

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

		<Switch>
			<Route exact path="/">
				<Redirect to="/home" /> 
			</Route>
			
			<Route exact path='/home' render={() => ( <HomePage/> )}/>
			
			<Route exact path='/dissertations'
				render={() => (
				<DissertsPage 
					FuncShowRatingForm={FuncShowRatingForm}
					reinitForm={reinitForm} 
					handleSubmit = {handleSubmit}
					form = {form}
					ChangeMots={ChangeMots}
					setDissert={setDissert}
					dissert={dissert}
					setForm={setForm}
				/>
				)}/>
			
			<Route exact path='/themes'
				render={() => (
				<ThemesPage 
					FuncShowRatingForm={FuncShowRatingForm}
					reinitForm={reinitForm} 
					handleSubmit = {handleSubmit}
					form = {form}
					ExempleThemes={ExempleThemes}
					listeReplyTheme={listeReplyTheme}
					setRoute = {setRoute}
					setForm={setForm}
				/>
				)}/>
			
			<Route exact path='/philosophes'
				render={() => (
				<PhilosophesPage 
					FuncShowRatingForm={FuncShowRatingForm}
					reinitForm={reinitForm} 
					form = {form}
					ExemplePhilosophe={ExemplePhilosophe}
					listeReplyPhilosophe={listeReplyPhilosophe}
					setForm={setForm}
				/>
				)}/>
		
			{ListDictsPhilosophers.map((route, i) => (
				<Route 
					exact 
					key={i}
					path={route.route}
					render={() => (
					<PhilosophePage
						responseDicts={route}
						FuncShowRatingForm={FuncShowRatingForm}
						reinitForm={reinitForm} 
						form = {form}
						ExemplePhilosophe={ExemplePhilosophe}
						setForm={setForm}
					/>
					)}/>
				))}
		</Switch>


		<Route exact path='/theme/:theme'
		render={(props) => (
		<ThemePage
			{...props}
			FuncShowRatingForm={FuncShowRatingForm}
			reinitForm={reinitForm} 
			ChangeResponseDicts={ChangeResponseDicts} 
			handleSubmit = {handleSubmit}
			form = {form}
			setForm={setForm}
			ChangeMots={ChangeMots}
			ExempleThemes={ExempleThemes}
			listeReplyTheme={listeReplyTheme}
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
			FuncShowRatingForm={FuncShowRatingForm}
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
