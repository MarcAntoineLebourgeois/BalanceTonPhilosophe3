import React from "react";

const QuizReview = () => {


    return(
        <h1>QuizReview</h1>
    )
}

export default QuizReview;

/*
    const classes = useStyles();
    const [value, setValue] = React.useState("");
    const [error, setError] = React.useState(false);
    const [helperText, setHelperText] = React.useState("");

    const handleRadioChange = (event) => {
        setValue(event.target.value);
        setHelperText(" ");
        setError(false);
      };

    const submitQuestion = (event) => {
        event.preventDefault();
        console.log(value)
        console.log(props.quiz.questions[X].options)
        //if (value === props.quiz.questions.options.isAnswer){}
    } 
               
               
               
               
               
               
               
               {props.quiz.questions.map((question, i) => {
                return(
                    <form key={i} onSubmit={submitQuestion}>  
                        <FormLabel component="legend">{question.name}</FormLabel>
                        <RadioGroup aria-label="quiz" name="quiz" value={value} onChange={handleRadioChange}>
                            <p></p>
                            {question.options.map((option, j) => {
                                return(
                                    <FormControlLabel key={j} value={option.name} control={<Radio />} label={option.name}/>
                                )
                            })}
                        </RadioGroup>
                        <Button type="submit" variant="outlined" color="primary" className={classes.button}>
                            Verifier la reponse
                        </Button> 
                        <p></p>
                    </form>
                )
            })}                 
                    
*/            
