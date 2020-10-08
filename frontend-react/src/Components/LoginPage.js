import React,{useState} from "react";
import "../styles.css";
import {Grid,Button, TextField} from "@material-ui/core";
import { Auth } from "aws-amplify";
import AppBarFront from "./AppBar"
import SelectionPanel from "./SelectionPanel"
import BottomBar from "./BottomBar"

const LoginPage = (props) => {
	const [email,setEmail] = useState('')
	const [password,setPassword] = useState('')
  	function validateForm() {
	      return email.length > 0 && password.length > 0;
	    }

	async function handleSubmit(event) {
		  event.preventDefault();

		  try {
			await Auth.signIn(email, password);
			props.setIsAuthenticated(true)	    
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
		<Button onClick={() => {props.setIsAuthenticated(false)}}>Log Out</Button>	
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
	</Grid>
	</form>
	  <BottomBar/> 
	</>  
		  )
}

export default LoginPage;








































