import React,{useState,useEffect} from "react";
import {Input,InputLabel,MenuItem,FormControl,Select,Chip,Grid,Button,Typography,Icon,Link} from "@material-ui/core";
import { useStyles, MenuProps } from "../Styles/InputThemeStyles";
import { Link as Links,Route } from "react-router-dom";
import listeReplyPhilosophe from "../Data/ListePhilosophes"

const InputPhilosophe = ({ form, setForm,listeReplyPhilosophe,handleSubmit,ExemplePhilosophe,match,setRoute, props}) => {
  const classes = useStyles();
  const [launch,setLaunch] = useState(false)

/*
  useEffect(() => {
  setForm({...form,Philosophe: [match.params.philosophe]})
  setLaunch(true)
	}, [match.params.philosophe])

  if (launch){
    handleSubmit();
    setLaunch(false)
  }
*/
	const Check1 = listeReplyPhilosophe.includes(form.Philosophe[0])
	console.log(form.Philosophe[0])
	console.log(match)

	console.log(props)
	console.log(Check1)
	console.log(match.path + "/" + form.Philosophe)
	if (Check1 && match.path.substring(0, 13) === "/philosophes"){console.log("double check:ok")}

	useEffect(()=>{console.log("test reussi")},[match])


const handleSubmit2 = () => {
	handleSubmit();
	setRoute({match})
}

  return (
	<Grid container direction="column" justify="center" alignItems="center"  className={classes.fronttext2}>
      <p></p>
      <p></p>
      <FormControl className={classes.formControl} size="small">
        <InputLabel style={{ fontSize: 14 }}>
          Selectionner un ou plusieurs philosophes
        </InputLabel>
        <Select
          value={form.Philosophe}
          onChange={e => {
            setForm({...form,Philosophe:[e.target.value]});
          }}
          input={<Input />}
          renderValue={selected => (
            <div className={classes.chips}>
                <Chip
                  color="primary"
                  key={selected}
                  label={selected}
                  className={classes.chip}
                  size="small"
                />
            </div>
          )}
          MenuProps={MenuProps}
        >
          {listeReplyPhilosophe.map(name => (
            <MenuItem key={name} value={name} style={{ fontSize: 14,lineHeight:0.2 }}>
              {name}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
      <p></p>
	  <Links to={`philosophe/${form.Philosophe}`} style={{ textDecoration: 'none' }}>
		<Button variant="contained" endIcon={<Icon>send</Icon>} onClick={handleSubmit2} size="small"> Balance ce philosophe </Button>
	  </Links>
      <p></p>
      <Typography variant="subtitle1" style={{fontSize: 14}}>Cliquer sur l'exemple suivant:</Typography>
      <Button  to="/" component={Link} onClick={ExemplePhilosophe} size="small"> Nicolas Machiavel </Button>

    </Grid>
  );
};

export default InputPhilosophe;
/*
      <Route path={`${match.path}/:philosophe`} render={() => (
			<Rendu 
			  responseDicts={responseDicts}
              mots={mots}
              form={form}
			/>
			)}/>
*/