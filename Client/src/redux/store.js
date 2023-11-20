import { combineReducers, configureStore, applyMiddleware } from '@reduxjs/toolkit'
import thunk from 'redux-thunk';

/** call reducers */
import questionReducer from './question_reducer';
import resultReducer from './result_reducer';

const rootReducer = combineReducers({
    questions : questionReducer,
    result : resultReducer
})

const store = configureStore({
    reducer : rootReducer,
    middleware : [thunk]
})

/** create store with reducer */
export default configureStore({ reducer : rootReducer })
// export default store;