import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles(theme => ({
  formControl: {
    minWidth: 300,
    maxWidth: 300
  },
  chips: {
    display: "flex",
    flexWrap: "wrap"
  },
  chip: {
    margin: 1
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: "center",
  },
  fronttext: {
    padding: theme.spacing(2),
    margin: "auto",
    maxWidth: 500
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
const ITEM_HEIGHT = 250;
const ITEM_PADDING_TOP = 8;
export const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 2.5 + ITEM_PADDING_TOP,
      width: 100
    }
  }
};
