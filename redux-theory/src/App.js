import React, {Component} from 'react'
import {connect} from 'react-redux';
import Counter from './Counter';
import './App.scss'
import { add, sub, addFive, addNumber } from './redux/actions/actions';

class App extends Component {
 
  render() {
    return (
      <div className={'App'}>
        <h1>Counter <strong>{this.props.counter}</strong></h1>

        <hr/>

        <div className="Actions">
          <button onClick={this.props.onAdd}>Add 1</button>
          <button onClick={this.props.onSub}>Sub 1</button>
          <button onClick={this.props.onAddFive}>Add 5</button>
        </div>
        <div className="Actions">
          <button onClick={() => this.props.onAddNumber(15)}>Add 15</button>
          <button onClick={() => this.props.onAddNumber(-17)}>Sub 17</button>
        </div>

        <Counter />
      </div>
    )
  }
}

function mapStateToProps(state){
  return {
    counter: state.counter1.counter
  }
}

function mapDispatchToProps(dispatch){
  return {
    onAdd: () => dispatch(add()),
    onSub: () => dispatch(sub()),
    onAddFive: () => dispatch(addFive()),
    onAddNumber: number => dispatch(addNumber(number))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App)
