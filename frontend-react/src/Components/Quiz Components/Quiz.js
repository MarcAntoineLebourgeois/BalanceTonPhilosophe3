import React,{useState} from "react";
import { makeStyles } from '@material-ui/core/styles';
import QuizQuestion from './QuizQuestion';
import QuizReview from './QuizReview';
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
            {mode === 'quiz' && <QuizQuestion {...props} changeQuiz={changeQuiz} setChangeQuiz={setChangeQuiz} />}
            {mode === 'review' && <QuizReview {...props} />}
            {mode === 'submit' && <QuizResult {...props} changeQuiz={changeQuiz} />} 
            <Grid container direction="row" justify="center" alignItems="center">
                <Button type="submit" variant="outlined" color="primary" className={classes.button} onClick={() => setMode('quiz')}>
                    Quiz
                </Button>
                <Button type="submit" variant="outlined" color="primary" className={classes.button} onClick={() => setMode('review')}>
                    Revoir les questions
                </Button> 
                <Button type="submit" variant="outlined" color="primary" className={classes.button} onClick={() => setMode('submit')}>
                    Soumettre le quiz
                </Button>
            </Grid>               
        </Grid>
        )

}

export default Quiz