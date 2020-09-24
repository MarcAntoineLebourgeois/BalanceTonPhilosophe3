const listQuiz =
[{
    "id": 1,
    "name": "morale",
    "description": "Quiz sur le theme Morale",
    "questions": [
        {
            "id": 1010,
            "name": "Qui a ecrit 'Le Prince' au XVIe siecle ?",
            "options": [
                {"name": "Nicolas Machiavel"},
                {"name": "Rene Descartes"},
                {"name": "Emmanuel Kant"},
                {"name": "Voltaire"}
            ],
            "answer_given":'',
            "good_answer":'Nicolas Machiavel'
        },
        {
            "id": 1020,
            "name": "Qui defend le fait que la societe devrait etre gouvernee par des philosophes?",
            "options": [
                {"name": "Nicolas Machiavel"},
                {"name": "Rene Descartes"},
                {"name": "Emmanuel Kant"},
                {"name": "Platon"}
            ],
            "answer_given":'',
            "good_answer":'Platon'
        },
    ]
},
{
    "id": 2,
    "name": "politique",
    "description": "Quiz sur le theme Politique",
    "questions": [
        {
            "id": 2010,
            "name": "Qui defend le fait que la societe devrait etre gouvernee par des philosophes?",
            "options": [
                {
                    "id": 2011,
                    "questionId": 1010,
                    "name": "Nicolas Machiavel",
                    "isAnswer": true
                },
                {
                    "id": 2012,
                    "questionId": 1010,
                    "name": "Rene Descartes",
                    "isAnswer": false
                },
                {
                    "id": 2013,
                    "questionId": 1010,
                    "name": "Emmanuel Kant",
                    "isAnswer": false
                },
                {
                    "id": 2014,
                    "questionId": 1010,
                    "name": "Platon",
                    "isAnswer": false
                }
            ]
        },
    ]
},

]

export default listQuiz