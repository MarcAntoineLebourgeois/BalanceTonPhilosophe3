import React, {useState} from "react";
import "./styles.css";
import {CssBaseline} from "@material-ui/core";
import { BrowserRouter as Router, Route, Redirect,Switch} from "react-router-dom";
import HomePage from "./Components/HomePage"
import LoginPage from "./Components/LoginPage"
import SignUpPage from "./Components/SignUpPage"
import SelectionPage from "./Components/SelectionPage"
import QuizPage from "./Components/Quiz Components/QuizPage"
import RatingPage from "./Components/RatingPage"
import PhilosophePage from "./Components/PhilosophePage"
import ThemePage from "./Components/ThemePage"
import DissertPage from "./Components/DissertPage"
import UserQuizPage from "./Components/Quiz Components/UserQuizPage"
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
    },
width:"100%"
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

//Login Session
const [isAuthenticated,setIsAuthenticated] = useState(false)
const [user,setUser] = useState({user:"test"})
const [fields, handleFieldChange] = useState({
	"email":"",
	"password":"",
	"confirmPassqord":"",
	"confirmationCode":""
})

//SnackBar
const [snackbarMessage,setSnackbarMessage] = useState("")
const [launchSnackBar,setLaunchSnackBar] = useState(false)

return (
<MuiThemeProvider theme={Maintheme} >
	<Router >
		<CssBaseline/>

		<Switch>
			<Route exact path="/">
				<Redirect to="/home" /> 
			</Route>
			
			<Route exact path='/home' render={() => ( <HomePage 
				user={user}
				setUser={setUser}
				snackbarMessage={snackbarMessage}
				isAuthenticated={isAuthenticated}
				setIsAuthenticated={setIsAuthenticated}
				snackbarMessage={snackbarMessage}
				setSnackbarMessage={setSnackbarMessage}
				launchSnackBar={launchSnackBar}
				setLaunchSnackBar={setLaunchSnackBar}
				Maintheme={Maintheme}
				/> )}/>
			
			<Route exact path='/signup' render={() => ( 
				<SignUpPage
					user={user}
					setUser={setUser}
					fields={fields}
					handleFieldChange={handleFieldChange}
					isAuthenticated={isAuthenticated}
					Maintheme={Maintheme}
					setIsAuthenticated={setIsAuthenticated}
					setSnackbarMessage={setSnackbarMessage}
					launchSnackBar={launchSnackBar}
					setLaunchSnackBar={setLaunchSnackBar}
				/> )}/>
			
			<Route exact path='/user_scores' render={() => ( 
				<UserQuizPage 
				user={user} 
				setUser={setUser}
				setSnackbarMessage={setSnackbarMessage}
				launchSnackBar={launchSnackBar}
				setLaunchSnackBar={setLaunchSnackBar}
				/> )}/>
		
			<Route exact path='/login' render={() => ( 
				<LoginPage
					Maintheme={Maintheme}
					user={user}
					setUser={setUser}
					isAuthenticated={isAuthenticated}
					setIsAuthenticated={setIsAuthenticated}
					setSnackbarMessage={setSnackbarMessage}
					launchSnackBar={launchSnackBar}
					setLaunchSnackBar={setLaunchSnackBar}
				/> )}/>
			
			<Route exact path={["/dissertation", "/philosophe", "/theme","/quiz"]}
				render={() => (
				<SelectionPage
					user={user}
					setUser={setUser}
					reinitForm={reinitForm} 
					handleSubmit = {handleSubmit}
					form = {form}
					ChangeMots={ChangeMots}
					setDissert={setDissert}
					dissert={dissert}
					isAuthenticated={isAuthenticated}
					setIsAuthenticated={setIsAuthenticated}
					setForm={setForm}
					setSnackbarMessage={setSnackbarMessage}
					launchSnackBar={launchSnackBar}
					setLaunchSnackBar={setLaunchSnackBar}
				/>
				)}/>

			{ListDictsPhilosophers.map((route, i) => (
				<Route 
					exact 
					key={i}
					path={route.route}
					render={() => (
					<PhilosophePage

					isAuthenticated={isAuthenticated}
					setIsAuthenticated={setIsAuthenticated}
						setUser={setUser}
						user={user}
						responseDicts={route}
						reinitForm={reinitForm} 
						form = {form}
						setForm={setForm}
						setSnackbarMessage={setSnackbarMessage}
						launchSnackBar={launchSnackBar}
						setLaunchSnackBar={setLaunchSnackBar}
					/>
					)}/>
				))}
		
			<Route exact path={'/theme/:theme/:philosophe'} render={() => (
					<PhilosophePage
						user={user}
						setUser={setUser}
						responseDicts={responseDicts}
						reinitForm={reinitForm} 
						form = {form}
						setForm={setForm}
						setSnackbarMessage={setSnackbarMessage}
						isAuthenticated={isAuthenticated}
						setIsAuthenticated={setIsAuthenticated}
						launchSnackBar={launchSnackBar}
						setLaunchSnackBar={setLaunchSnackBar}
					/>)}
					/>

			<Route exact path='/theme/:theme'
			render={(props) => (
			<ThemePage
				{...props}
				user={user}
				setUser={setUser}
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
				setSnackbarMessage={setSnackbarMessage}
				isAuthenticated={isAuthenticated}
				setIsAuthenticated={setIsAuthenticated}
				launchSnackBar={launchSnackBar}
				setLaunchSnackBar={setLaunchSnackBar}
				/>
			)}/>
			
			<Route exact path='/dissertation/:dissert'
			render={(props) => (
			<DissertPage
				{...props}
				user={user}
				setUser={setUser}
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
				setSnackbarMessage={setSnackbarMessage}
				isAuthenticated={isAuthenticated}
				setIsAuthenticated={setIsAuthenticated}
				launchSnackBar={launchSnackBar}
				setLaunchSnackBar={setLaunchSnackBar}
			/>
			)}/>
				
			<Route path='/quiz/:theme'render={(props)=>(
			<QuizPage
				{...props}
				user={user}
				setUser={setUser}
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
				setSnackbarMessage={setSnackbarMessage}
				isAuthenticated={isAuthenticated}
				setIsAuthenticated={setIsAuthenticated}
				launchSnackBar={launchSnackBar}
				setLaunchSnackBar={setLaunchSnackBar}
				/>
			)}/>

			<Route exact path='/rating' render={()=> <RatingPage/> }/>

		</Switch>
	</Router> 
</MuiThemeProvider>
  );
}

export default App;
