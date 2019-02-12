import * as actions from './actionTypes';

// action creators
export const addTodo = (text) => {
	return { type: actions.ADD_TODO, text };
};

export const addTodoSucceeded = (text) => {
	return { type: actions.ADD_TODO_SUCCEEDED, text };
};

export const toggleTodo = (index) => {
	return { type: actions.TOGGLE_TODO, index };
};

export const toggleTodoSucceeded = (index) => {
	return { type: actions.TOGGLE_TODO_SUCCEEDED, index };
};