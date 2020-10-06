import React, {useState} from "react";
import "./styles.css";
import {CssBaseline} from "@material-ui/core";
import { BrowserRouter as Router, Route, Redirect,Switch} from "react-router-dom";
import HomePage from "./Components/HomePage"
import LoginPage from "./Components/LoginPage"
import SelectionPage from "./Components/SelectionPage"
import QuizPage from "./Components/Quiz Components/QuizPage"
import RatingPage from "./Components/RatingPage"
import PhilosophePage from "./Components/PhilosophePage"
import ThemePage from "./Components/ThemePage"
import DissertPage from "./Components/DissertPage"
import { createMuiTheme, MuiThemeProvider,responsiveFontSizes } from '@material-ui/core/styles';
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
let Maintheme = createMuiTheme(theme)
//Maintheme = responsiveFontSizes(Maintheme)
Maintheme.typography.h5 = {
	fontSize: "1.2rem",
	[Maintheme.breakpoints.up("sm")]: {
	  fontSize: "1.3rem"
	},
	[Maintheme.breakpoints.up("md")]: {
	  fontSize: "1.5rem"
	},
	[Maintheme.breakpoints.up("lg")]: {
	  fontSize: "1.7rem"
	}
  };


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

//Formulaire de rating
const [showRatingForm,setShowRatingForm] = useState(false)
const FuncShowRatingForm = () => {setShowRatingForm(!showRatingForm)};

console.log(responseDicts)

return (
<MuiThemeProvider theme={Maintheme} >
	<Router >
		<CssBaseline/>

		<Switch>
			<Route exact path="/">
				<Redirect to="/home" /> 
			</Route>
			
			<Route exact path='/home' render={() => ( <HomePage /> )}/>
			
			<Route exact path='/login' render={() => ( <LoginPage /> )}/>
			
			<Route exact path={["/dissertation", "/philosophe", "/theme","/quiz"]}
				render={() => (
				<SelectionPage 
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
						setForm={setForm}
					/>
					)}/>
				))}
		
			<Route exact path={'/theme/:theme/:philosophe'} render={() => (
					<PhilosophePage
						responseDicts={responseDicts}
						FuncShowRatingForm={FuncShowRatingForm}
						reinitForm={reinitForm} 
						form = {form}
						setForm={setForm}
					/>)}
					/>

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
				setRoute = {setRoute}
				mots={mots}
				responseDicts={responseDicts}
				launch={launch}
				setLaunch={setLaunch}
			/>
			)}/>
				
			<Route path='/quiz/:theme'render={(props)=>(
			<QuizPage
				{...props}
				FuncShowRatingForm={FuncShowRatingForm}
				reinitForm={reinitForm} 
				ChangeResponseDicts={ChangeResponseDicts} 
				handleSubmit = {handleSubmit}
				form = {form}
				setForm={setForm}
				ChangeMots={ChangeMots}
				setRoute = {setRoute}
				mots={mots}
				responseDicts={responseDicts}
				launch={launch}
				setLaunch={setLaunch}
				/>
			)}/>

			<Route exact path='/rating' render={()=> <RatingPage FuncShowRatingForm={FuncShowRatingForm}/> }/>

		</Switch>
	</Router> 
</MuiThemeProvider>
  );
}

export default App;
