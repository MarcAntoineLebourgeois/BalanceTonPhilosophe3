import React,{useState} from "react";
import { Chip, SwipeableDrawer,Divider, List, ListItem,Hidden, ListItemIcon, ListItemText, Grid,Toolbar,Typography,IconButton,MenuItem,Menu,Button } from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";
import { Link } from "react-router-dom";
import { Auth } from "aws-amplify";
import {emphasize,withStyles} from "@material-ui/core/styles";

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
  }))(Chip);

  const StyledButton = withStyles(theme => ({
	  root: {
		  backgroundColor: theme.palette.grey[100],
		  color: theme.palette.grey[800],
		  fontWeight: theme.typography.fontWeightRegular,
		  "&:hover, &:focus": {
			  backgroundColor: theme.palette.grey[300]
		  },
		  "&:active": {
			  boxShadow: theme.shadows[1],
			  backgroundColor: emphasize(theme.palette.grey[300], 0.12)
		  },
		  margin:5,
		  height:30
	  }
  }))(Chip);

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


<Grid item container direction="row" justify="flex-start" alignItems="flex-start" >
	                          
	  <Link to='/dissertation' style={{ textDecoration: 'none' }}>
	  	<StyledButton label="Disserts" onClick={props.reinitForm}/ >
	  </Link>
	  <Link to='/theme' style={{ textDecoration: 'none' }}>
	  	<StyledButton label="Themes" onClick={props.reinitForm} />
	  </Link>
	  <Link to='/philosophe' style={{ textDecoration: 'none' }}>
	  	<StyledButton label="Philosophes" onClick={props.reinitForm}/ >
	  </Link>
	  <Link to='/quiz' style={{ textDecoration: 'none' }}>
	  	<StyledButton label="Quiz" onClick={props.reinitForm}/ >
	  </Link>

</Grid>


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
</ Hidden> 
<Hidden smDown>

  <Link to="/rating" style={{ textDecoration: 'none' }}><StyleButton label="Ton avis sur le site"/></Link>
  {props.isAuthenticated === false &&        
  <>
	<Link to="/login" style={{ textDecoration:'none'}}><StyleButton label="LogIn"/></Link>  
	<Link to="/signup" style={{ textDecoration:'none'}}><StyleButton label="Sign Up" /></Link>   
  </>
  }
  {props.isAuthenticated === true &&
  <>		  
	<Link to="/user_scores" style={{ textDecoration:'none'}}><StyleButton label="Mes Scores"/></Link>  
	<Link to="/home" onClick={() => handleLogout()} style={{ textDecoration:'none'}}><StyleButton label="Log Out"/></Link>  
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
		<Link to="/rating" style={{ textDecoration: 'none' }}><MenuItem>Note moi</MenuItem></Link>
	</ListItem>
  {props.isAuthenticated === false &&        
  <>
	<ListItem>
	<Link to="/login" style={{ textDecoration:'none'}}><MenuItem>Login</MenuItem></Link>  
	</ListItem>
	<ListItem>
	  <Link to="/signup" style={{ textDecoration:'none'}}><MenuItem>Sign Up</MenuItem></Link>   
	</ListItem>
  </>
  }
  {props.isAuthenticated === true &&
  <>		  
	<ListItem>
	<Link to="/user_scores" style={{ textDecoration:'none'}}><MenuItem>Mes Scores</MenuItem></Link>  
	</ListItem>
	<ListItem>
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
/*
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





*/
