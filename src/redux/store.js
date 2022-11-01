
import { configureStore,applyMiddleware } from "@reduxjs/toolkit";
import { composeWithDevTools } from "redux-devtools-extension";
import createSagaMiddleware from "@redux-saga/core";
import "regenerator-runtime/runtime";
import reducer from './reducer';
import middleware from './middleware';

const sagaMiddleware =  createSagaMiddleware();

export const store = configureStore(
   { reducer},

   // composeWithDevTools(applyMiddleware(sagaMiddleware))
);
//sagaMiddleware.run(middleware);



