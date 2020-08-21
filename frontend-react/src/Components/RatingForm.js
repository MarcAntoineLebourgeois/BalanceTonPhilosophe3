import React,{useState} from "react";
import Rating from "@material-ui/lab/Rating";
import {Typography,Button,Icon,Grid,TextField} from "@material-ui/core";

const RatingForm = (props) => {
	
	const [formRating, setFormRating] = useState(
      { 
        username: "",
		mail: "",
		vitesse_chargementsite: 2,
		vitesse_queries: 2,
		format_frontpage: 2,
		format_ergonomie: 2,
		philo_qualite: 2,
		philo_quantite: 2,
		bugs: "",
		comment: ""
      });
	  
	const ChangeUsername = user => {setFormRating({ ...formRating, username: user });};
	const ChangeMail = mail => {setFormRating({ ...formRating, mail: mail });};
	const Changebugs = bugs => {setFormRating({ ...formRating, bugs: bugs });};
	const ChangeComment = comment => {setFormRating({ ...formRating, comment: comment });};
	
	const SendRatingForm = () => {
    fetch("https://api.balancetonphilosophe.com/add_rating",{method:'POST',headers: {"Content-type":"application/json"},body: JSON.stringify({"formRating":formRating})});
    props.FuncShowRatingForm();
	console.log(formRating);
  }

  return (
    <Grid container item direction='row' alignItems="center" justify="center" 
          xs={12} sm={12} md={10} lg={8} xl={8} style={{margin: "auto", padding: 5}}>

		<Grid container direction="column" justify="center" alignItems="center" style={{padding:10}}>
			<Typography component="legend">Username</Typography>
			<TextField size="small" multiline variant="outlined" value={formRating.username} onChange={e => ChangeUsername(e.target.value)}/>
			
			<Typography component="legend">Adresse mail (optionelle)</Typography>
			<TextField size="small" multiline variant="outlined" value={formRating.mail} onChange={e => ChangeMail(e.target.value)} />
			
			<Typography component="legend">vitesse_chargementsite</Typography>
			<Rating value={formRating.vitesse_chargementsite} onChange={(event, newValue) => {setFormRating({...formRating,vitesse_chargementsite: newValue})}} />
			
			<Typography component="legend">vitesse_queries</Typography>
			<Rating value={formRating.vitesse_queries} onChange={(event, newValue) => {setFormRating({...formRating,vitesse_queries: newValue})}} />

			<Typography component="legend">format_frontpage</Typography>
			<Rating value={formRating.format_frontpage} onChange={(event, newValue) => {setFormRating({...formRating,format_frontpage: newValue})}} />

			<Typography component="legend">format_ergonomie</Typography>
			<Rating value={formRating.format_ergonomie} onChange={(event, newValue) => {setFormRating({...formRating,format_ergonomie: newValue})}} />

			<Typography component="legend">philo_qualite</Typography>
			<Rating value={formRating.philo_qualite} onChange={(event, newValue) => {setFormRating({...formRating,philo_qualite: newValue})}} />
			
			<Typography component="legend">philo_quantite</Typography>
			<Rating value={formRating.philo_quantite} onChange={(event, newValue) => {setFormRating({...formRating,philo_quantite: newValue})}} />		
			
			<Typography component="legend">Reporter des bugs</Typography>
			<TextField size="small" multiline variant="outlined" value={formRating.bugs} onChange={e => Changebugs(e.target.value)} />
			
			<Typography component="legend">Commentaires</Typography>
			<TextField size="small" multiline variant="outlined" value={formRating.comment} onChange={e => ChangeComment(e.target.value)} />

			<Button variant="contained"  endIcon={<Icon>send</Icon>} size="small" onClick={SendRatingForm}>
			</Button>

		</Grid>
	</Grid>
  );
}

export default RatingForm;
