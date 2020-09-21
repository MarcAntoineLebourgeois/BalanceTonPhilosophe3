import React  from "react";
import {Input,InputLabel,MenuItem,FormControl,Select,Chip,Button,Link,Typography,Icon,Grid} from "@material-ui/core";
import { useStyles, MenuProps } from "../Styles/InputThemeStyles";
import { Link as Links } from "react-router-dom";

const InputTheme = (props) => {
  const classes = useStyles();

  return (
    <Grid container direction="column" justify="center" alignItems="center" className={classes.fronttext2}>
      <p></p>
      <p></p>
      <FormControl className={classes.formControl} size="small">
        <InputLabel style={{ fontSize: 14 }}>Selectionner un ou plusieurs themes</InputLabel>
        <Select
          multiple
          value={props.form.Theme}
          onChange={e => {props.setForm({...props.form,Theme:e.target.value})}}
          input={<Input/>}
          renderValue={selected => (
            <div className={classes.chips}>
              {selected.map(value => (
                <Chip
                  color="primary"
                  key={value} 
                  label={value}
                  className={classes.chip}
                  size="small"
                />
              ))}
            </div>
          )}
          MenuProps={MenuProps}
        >
          {props.listeReplyTheme.map(name => (
            <MenuItem key={name} value={name} style={{ fontSize: 14,lineHeight:0.2 }}>
              {name}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
      <p></p>
	  <Links to={`theme/${props.form.Theme}`} style={{ textDecoration: 'none' }}>
		  <Button variant="contained" endIcon={<Icon>send</Icon>} size="small"> Trouver les sources a mes themes </Button>
	  </Links>
      <p></p>
      <Typography variant="subtitle1" style={{fontSize: 14}}>Cliquer sur l'exemple suivant: (sujet Bac ES 2019)</Typography>
      <Button to="/" component={Link} onClick={props.ExempleThemes} size="small"> Morale et Politique </Button> 
    </Grid>
  );
};

export default InputTheme;


