import React from "react";
import { createStore, applyMiddleware } from "redux";
import rootReducer from "./reducers";
import createSagaMiddleware from 'redux-saga'
import mywatchLogin from "./saga/sagas"


const saga = createSagaMiddleware();

const initialState = {};

const store = createStore(rootReducer, initialState, applyMiddleware(saga));
saga.run(mywatchLogin)


export default store;
