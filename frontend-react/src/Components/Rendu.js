import React from "react";
import Cards from "./Card";
import {Grid,Typography} from "@material-ui/core";

const Rendu = (props) => {
        if (props.responseDicts.length === 0) {return null}
    else if ((typeof props.responseDicts.test != "undefined" && props.mots.length === 0) || (props.responseDicts === "nothing")){return(
      <Typography style={{padding: 5 }} variant="h6">
        Desole, notre IA n'a rien trouve concernant ces {props.form.Theme.length} themes. Tu devrais tenter autre chose.
      </Typography>
      )}  
    else if (typeof props.responseDicts.test != "undefined" && props.mots.length > 0){return(
      <Grid container direction="column" justify="center" alignItems="center">
        <Typography style={{padding: 5 }} variant="h6"> 
          L'IA a trouve les resultats suivants : 
        </Typography>
        {props.responseDicts.test.map(themes => {
          var i = props.responseDicts.test.indexOf(themes);
          return(
              <Typography style={{padding: 5}} display="inline" variant="substitle1">Mot: {props.mots[i]} => Theme: {themes}</Typography>
          )})}
        <Typography style={{padding: 5 }} variant="h6"> 
          Rien dans la base de donnees sur  ces {props.responseDicts.test.length} themes. Tu devrais chercher manuellement via le bouton "Themes?"
        </Typography>
      </Grid>
      )}    
    else if (props.form.Format === "Card") {return (
        <Grid container direction="column" justify="center" alignItems="center">
            <Typography style={{padding: 5 }} variant="h6">L'IA a trouve les resultats suivants : </Typography>
          {props.form.Theme.map(themes => {          
            var i = props.form.Theme.indexOf(themes);
              return(
                  <Typography style={{padding: 5}} display="inline" variant="substitle1">Mot: {props.mots[i]} => Theme: {themes}</Typography>
              )})}
          <Cards {...props}/>
        </Grid>
    )};
  };

export default Rendu;