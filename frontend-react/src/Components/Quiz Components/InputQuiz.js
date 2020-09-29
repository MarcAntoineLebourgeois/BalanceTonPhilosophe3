import React  from "react";
import {Input,InputLabel,MenuItem,FormControl,Select,Chip,Button,Link,Typography,Icon,Grid} from "@material-ui/core";
import { useStyles, MenuProps } from "../../Styles/InputThemeStyles";
import { Link as Links } from "react-router-dom";
import listQuiz from "../../Data/ListQuiz"

const InputQuiz = (props) => {

  const classes = useStyles();
  let ListeThemeQuiz = []
  {listQuiz.map(quiz => {
    ListeThemeQuiz.push(quiz.name) 
  })}

  const ExempleThemes = () => {props.setForm({...props.form,Theme:['science']})}
  return (
    <Grid container direction="column" justify="center" alignItems="center" className={classes.fronttext2}>
      <p></p>
      <Typography>Tous les quiz proviennent de <a href={'https://la-philosophie.com/'}>la-philosophie.com</a>, que les honneurs leur reviennent.</Typography>
      <FormControl className={classes.formControl} size="small">
        <InputLabel style={{ fontSize: 14 }}>Selectionner un theme pour le quiz</InputLabel>
        <Select
          value={props.form.Theme}
          onChange={e => {props.setForm({...props.form,Theme:e.target.value})}}
          input={<Input/>}
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
          {ListeThemeQuiz.map(name => (
            <MenuItem key={name} value={name} style={{ fontSize: 14,lineHeight:0.2 }}>
              {name}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
      <p></p>
	  <Links to={`/quiz/${props.form.Theme}`} style={{ textDecoration: 'none' }}>
		  <Button variant="contained" endIcon={<Icon>send</Icon>} size="small"> Commencer le quiz sur {props.form.Theme} </Button>
	  </Links>
    <p></p>
    <Button to="/" component={Link} onClick={ExempleThemes} size="small"> Exemple de Quiz : science </Button> 

    </Grid>
  );
};

export default InputQuiz;


