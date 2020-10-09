import React,{useState} from "react";
import "../../styles.css";
import {Grid, Button,Table,TableBody,TableCell,TableContainer,TableHead,TableRow,Paper} from "@material-ui/core";
import AppBarFront from "../AppBar"
import SelectionPanel from "../SelectionPanel"
import BottomBar from "../BottomBar"
import Quiz from "./Quiz"
import listQuiz from "../../Data/ListQuiz"


const UserQuizPage = (props) => {
	console.log(props.user)	
	const [response,setResponse] = useState([])
	const handleFormSubmit = async () => {
	const envoi1 = await fetch("https://api.balancetonphilosophe.com/user_scores", {method:'POST', headers:{"Content-type":"application/json"},body: JSON.stringify(props.user)});
	const retour1 = await envoi1.json();
	setResponse(retour1)
	}

	React.useEffect (()=> {
		handleFormSubmit()
	},[])

	return(
    <>
      <Grid className="BackgroundPage" style={{padding:10, height: '60vh'}}>   
        <AppBarFront {...props}/>
        <SelectionPanel {...props}/>
      </Grid>
	{response.length > 0 &&
	<TableContainer component={Paper}>
	<Table aria-label="simple table">
		<TableHead>
		  <TableRow>
		     <TableCell>id</TableCell>
		     <TableCell align="right">Theme du quiz</TableCell>
		     <TableCell align="right">Note au quiz</TableCell>
		     <TableCell align="right">Date/heure</TableCell>
		   </TableRow>
		</TableHead>
		<TableBody>
		          {response.map((row) => (
				              <TableRow key={row.id}>
				                <TableCell component="th" scope="row">
				                  {row.id}
				                </TableCell>
				                <TableCell align="right">{row.quiz_name}</TableCell>
				                <TableCell align="right">{row.quiz_score}</TableCell>
				                <TableCell align="right">{row.date}</TableCell>
				              </TableRow>
				            ))}
		</TableBody>
	</Table>
	</TableContainer>
	}
    <BottomBar/>
    </>
		  )
}

export default UserQuizPage;
