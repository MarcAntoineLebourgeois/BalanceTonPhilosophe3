import React from "react";
import {Grid, Chip, Typography} from "@material-ui/core";
import { emphasize, withStyles } from "@material-ui/core/styles";
import { useStyles } from "../Styles/FrontPageStyles";
import SujetDissertPanel from "./SujetDissertPanel";
import InputTheme from "./InputTheme";
import InputPhilosophe from "./InputPhilosophe";
import { Link,Route } from "react-router-dom";

const SelectionPanel = ({    
    reinitForm,
    ChangeResponseDicts, 
    handleSubmit,
    form, setForm,
    ChangeMots,
    setDissert, dissert,
    listeReplyTheme,ExempleThemes,
    listeReplyPhilosophe,ExemplePhilosophe,
	setShowRendu,setRoute
  }) => {

    const classes = useStyles();
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
			
		<Link to='/dissertations' style={{ textDecoration: 'none' }}>
			<StyledButton label="Disserts?" onClick={reinitForm} ></StyledButton>
		</Link>
		<Link to='/themes' style={{ textDecoration: 'none' }}>
			<StyledButton label="Themes?" onClick={reinitForm} ></StyledButton>
		</Link>
		<Link to='/philosophes' style={{ textDecoration: 'none' }}>
			<StyledButton label="Philosophes?" onClick={reinitForm} ></StyledButton>
		</Link>
			
      <Route path='/dissertations' render={props=>
            <SujetDissertPanel 
              {...props}
			  ChangeMots={ChangeMots} 
              ChangeResponseDicts={ChangeResponseDicts} 
              setDissert={setDissert}
              dissert={dissert}
              setShowRendu={setShowRendu}
              form={form}
              setForm={setForm}
            />

        }
		/>
		
	  <Route path='/themes' render={props=>
            <InputTheme 
			  {...props}
              form={form}
              setForm={setForm}
              listeReplyTheme={listeReplyTheme}
              ExempleThemes={ExempleThemes}
              handleSubmit={handleSubmit}
              setShowRendu={setShowRendu}
			  setRoute={setRoute}
            />

        }
		/>
			
		<Route path='/philosophes' render={props=>	
			<InputPhilosophe 
			  {...props}
			  form={form}
			  setForm={setForm}
			  listeReplyPhilosophe={listeReplyPhilosophe}
			  ExemplePhilosophe={ExemplePhilosophe}
			  handleSubmit={handleSubmit} 
			  setShowRendu={setShowRendu}
			  setRoute = {setRoute}
			/>
		}
		/>
			

        <Route path='/home' component={()=>
            <Grid container direction="column" justify="center" alignItems="center"  className={classes.fronttext2}>
              <p></p>
              <p></p>
              <Typography variant="h5"> Bienvenue sur BalanceTonPhilosophe!</Typography>
              <p></p>
              <Typography variant="subtitle1" > 
                BTP est un outil pour trouver les sources a tes dissertations.
              </Typography>
              <Typography variant="subtitle1" > 
                Grace a sa BDD et son IA, tu as plusieurs centaines de combinaisons a disposition.
              </Typography>
              <Typography variant="subtitle1" > 
                De quoi etre inspire pour sortir la bonne punchline pour appuyer tes arguments.
              </Typography>
            </Grid>
        }
		/>

	</Grid>

  );
};

export default SelectionPanel;
