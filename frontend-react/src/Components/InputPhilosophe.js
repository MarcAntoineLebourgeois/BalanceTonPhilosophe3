import React from "react";
import {Input,InputLabel,MenuItem,FormControl,Select,Chip,Grid,Button,Typography,Icon,Link} from "@material-ui/core";
import { useStyles, MenuProps } from "../Styles/InputThemeStyles";
import { Link as Links } from "react-router-dom";
import ListDictsPhilosophers from "../Data/ListDictsPhilosophers"

const InputPhilosophe = (props,{match}) => {

  const classes = useStyles();
  const BTPapiSubmit = () => {
    //props.handleSubmit();
    //props.setRoute({match})
    {ListDictsPhilosophers.map(dict => {
      if (dict.Philosophe === props.form.Philosophe[0]) {
        props.ChangeResponseDicts([dict])
      }
    })}
    
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
          value={props.form.Philosophe}
          onChange={e => {
            props.setForm({...props.form,Philosophe:[e.target.value]});
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
          {props.listeReplyPhilosophe.map(name => (
            <MenuItem key={name} value={name} style={{ fontSize: 14,lineHeight:0.2 }}>
              {name}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
      <p></p>
	  <Links to={`philosophe/${props.form.Philosophe}`} style={{ textDecoration: 'none' }}>
		  <Button variant="contained" endIcon={<Icon>send</Icon>} onClick={BTPapiSubmit} size="small"> Balance ce philosophe </Button>
	  </Links>
    <p></p>
    <Typography variant="subtitle1" style={{fontSize: 14}}>Cliquer sur l'exemple suivant:</Typography>
    <Button  to="/" component={Link} onClick={props.ExemplePhilosophe} size="small"> Nicolas Machiavel </Button>

    </Grid>
  );
};

export default InputPhilosophe;
