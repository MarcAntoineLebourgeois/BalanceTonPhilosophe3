import React,{ useState } from "react";
import {Typography, Button, Grid} from '@material-ui/core';

const QuizResult = (props) => {

    const [launch,setLaunch] = useState(false)

    let score = 0;
    {props.changeQuiz.questions.map((question, i) => {
        (question.answer_given === question.good_answer)? score++ :score = score
    })}
    
    const [quizScoreForm, setQuizScoreForm] = useState({
    	username : "" ,
        quiz_name :"" ,
        quiz_score : ""
    })

    const handleScoreSubmit = async () => {
	    await fetch("https://api.balancetonphilosophe.com/add_quiz_score",{method:'POST',headers:{"Content-type":"application/json"},body: JSON.stringify(quizScoreForm)})
    }

	React.useEffect(() => {
           setQuizScoreForm({username:props.user.user,quiz_name:props.changeQuiz.name,quiz_score:score + "/" + props.quiz.questions.length});
        //   setLaunch(true)
    },[])
    
    if (launch){
        handleScoreSubmit()
        setLaunch(false)
      }

    return(
        <>
        <h1>Resultat du quiz!</h1>
        <h1>Score : {score}/{props.quiz.questions.length}</h1>
        {props.changeQuiz.questions.map((question, i) => {
            return(
                <Grid container direction="column" justify="flex-start" alignItems="flex-start" key={i}>
                    <h3>Question {i + 1} : {question.name}</h3>
                    {(question.answer_given === question.good_answer) 
                    ? 
                    <>
                        <Typography style={{ color: "green" }}>Resultat donne: {question.answer_given}</Typography>
                        <Typography style={{ color: "green" }}>Bonne reponse: {question.good_answer}</Typography>
                        <Typography style={{ color: "green" }}>Bravo!</Typography> 
                    </>
                    : 
                    <>
                        <Typography color='error'>Resultat donne: {question.answer_given}</Typography>
                        <Typography color='error'>Bonne reponse: {question.good_answer}</Typography>
                        <Typography color='error'>C'est nul!</Typography>
                    </> }
                </Grid>
            )
        })}
	    {props.isAuthenticated 
			    ?<Button onClick={() => handleScoreSubmit()}>Sauvegarder le resultat du quiz dans mon compte</Button>
			    :<Button disabled>Connecte toi a ton compte pour sauvegarder le resultat du quiz</Button>}
	    <p/>
        </>
    )
}

export default QuizResult;

                    
                    
