import React from "react";
import Cards from "./Card";
import {Grid,Typography} from "@material-ui/core";

const Rendu = ({responseDicts,mots,form}) => {
        if (responseDicts.length === 0) {return null}
    else if ((typeof responseDicts.test != "undefined" && mots.length === 0) || (responseDicts === "nothing")){return(
      <Typography style={{padding: 5 }} variant="h6">
        Desole, notre IA n'a rien trouve concernant ces {form.Theme.length} themes. Tu devrais tenter autre chose.
      </Typography>
      )}  
    else if (typeof responseDicts.test != "undefined" && mots.length > 0){return(
      <Grid container direction="column" justify="center" alignItems="center">
        <Typography style={{padding: 5 }} variant="h6"> 
          L'IA a trouve les resultats suivants : 
        </Typography>
        {responseDicts.test.map(themes => {
          var i = responseDicts.test.indexOf(themes);
          return(
              <Typography style={{padding: 5}} display="inline" variant="substitle1">Mot: {mots[i]} => Theme: {themes}</Typography>
          )})}
        <Typography style={{padding: 5 }} variant="h6"> 
          Rien dans la base de donnees sur  ces {responseDicts.test.length} themes. Tu devrais chercher manuellement via le bouton "Themes?"
        </Typography>
      </Grid>
      )}    
    //else if (form.Format === "Table") {return <Grid><DataTable responseDicts={responseDicts} form={form}/></Grid>}
    //else if (form.Format === "Texte") {return <Grid><TextGrid responseDicts={responseDicts} form={form}/></Grid>}
    //else if (form.Format === "Panel") {return <Grid><Panel responseDicts={responseDicts} form={form}/></Grid>}
    else if (form.Format === "Card") {return (
        <Grid container direction="column" justify="center" alignItems="center">
            <Typography style={{padding: 5 }} variant="h6">L'IA a trouve les resultats suivants : </Typography>
          {form.Theme.map(themes => {          
            var i = form.Theme.indexOf(themes);
              return(
                  <Typography style={{padding: 5}} display="inline" variant="substitle1">Mot: {mots[i]} => Theme: {themes}</Typography>
              )})}
          <Cards responseDicts={responseDicts} form={form}/>
        </Grid>
    )};
  };

export default Rendu;