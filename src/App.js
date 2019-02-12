import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import * as actions from './actions';
import { connect } from 'react-redux';

class App extends Component {
  render() {
    const {todos, addTodo, toggleTodo} = this.props;
    console.log(todos);
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload...
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
          <div onClick={() => {console.log("ADD clicked!"); addTodo("esempio")}}>Click</div>
          <div onClick={() => {console.log("TOGGLE clicked!"); toggleTodo(0)}}>Toggle</div>
        </header>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
	return {
		todos: state.todos
	};
};

export default connect(mapStateToProps, actions)(App);
