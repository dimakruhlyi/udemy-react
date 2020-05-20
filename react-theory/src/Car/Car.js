import React, {Component} from 'react';
import PropTypes from 'prop-types';
//import Radium from 'radium';
import './Car.css';
import withClass from '../hoc/withClass'


class Car extends Component{
    constructor(props){
        super(props)

        this.inputRef = React.createRef()
    }

    // componentWillReceiveProps(nextProps){
    //     console.log('Car componentWillReceiveProps', nextProps);
    // }

    // shouldComponentUpdate(nextProps, nextState){
    //     console.log('Car shouldComponentUpdate', nextProps, nextState);
    //     return nextProps.name.trim() !== this.props.name;
    // }

    // componentWillUpdate(nextProps, nextState){
    //     console.log('Car componentWillUpdate', nextProps, nextState);
    // }

    // static getDerivedStateFromProps(nextProps, prevState){
    //     console.log('Car getDerivedStateFromProps', nextProps, prevState);
    //     return prevState
    // }

    // componentDidUpdate(){
    //     console.log('Car componentDidUpdate');
    // }

    // getSnapshotBeforeUpdate(){
    //     console.log('Car getSnapshotBeforeUpdate');
    // }

    // componentWillUnmount(){
    //     console.log('Car componentWillUnmount')
    // }
    
    componentDidMount(){
        if(this.props.index === 1){
            this.inputRef.current.focus()
        }
        
    }
    render(){
        //console.log('Car render');
        // if(Math.random() > 0.7){
        //     throw new Error('Car random failed')
        // }

        const inputClasses = ['input']
    
        if(this.props.name !== ''){
            inputClasses.push('green')
        }else{
            inputClasses.push('red')
        }
        if(this.props.name.length > 4){
            inputClasses.push('bold')
        }
    
        return(
            <React.Fragment>
                <h3>Car name: {this.props.name}</h3>
                <p>Year: <strong>{this.props.year}</strong></p>
                <input
                    ref = {this.inputRef}  
                    type = "text" 
                    onChange = {this.props.onChangeName} 
                    value = {this.props.name}
                    className = {inputClasses.join(' ')}
                />
                <button onClick = {this.props.onDelete}>Delete</button>
            </React.Fragment>
        )
    }
}
Car.propTypes = {
    name: PropTypes.string.isRequired,
    year: PropTypes.number,
    index: PropTypes.number,
    onChangeName: PropTypes.func,
    onDelete: PropTypes.func
}

export default withClass(Car, 'Car')