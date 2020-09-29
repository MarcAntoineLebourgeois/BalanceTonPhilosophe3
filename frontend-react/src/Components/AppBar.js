import React,{useState} from "react";
import { Grid,Toolbar,Typography,IconButton,MenuItem,Menu } from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";
import { Link } from "react-router-dom";


const AppBarFront = (props) => {

  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleMenu = event => {setAnchorEl(event.currentTarget)};
  const handleClose = () => {setAnchorEl(null)};

  return (
    <Grid>
        <Toolbar >
          <Grid container direction="column" justify="center" alignItems="flex-start" >

            <Typography variant="h5"  color="textPrimary">
              <Link to="/home" style={{ textDecoration: 'none' }}>
                Balance Ton Philosophe 
              </Link>
            </Typography>
              
            <Typography color="textPrimary">
               pour trouver les sources a tes disserts !
            </Typography>
          </Grid>
          
          <div>
            <IconButton
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleMenu}
              color="primary"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorEl}
              anchorOrigin={{ vertical: "top", horizontal: "right" }}
              keepMounted
              transformOrigin={{ vertical: "top", horizontal: "right" }}
              open={open}
              onClose={handleClose}
            >
              <MenuItem onClick={props.DarkModeOn}>Dark/Light Mode</MenuItem>
            <Link to="/rating" style={{ textDecoration: 'none' }}>
              <MenuItem onClick={props.FuncShowRatingForm}>Note moi!</MenuItem>
            </Link>
            </Menu>
          </div>
        </Toolbar>
    </Grid>
  );
}

export default AppBarFront;
