import React,{useState} from "react";
import "../styles.css";
import {Grid,Button, TextField} from "@material-ui/core";
import { Auth } from "aws-amplify";
import AppBarFront from "./AppBar"
import SelectionPanel from "./SelectionPanel"
import BottomBar from "./BottomBar"
import { useHistory } from "react-router-dom";
import Loader from 'react-loader-spinner';

const SignUpPage = (props) => {

	const [launchSnackBar,setLaunchSnackBar] = useState(false)
	const [open,setOpen] = useState(true)
	const LoadingIndicator = () => {
	    return (
		    <div style={{ width: "100%", height: "100", display: "flex", justifyContent: "center", alignItems: "center"}}>
		    <Loader type="ThreeDots" color="#ea8f8f" height="100" width="100" />
		    </div>
		      );
	  }
	  
	  const [launch,setLaunch] = useState(false)
	  const history = useHistory();
	  const [newUser, setNewUser] = useState(null);
	  function validateForm() {
		      return (
			            props.fields.email.length > 0 &&
			            props.fields.password.length > 0 &&
			            props.fields.password === props.fields.confirmPassword
			          );
		  	props.setUser({user:props.fields.email})
		    }

	  function validateConfirmationForm() {
		      return props.fields.confirmationCode.length > 0;
		    }

async function handleSubmit(event) {
	  event.preventDefault();
	  setLaunch(true)
		      const newUser = await Auth.signUp({
			            username: props.fields.email,
			            password: props.fields.password,
			          });
		      setNewUser(newUser);
	  setLaunch(false)
	  }


async function handleConfirmationSubmit(event) {
	  event.preventDefault();
	  try {
		      setLaunch(true)
		      await Auth.confirmSignUp(props.fields.email, props.fields.confirmationCode);
		      await Auth.signIn(props.fields.email, props.fields.password);
		      setLaunch(false)
		      history.push("/");
		      props.setIsAuthenticated(true);
			  props.setLaunchSnackBar(true)
			  props.setSnackbarMessage("Welcome " + props.fields.email + " !")	    
	  } catch (e) {alert(e)}
}
  function renderConfirmationForm() {
	      return (
		            <form onSubmit={handleConfirmationSubmit}>
		      		<Grid container direction="column" justify="center" alignItems="center">      
		      			{launch? <LoadingIndicator/> : <></>}
		      			<TextField 
		      				value={props.fields.confirmationCode}
		      				onChange={e => {props.handleFieldChange({...props.fields,confirmationCode:e.target.value})}}
		      				placeholder="Confirmation Code"
		      				label="Confirmation Code"
		      				style={{width:300}}
		      				variant="outlined"/>
		      		<Button type="submit">Send Confirmation Code</Button>
		      		</Grid>
		      	    </form>

		          );
		};
	  function renderForm() {
		      return (
			            <form onSubmit={handleSubmit}>
					<Grid container direction="column" justify="center" alignItems="center">
					{launch? <LoadingIndicator/> : <></>}
			      		<TextField 
		      				value={props.fields.email}
		      				onChange={e => {props.handleFieldChange({...props.fields,email:e.target.value})}}
			      			placeholder="Email"
		      				label="Email"
		      				style={{width:300}}
		      				variant="outlined"/>
					<TextField 
		      				value={props.fields.password}
		      				onChange={e => {props.handleFieldChange({...props.fields,password:e.target.value})}}
			      			placeholder="Password"
		      				label="Password"
		      				type="password"
			      			style={{width:300}}
		      				variant="outlined"/>
					<TextField 
		      				value={props.fields.confirmPassword}
		      				onChange={e => {props.handleFieldChange({...props.fields,confirmPassword:e.target.value})}}
		      				placeholder="confirmation Password"
		      				label="confirmation Password"
		      				style={{width:300}}
		      				type="password"
		      				variant="outlined"/>

		      			<Button type="submit">Sign Up</Button>
			      	</Grid>	
			      </form>

		      );
		    }

	return(

	<>
    <Grid className="BackgroundPage" style={{padding:10, height: '50vh'}}>
      <AppBarFront {...props} />
      <SelectionPanel {...props}  />
    </Grid>
	 
	<Grid container direction="column" justify="center" alignItems="center">
		 {newUser === null ? renderForm() : renderConfirmationForm()}
	</Grid>
	  <BottomBar/> 
	</>  
		  )
}

export default SignUpPage;








































