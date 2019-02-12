import { takeLatest, put } from 'redux-saga/effects';
import { addTodoSucceeded, toggleTodoSucceeded } from './actions';
import { ADD_TODO, TOGGLE_TODO } from './actionTypes';

// watcher saga: watches for actions dispatched to the store, starts worker saga
export function* watcherSaga() {
    yield takeLatest(ADD_TODO, addTodoSaga);
    yield takeLatest(TOGGLE_TODO, toggleTodoSaga);
}

// worker saga: makes the api call when watcher saga sees the action
function* addTodoSaga(params) {
	try {
        console.log("Dummy API call --> save ToDo to DB", params.text);
		// dispatch a success action
		yield put(addTodoSucceeded(params.text));
	} catch (error) {
		// dispatch a failure action to the store with the error
		console.log("Dispatch failure")
	}
}

function* toggleTodoSaga(params) {
	try {
        console.log("Dummy API call --> toggle ToDo", params.index);
		// dispatch a success action
		yield put(toggleTodoSucceeded(params.index));
	} catch (error) {
		// dispatch a failure action to the store with the error
		console.log("Dispatch failure")
	}
}