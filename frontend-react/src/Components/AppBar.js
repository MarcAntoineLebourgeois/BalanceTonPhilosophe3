import React,{useState} from "react";
import { SwipeableDrawer,Divider, List, ListItem,Hidden, ListItemIcon, ListItemText, Grid,Toolbar,Typography,IconButton,MenuItem,Menu,Button } from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";
import { Link } from "react-router-dom";
import { Auth } from "aws-amplify";


const AppBarFront = (props) => {

  const [anchorEl, setAnchorEl] = useState(null);
  const [openDrawer, setOpenDrawer] = useState(false);
  const open = Boolean(anchorEl);
  const handleMenu = event => {setAnchorEl(event.currentTarget)};
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
              <MenuItem onClick={props.DarkModeOn}>Dark/Light Mode</MenuItem>

          <Link to="/rating" style={{ textDecoration: 'none' }}><MenuItem>Give me a feedback</MenuItem></Link>
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

          <Link to="/rating" style={{ textDecoration: 'none' }}><Button>Give me a feedback</Button></Link>
	  {props.isAuthenticated === false &&        
	  <>
		<Link to="/login" style={{ textDecoration:'none'}}><Button>Login</Button></Link>  
          	<Link to="/signup" style={{ textDecoration:'none'}}><Button>Sign Up</Button></Link>   
	  </>
	  }
	  {props.isAuthenticated === true &&
	  <>		  
	  	<Link to="/user_scores" style={{ textDecoration:'none'}}><Button>Mes Scores</Button></Link>  
	  	<Link to="/home" onClick={() => handleLogout()} style={{ textDecoration:'none'}}><Button>Log Out</Button></Link>  
	  </>
	  } 

	</Hidden>  
        </Toolbar>
	<SwipeableDrawer
	  anchor={'right'}
	  open={openDrawer}
	  >
		<List>
			<ListItem>
				<ListItemIcon/>
	  			<ListItemText primary={"coucou"} />

	  		</ListItem>

	  	</List>
	</SwipeableDrawer>  

    </Grid>
  );
}

export default AppBarFront;
