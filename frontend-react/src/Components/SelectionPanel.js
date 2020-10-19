import React from "react";
import {Grid, Chip, Typography} from "@material-ui/core";
import { emphasize, withStyles } from "@material-ui/core/styles";
import SujetDissertPanel from "./InputDissert";
import InputTheme from "./InputTheme";
import InputPhilosophe from "./InputPhilosophe";
import InputQuiz from "./Quiz Components/InputQuiz";
import { Link,Route } from "react-router-dom";

const SelectionPanel = (props) => {

  const StyledButton = withStyles(theme => ({
        root: {
          backgroundColor: theme.palette.grey[100],
          color: theme.palette.grey[800],
          fontWeight: theme.typography.fontWeightRegular,
          "&:hover, &:focus": {
            backgroundColor: theme.palette.grey[300]
          },
          "&:active": {
            boxShadow: theme.shadows[1],
            backgroundColor: emphasize(theme.palette.grey[300], 0.12)
          },
          margin:5,
          height:30
        }
      }))(Chip);

  return (

  <Grid item container direction="row" justify="flex-start" alignItems="flex-start" >
			
		<Link to='/dissertation' style={{ textDecoration: 'none' }}>
			<StyledButton label="Disserts?" onClick={props.reinitForm} ></StyledButton>
		</Link>
		<Link to='/theme' style={{ textDecoration: 'none' }}>
			<StyledButton label="Themes?" onClick={props.reinitForm} ></StyledButton>
		</Link>
		<Link to='/philosophe' style={{ textDecoration: 'none' }}>
			<StyledButton label="Philosophes?" onClick={props.reinitForm} ></StyledButton>
		</Link>
		<Link to='/quiz' style={{ textDecoration: 'none' }}>
			<StyledButton label="Quiz" onClick={props.reinitForm} ></StyledButton>
		</Link>		

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
          </Grid>
        </Grid>
      }
      />

	</Grid>

  );
};

export default SelectionPanel;
