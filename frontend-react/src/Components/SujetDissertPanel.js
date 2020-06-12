 import React,{useState, useEffect} from "react";
import { Grid, Typography, Button, TextField, Link,Icon } from "@material-ui/core";
import "../styles.css";
import { Link as Links,Route } from "react-router-dom";


const SujetDissertPanel = ({ChangeResponseDicts,ChangeMots,setDissert,dissert,form, setForm, props}) => {


  /* Link to example */
  const preventDefault = event => {
    event.preventDefault();
    setDissert('La morale est elle la meilleure des politiques ?');
  }

  return (

    <Grid container direction="column" justify="center" alignItems="center" >
      <p></p>
      <p></p>
        <TextField 
          value={dissert} 
          onChange={e => setDissert(e.target.value)} 
          placeholder="Ecrire ici le sujet de dissertation" 
          style={{width: 300}} 
          variant="outlined"           
          label="Ecrire ici le sujet de dissertation"
          multiline
          size="small"
        />
        <p></p>
		<Links to={`dissertation/${dissert}`} style={{ textDecoration: 'none' }}>
			<Button 
				variant="contained" 
				
				endIcon={<Icon>send</Icon>} 
				size="small">

			</Button>
		</Links>
        <p></p>
        <Typography variant="subtitle1" style={{fontSize: 14}}>
            Cliquer sur l'exemple suivant: (sujet Bac ES 2019)
        </Typography>
		<Links to={`dissertation/${dissert}`} style={{ textDecoration: 'none' }}>
			<Button variant="text" to="/" component={Link} onClick={preventDefault} size="small" style={{fontSize: 12}} > 
				  La morale est elle la meilleure des politiques ? 
			</Button> 
		</Links>
      </Grid>

  );
};

export default SujetDissertPanel;

/*
				//disabled={loading} 
				//{loading && <i className="fa fa-refresh fa-spin"/>}
				//{loading && <span>notre IA est en train de chercher</span>}
				//{!loading && <span>Trouver les sources a ma dissert</span>}
				*/