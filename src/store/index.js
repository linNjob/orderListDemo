import { combineReducers, createStore } from 'redux';
import todoReducer from '../reducers';

const rootReducer = combineReducers({
    todoReducer,
});


export const store = createStore(rootReducer);
// export default rootReducer;