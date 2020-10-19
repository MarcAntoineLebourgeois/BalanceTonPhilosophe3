import React,{useState} from "react";
import { makeStyles } from '@material-ui/core/styles';
import QuizQuestion from './QuizQuestion';
import QuizResult from './QuizResult';
import {Grid,Button} from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    button: {
        margin: theme.spacing(1, 1, 0, 0),
    },
    }));

const Quiz = (props) => {
    const [mode,setMode] = useState('quiz')
    const classes = useStyles();
    const [changeQuiz,setChangeQuiz] = useState(props.quiz)

    return(
        <Grid container direction="column" justify="center" alignItems="center">
            <h1>{props.quiz.description}</h1> 
            {mode === 'quiz' && 
		    <>
		    <QuizQuestion {...props} changeQuiz={changeQuiz} setChangeQuiz={setChangeQuiz} />
	  
            <Grid container direction="row" justify="center" alignItems="center">
                <Button type="submit" variant="outlined" color="primary" className={classes.button} onClick={() => setMode('submit')}>
                    envoyer le quiz
                </Button>
            </Grid> 
            <p></p>              
	    </>}
            {mode === 'submit' && <QuizResult {...props} changeQuiz={changeQuiz} />} 
        </Grid>
        )

}

export default Quiz
