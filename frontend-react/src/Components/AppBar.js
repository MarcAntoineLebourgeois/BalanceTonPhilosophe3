import React,{useState} from "react";
import { SwipeableDrawer,Divider, List, ListItem,Hidden, ListItemIcon, ListItemText, Grid,Toolbar,Typography,IconButton,MenuItem,Menu,Button } from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";
import { Link } from "react-router-dom";
import { Auth } from "aws-amplify";
import {emphasize,withStyles} from "@material-ui/core/styles";
import HowToRegIcon from "@material-ui/icons/HowToReg";
import LockOpenIcon from "@material-ui/icons/LockOpen";
import BookIcon from "@material-ui/icons/Book";

const AppBarFront = (props) => {

  const StyleButton = withStyles(theme => ({
	  root: {
		  backgroundColor:theme.palette.grey[100],
		  color:theme.palette.grey[800],
		  fontWeight:theme.typography.fontWeightRegular,
		  "&:hover,&:focus":{
			  backgroundColor: theme.palette.grey[300]},
		  "&:active":{
			  boxShadow: theme.shadows[1],
			  backgroundColor:emphasize(theme.palette.grey[300],0.12)},
		  margin:5,
		  height:30,
	  	  width:90}
  }))(Button);


  const [anchorEl, setAnchorEl] = useState(null);
  const [openDrawer, setOpenDrawer] = useState(false);
  const open = Boolean(anchorEl);
  const handleMenu = event => {
	  setOpenDrawer(true)
	  setAnchorEl(event.currentTarget)};
  const handleClose = () => {setAnchorEl(null)};
  const handleLogout = async () => {
    await Auth.signOut();
    props.setIsAuthenticated(false);
    props.setLaunchSnackBar(true)
    props.setSnackbarMessage("Logged out!")
  }
  return (
    <Grid>
        <Toolbar >
          <Grid container direction="column" justify="center" alignItems="flex-start" >

            <Typography variant="h5"  color="textPrimary">
              <Link to="/home" style={{ textDecoration: 'none', color: '#551A8B' }}>
                Balance Ton Philosophe 
              </Link>
            </Typography>
              
            <Typography color="textPrimary">
               pour trouver les sources a tes disserts !
            </Typography>
          </Grid>
 
	  <Hidden mdUp>
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

          <Link to="/rating" style={{ textDecoration: 'none' }}><MenuItem>Note moi</MenuItem></Link>
	  {props.isAuthenticated === false &&        
	  <>
		<Link to="/login" style={{ textDecoration:'none'}}><MenuItem>Login</MenuItem></Link>  
          	<Link to="/signup" style={{ textDecoration:'none'}}><MenuItem>Sign Up</MenuItem></Link>   
	  </>
	  }
	  {props.isAuthenticated === true &&
	  <>		  
	  	<Link to="/user_scores" style={{ textDecoration:'none'}}><MenuItem>Mes Scores</MenuItem></Link>  
	  	<Link to="/home" onClick={() => handleLogout()} style={{ textDecoration:'none'}}><MenuItem>Log Out</MenuItem></Link>  
	  </>
	  } 
		</Menu>
	</ Hidden> 
	<Hidden smDown>

          <Link to="/rating" style={{ textDecoration: 'none' }}><StyleButton>Note moi</StyleButton></Link>
	  {props.isAuthenticated === false &&        
	  <>
		<Link to="/login" style={{ textDecoration:'none'}}><StyleButton>Login</StyleButton></Link>  
          	<Link to="/signup" style={{ textDecoration:'none'}}><StyleButton>Sign Up</StyleButton></Link>   
	  </>
	  }
	  {props.isAuthenticated === true &&
	  <>		  
	  	<Link to="/user_scores" style={{ textDecoration:'none'}}><StyleButton>Mes Scores</StyleButton></Link>  
	  	<Link to="/home" onClick={() => handleLogout()} style={{ textDecoration:'none'}}><StyleButton>Log Out</StyleButton></Link>  
	  </>
	  } 

	</Hidden>  
        </Toolbar>
	<SwipeableDrawer
	  anchor={'right'}
	  open={openDrawer}
	  onClose={() => {setOpenDrawer(false)}}
	  >
		<List>
		<ListItem>
	  		<ListItemIcon><BookIcon /></ListItemIcon>
		        <Link to="/rating" style={{ textDecoration: 'none' }}><MenuItem>Note moi</MenuItem></Link>
	  	</ListItem>
	  {props.isAuthenticated === false &&        
	  <>
		<ListItem>
			<ListItemIcon><LockOpenIcon /></ListItemIcon>
			<Link to="/login" style={{ textDecoration:'none'}}><MenuItem>Login</MenuItem></Link>  
          	</ListItem>
		<ListItem>
			<ListItemIcon><HowToRegIcon /></ListItemIcon>
		  	<Link to="/signup" style={{ textDecoration:'none'}}><MenuItem>Sign Up</MenuItem></Link>   
		</ListItem>
	  </>
	  }
	  {props.isAuthenticated === true &&
	  <>		  
		<ListItem>

	  		<ListItemIcon><BookIcon /></ListItemIcon>
	  		<Link to="/user_scores" style={{ textDecoration:'none'}}><MenuItem>Mes Scores</MenuItem></Link>  
	  	</ListItem>
		<ListItem>

			<ListItemIcon><HowToRegIcon /></ListItemIcon>
			<Link to="/home" onClick={() => handleLogout()} style={{ textDecoration:'none'}}><MenuItem>Log Out</MenuItem></Link>  
		</ListItem>
	  </>
	  } 

	  	</List>
	</SwipeableDrawer>  

    </Grid>
  );
}

export default AppBarFront;
