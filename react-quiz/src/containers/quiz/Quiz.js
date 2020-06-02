import React, {Component} from 'react';
import classes from './Quiz.module.css';
import ActiveQuiz from '../../components/ActiveQuiz/ActiveQuiz'

class Quiz extends Component{
    state = {
        activeQuestion: 0,
        quiz: [
            {
                question: 'What color the sky has?',
                rightAnswerId: 2,
                id: 1,
                answers: [
                    {text: 'black', id: 1},
                    {text: 'blue', id: 2},
                    {text: 'red', id: 3},
                    {text: 'green', id: 4}
                ]
            },
            {
                question: 'When Kyiv was founded?',
                rightAnswerId: 4,
                id: 2,
                answers: [
                    {text: '851', id: 1},
                    {text: '988', id: 2},
                    {text: '327', id: 3},
                    {text: '482', id: 4}
                ]
            }
        ]
    }
    onAnswerClickHandler = answerId => {
        console.log('Answer id: ', answerId);

        this.setState({
            activeQuestion: this.state.activeQuestion + 1
        })
    }

    render(){
        return(
            <div className = {classes.Quiz}>
                <div className = {classes.QuizWrapper}>
                    <h1>Answer all questions</h1>
                    <ActiveQuiz  
                    answers = {this.state.quiz[this.state.activeQuestion].answers}
                    question = {this.state.quiz[this.state.activeQuestion].question}
                    onAnswerClick = {this.onAnswerClickHandler}
                    quizLength = {this.state.quiz.length}
                    answerNumber = {this.state.activeQuestion + 1}/>
                </div>
            </div>
        )
    }
}
export default Quiz