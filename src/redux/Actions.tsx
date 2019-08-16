import * as React from 'react'
import {ActionType, createReducer, createStandardAction, getType, StateType} from "typesafe-actions";
import {Word} from "../Search/Container";
import {combineReducers} from "redux";


const actions = {
    setData: createStandardAction('SETALL')<Word[]>(),
    deleteAll: createStandardAction('DELETEALL')(),
    deleteOnce: createStandardAction('DELETE_ONCE')<Word>(),
    addToKeyword: createStandardAction('ADD_TO_KEYWORDS')<Word>(),
    totalLength:createStandardAction('SHOW_TOTAL_LENGTH')<Word>()
};

type Actions = ActionType<typeof actions>;


export const Reducer = createReducer<Word[], Actions>([])
    .handleAction(actions.setData, (state, action) => action.payload)
    .handleAction(actions.deleteAll, () => [])
    .handleAction(actions.deleteOnce,(state,action)=> [...state,action.payload])
    .handleAction(actions.addToKeyword,(state,action)=> [...state, action.payload])
    .handleAction(actions.totalLength,(state,action)=>[...state,action.payload])









interface Data {
    data: StateType<typeof Reducer>;
}

export const reducer = combineReducers({
    data: Reducer,
});