import React from 'react';
import classes from './QuizCreator.module.css';
import Button from '../../components/UI/Button/Button';
import Input from '../../components/UI/Input/Input';
import Select from '../../components/UI/Select/Select';
import {createControl} from '../../form/formFramework';
import Auxiliary from '../../hoc/Auxiliary/Auxiliary';

function createOptionControl(number){
    return createControl({
        label: `Answer ${number}`,
        errorMessage:'Value cann\'t be empty',
        id: number
    }, {required: true })
}

function createFormControls(){
    return {
        question: createControl({
            label: 'Input question',
            errorMessage: 'Question cann\'t be empty'
        }, { required: true }),
        option1: createOptionControl(1),
        option2: createOptionControl(2),
        option3: createOptionControl(3),
        option4: createOptionControl(4),
    }
}

export default class QuizCreator extends React.Component {

    state = {
        quiz: [],
        fromControls: createFormControls(),
        righAnswerId: 1
    }

    submitHandler = event => {
        event.preventDefault();
    }

    addQuestionHandler = () =>{

    }

    createQuizHandler = () =>{

    }

    changeHandler = (value, controlName) => {

    }

    renderControls(){
        return Object.keys(this.state.fromControls).map((controlName, index) => {
            const control = this.state.fromControls[controlName];
            return(
                <Auxiliary key = {controlName + index}> 
                     <Input 
                        label = {control.label}
                        value = {control.value}
                        valid = {control.valid}
                        shouldValidate = {!!control.validation}
                        touched = {control.touched}
                        errorMessage = {control.errorMessage}
                        onChange = {event => {
                            this.changeHandler(event.target.value, controlName)
                        }}
                    />
                    {index === 0 ? <hr /> : null}
                </Auxiliary>  
            )
        })
    }

    selectChangeHandler = event => {
        this.setState({
            righAnswerId: +event.target.value
        })
    }

    render(){
        const select = <Select 
            label = "Choose correct answer"
            value = {this.state.righAnswerId}
            onChange = {this.selectChangeHandler}
            options = {[
                {text: 1, value: 1},
                {text: 2, value: 2},
                {text: 3, value: 3},
                {text: 4, value: 4}
            ]}
        />

        return(
            <div className = {classes.QuizCreator}>
                <div>
                    <h1>Create test</h1>
                    <form onSubmit = {this.submitHandler}>
                        {this.renderControls()}

                        {select}
                        <Button type = 'primary' onClick = {this.addQuestionHandler}>Add question</Button>
                        <Button type = 'success' onClick = {this.createQuizHandler}>Create test</Button>
                    </form>
                </div>
            </div>
        )
    }
}