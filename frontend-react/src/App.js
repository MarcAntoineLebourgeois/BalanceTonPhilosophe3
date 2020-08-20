import React, {useState} from "react";
import "./styles.css";
import {Grid, CssBaseline} from "@material-ui/core";
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
import { blue,yellow,red } from '@material-ui/core/colors';

import ReactGA from 'react-ga';


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

function initializeReactGA() {
    ReactGA.initialize('UA-167865861-1');
    ReactGA.pageview('/home');
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
	
	const [ theme, DarkModeOn ] = useDarkMode();
    const Maintheme = createMuiTheme(theme)

	const [launch,setLaunch] = useState(false);
  const [route,setRoute] = useState('')
  const [responseDicts, setResponseDicts] = useState([]);
  const [dissert, setDissert] = useState('');
  const [form, setForm] = useState({Theme: [],Philosophe: [],Format: "Card",Mots:[]});
  const [mots,setMots] = useState([])
  const handleClick = () => {
    setForm({Theme: [],Philosophe: [],Format: "Card",Mots:[]})  
  };

  const [showBienvenue,] = useState(true)
  const [showRendu, setShowRendu] = useState(false)

  const handleClick1 = () => {
    setForm({Theme: [],Philosophe: [],Format: "Card",Mots:[]});
    setResponseDicts([]);
  };

  const ChangeResponseDicts = Response => {setResponseDicts(Response)};
  const ChangeMots = mots => {setMots(mots)};

  const handleSubmit = async (match) => {
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
					handleClick1={handleClick1} 
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
			   render={() => (
				<PhilosophesPage 
				   DarkModeOn={DarkModeOn}
					FuncShowRatingForm={FuncShowRatingForm}
					showBienvenue={showBienvenue}
					handleClick1={handleClick1} 
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
					handleClick1={handleClick1} 
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
					handleClick1={handleClick1} 
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

/*
{showRendu && <Rendu 
  responseDicts={responseDicts}
  mots={mots}
  form={form}
/>}
*/

/*

useref
  const screenEndRef = useRef(null);
  const scrollToBottom = () => {screenEndRef.current.scrollIntoView({ behavior: "smooth" });};
  useEffect(scrollToBottom, [showSujetInput,showThemeInput,showPhilosopheInput,handleSubmit]);
        ref={screenEndRef}  

      <ComboBoxTheme ChangeThemes={ChangeThemes}/>
      <div id="split-container">
        <div id="graph-container">
          <div id="graph" />
        </div>
      </div>
      <Graph />
*/
  /* ne pas lancer le useeffect au montage de lobjet
  const isInitialMount = useRef(true);
  useEffect(() => {
    if (isInitialMount.current) {
       isInitialMount.current = false;
    } else {

    };
  },[responseDicts]);

  //Carrousel
  {hide && (
  <Carrousel
    handleClick1={handleClick1}
    handleClick2={handleClick2}
    handleClick3={handleClick3}
    setDissert={setDissert}
    ChangeThemes={ChangeThemes}
    ChangePhilosophes={ChangePhilosophes}
    themes={themes}
    setthemes={setthemes}
    ExempleThemes2={ExempleThemes2}
    ExemplePhilosophe2={ExemplePhilosophe2}
  />
  )}
  // reimport the states of input philosophe in the parent component
  const [philosophes, setPhilosophes] = useState(form.Philosophe);
  useEffect(() => {ChangePhilosophes(philosophes);}, [philosophes]);
  const [listeReplyPhilosophe,setListeReplyPhilosophe] = useState([]);
  useEffect(() => {
    fetch("/ListPhilosophe",{method:'POST',headers: {"Content-type":"application/json"},body: JSON.stringify({"Theme":form.Theme})})
    .then(response => response.json().then(listeReplyPhilosophe => setListeReplyPhilosophe(listeReplyPhilosophe.ListePhilosopheReply)));
  }, [form.Theme]);

    // reimport the states of input theme in the parent component
  const [themes, setthemes] = useState(form.Theme);
  useEffect(() => {ChangeThemes(themes);}, [themes]);
  const [listeReplyTheme,setListeReplyTheme] = useState([]);
  useEffect(() => {
    fetch("/ListTheme",{method:'POST',headers: {"Content-type":"application/json"},body: JSON.stringify({"Philosophe":form.Philosophe})})
    .then(response => response.json().then(listeReplyTheme => setListeReplyTheme(listeReplyTheme.ListeThemeReply)));
  }, [form.Philosophe]);
*/

/*
  // reimport the states of input philosophe in the parent component
  const [philosophes, setPhilosophes] = useState(form.Philosophe);
  useEffect(() => {ChangePhilosophes(philosophes);}, [philosophes]);
  const [listeReplyPhilosophe,setListeReplyPhilosophe] = useState([]);
  useEffect(() => {
    fetch("/ListPhilosophe",{method:'POST',headers: {"Content-type":"application/json"},body: JSON.stringify({"Theme":form.Theme})})
    .then(response => response.json().then(listeReplyPhilosophe => setListeReplyPhilosophe(listeReplyPhilosophe.ListePhilosopheReply)));
  }, [form.Theme]);

  // reimport the states of input theme in the parent component
  const [themes, setthemes] = useState(form.Theme);
  useEffect(() => {ChangeThemes(themes);}, [themes]);
  const [listeReplyTheme,setListeReplyTheme] = useState([]);
  useEffect(() => {
    fetch("/ListTheme",{method:'POST',headers: {"Content-type":"application/json"},body: JSON.stringify({"Philosophe":form.Philosophe})})
    .then(response => response.json().then(listeReplyTheme => setListeReplyTheme(listeReplyTheme.ListeThemeReply)));
  }, [form.Philosophe]);

*/

/*
  //Caroussel
  const ExempleThemes2 = (x) => {
    handleClick2();
    setthemes([x]);
  }
  const ExemplePhilosophe2 = (x) => {
    handleClick3();
    setPhilosophes([x]);
  }
*/
