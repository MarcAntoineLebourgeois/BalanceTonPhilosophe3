import React from "react";
import "../../styles.css";
import {Grid} from "@material-ui/core";
import AppBarFront from "../AppBar"
import SelectionPanel from "../SelectionPanel"
import BottomBar from "../BottomBar"
import Quiz from "./Quiz"
import listQuiz from "../../Data/ListQuiz"


const QuizPage = (props) => {

  React.useEffect(()=>{
    props.setForm({...props.form,Theme: [props.match.params.theme]});
  },[props.match.params.theme])

	return(
    <>
      <Grid className="BackgroundPage" style={{padding:10, height: '60vh'}}>   
        <AppBarFront {...props}/>
        <SelectionPanel {...props}/>
      </Grid>
      {listQuiz.map((quiz, i) => {
        if (props.form.Theme[0] === quiz.name) {
          return(  
            <Quiz 
              {...props} 
              key={i} 
              quiz={quiz}
            />
                )
        }
      })}

    <BottomBar/>
    </>
		  )
}

export default QuizPage;
