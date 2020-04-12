import { combineReducers } from 'redux';

import { newsListReducer } from './newsList.reducer';

const rootReducer = combineReducers({
    newsListReducer
});

export default rootReducer;