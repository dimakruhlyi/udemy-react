import React, {Component} from 'react'
import {connect} from 'react-redux';
import './App.scss'

class App extends Component {
 
  render() {
    console.log(this.props);
    
    return (
      <div className={'App'}>
        <h1>Counter <strong>{this.props.counter}</strong></h1>

        <hr/>

        <div className="Actions">
          <button onClick={this.props.onAdd}>Add 1</button>
          <button onClick={this.props.onSub}>Sub 1</button>
          <button onClick={this.props.onAddFive}>Add 5</button>
        </div>
      </div>
    )
  }
}

function mapStateToProps(state){
  return {
    counter: state.counter
  }
}

function mapDispatchToProps(dispatch){
  return {
    onAdd: () => dispatch({type: 'ADD'}),
    onSub: () => dispatch({type: 'SUB'}),
    onAddFive: () => dispatch({type: 'ADDFIVE'})
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App)
