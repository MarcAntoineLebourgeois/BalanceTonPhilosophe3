import React,{useState} from "react";
import "../styles.css";
import {Grid,Button, TextField} from "@material-ui/core";
import { Auth } from "aws-amplify";
import AppBarFront from "./AppBar"
import SelectionPanel from "./SelectionPanel"
import BottomBar from "./BottomBar"
import Loader from 'react-loader-spinner';
import { useHistory } from "react-router-dom";


const LoginPage = (props) => {

  const LoadingIndicator = () => {
	      return (
		      <div style={{ width: "100%", height: "100", display: "flex", justifyContent: "center", alignItems: "center"}}>
		      <Loader type="ThreeDots" color="#ea8f8f" height="100" width="100" />
		      </div>
		        );
	    }
	
	const history = useHistory();	
	const [email,setEmail] = useState('')
	const [password,setPassword] = useState('')
	const [launch, setLaunch] = useState(false)
  	
	function validateForm() {
	      return email.length > 0 && password.length > 0;
	    }

	async function handleSubmit(event) {
		  event.preventDefault();
		
		  try {
			setLaunch(true)
			await Auth.signIn(email, password);
			props.setIsAuthenticated(true)	   
			props.setUser({user:email})  
			setLaunch(false) 	

			history.push("/")  
			props.setLaunchSnackBar(true)
    		props.setSnackbarMessage("Logged in!")
		  } 
		  catch (e) {alert(e.message)}
	}


	return(

	<>
    <Grid className="BackgroundPage" style={{padding:10, height: '50vh'}}>
      <AppBarFront {...props} />
      <SelectionPanel {...props}  />
    </Grid>
	 
	<form onSubmit={handleSubmit}>
	<Grid container direction="column" justify="center" alignItems="center">
	{props.isAuthenticated 
		?<>
		</>
		:<>
		<TextField 
			value={email} 
			onChange={e => setEmail(e.target.value)}  
			placeholder="Email"
			label="Email"
			style={{width:300}}
			variant="outlined"/>
	    <TextField 
			value={password} 
			onChange={e => setPassword(e.target.value)}  
			placeholder="Password"
			label="Password"
			style={{width:300}}
			variant="outlined"/>
		<Button disabled={!validateForm()} type="submit">Login</Button>
		</>
	}
	{launch? <LoadingIndicator/> :<></>}
	</Grid>
	</form>

	  <BottomBar/> 
	</>  
		  )
}

export default LoginPage;








































