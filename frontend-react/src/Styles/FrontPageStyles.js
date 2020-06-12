import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles(theme => ({
  fronttext1: {
    color: "white",
    position: "relative",
    margin: "auto",
  },
  fronttext2: {
    position: "relative",
    margin: "auto",
  },

  title: {
    flexGrow: 1,
  },
  buttons: {
    height: 50,
    Width: 100,
    margin: 5
  },
  buttons2: {
    height: 20,
    Width: 50,
    margin: 5
  },
  input: {color: "white"},
  cssLabel: {color : 'white'},
  cssOutlinedInput: {
    '&$notchedOutline': {
      borderColor: 'white !important'
    }
  },
  cssFocused: {},
  notchedOutline: {
    borderWidth: '1px',
    borderColor: 'white !important'
  },
  labelfocused: {
    "& label.Mui-focused": { 
      color: "white" 
    },
  }

}));
