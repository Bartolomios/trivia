import { combineReducers } from 'redux'
import questionsReducer from './questionsReducer';

const reducers = combineReducers({
   questionsReducer
  }) 


export default reducers;

export type State = ReturnType<typeof reducers>