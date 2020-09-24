import React,{useState} from "react";
import { makeStyles } from '@material-ui/core/styles';
import {Grid,Radio,RadioGroup,FormControlLabel,FormControl,Button} from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    formControl: {
        margin: theme.spacing(3),
      },
    button: {
        margin: theme.spacing(1, 1, 0, 0),
    },
    }));

const QuizQuestions = (props) => {
    const [indexQuestion,setIndexQuestion] = useState(0) 
    const classes = useStyles();

    const RadioChange = (indexQuestion) => e => {
        let clone = props.changeQuiz
        clone.questions[indexQuestion].answer_given = e.target.value
        props.setChangeQuiz(clone)
    }


    return(
        <>
            <h2>QuizQuestions</h2>
            <h3>Question {indexQuestion + 1} : {props.quiz.questions[indexQuestion].name}</h3>
            <form>
            <FormControl className={classes.formControl}>
                <RadioGroup >
                    {props.quiz.questions[indexQuestion].options.map((option, j) => {
                        return(
                            <FormControlLabel 
                                key={j} 
                                value={option.name} 
                                control={<Radio />} 
                                label={option.name}
                                onChange={RadioChange(indexQuestion)}
                            />
                        )
                    })}
                </RadioGroup>
            </FormControl>
            </form>


            <Grid container direction="row" justify="center" alignItems="center">
                <Button type="submit" variant="outlined" color="primary" className={classes.button} 
                        onClick={() => setIndexQuestion(0)}>
                    Premiere question
                </Button>
                <Button id="back" type="submit" variant="outlined" color="primary" className={classes.button} 
                        onClick={() => setIndexQuestion(indexQuestion - 1)}
                        disabled={indexQuestion <= 0}>
                    Precedent
                </Button> 
                <Button id="next" type="submit" variant="outlined" color="primary" className={classes.button} 
                        onClick={() => setIndexQuestion(indexQuestion + 1)}
                        disabled={indexQuestion >= props.quiz.questions.length - 1}>
                    Suivant
                </Button>
                <Button type="submit" variant="outlined" color="primary" className={classes.button} 
                        onClick={() => setIndexQuestion(props.quiz.questions.length - 1)}>
                    Derniere question
                </Button>
            </Grid>  
        </>
    )
}

export default QuizQuestions;
