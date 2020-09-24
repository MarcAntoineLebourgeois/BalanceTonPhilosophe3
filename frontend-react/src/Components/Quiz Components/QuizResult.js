import React from "react";
import {Typography} from '@material-ui/core';

const QuizResult = (props) => {

    return(
        <>
        <h1>Resultat du quiz!</h1>
        {props.changeQuiz.questions.map((question, i) => {
            return(
                <div key={i}>
                    <h3>Question {i + 1} : {question.name}</h3>
                    {(question.answer_given === question.good_answer) 
                    ? 
                    <>
                        <Typography style={{ color: "green" }}>Resultat donne: {question.answer_given}</Typography>
                        <Typography style={{ color: "green" }}>Bonne reponse: {question.good_answer}</Typography>
                        <Typography style={{ color: "green" }}>Bravo</Typography> 
                    </>
                    : 
                    <>
                        <Typography color='error'>Resultat donne: {question.answer_given}</Typography>
                        <Typography color='error'>Bonne reponse: {question.good_answer}</Typography>
                        <Typography color='error'>C'est nul</Typography>
                    </> }
                </div>
            )
        })}
        </>
    )
}

export default QuizResult;

                    
                    
