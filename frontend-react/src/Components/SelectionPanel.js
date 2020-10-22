import React from "react";
import {Button,Grid, Chip, Typography} from "@material-ui/core";
import { emphasize, withStyles } from "@material-ui/core/styles";
import SujetDissertPanel from "./InputDissert";
import InputTheme from "./InputTheme";
import InputPhilosophe from "./InputPhilosophe";
import InputQuiz from "./Quiz Components/InputQuiz";
import { Link,Route } from "react-router-dom";

const SelectionPanel = (props) => {


  return (

  <Grid item container direction="row" justify="flex-start" alignItems="flex-start" >
			

    <Route path='/dissertation' render={()=><SujetDissertPanel {...props}/>}/>
    <Route path='/philosophe' render={()=><InputPhilosophe {...props}/>}/>
	  <Route path='/theme' render={()=><InputTheme {...props} />}/>
	  <Route path='/quiz' render={()=> <InputQuiz {...props} />} />

    <Route path='/home' component={()=>
        <Grid container item  direction="column" alignItems="center" >
          <p></p>
          <Typography variant="h5" style={{color: '#551A8B'}}> Bienvenue sur BalanceTonPhilosophe!</Typography>
          <p></p>
          <Grid item style={{width:"80%",textAlign:"center"}} >
          <Typography variant="subtitle1" > 
            Crée un compte pour profiter de toutes les nouvelles fonctionalites.
          </Typography>
	  <p/>  
         <Link to="/signup" style={{ textDecoration:'none'}}><Button variant="contained" color="primary">Sign Up</Button></Link> 
	    <p/>
	    </Grid>
        </Grid>
      }
      />

	</Grid>

  );
};

export default SelectionPanel;
