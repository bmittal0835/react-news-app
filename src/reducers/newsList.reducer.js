import {FETCH_NEWSLIST_PENDING, FETCH_NEWSLIST_SUCCESS, FETCH_NEWSLIST_ERROR} from '../actions/news.action';

const initialState = {
    pending: false,
    newsList: [],
    error: null
}

export function newsListReducer(state = initialState, action) {
    switch(action.type) {
        case FETCH_NEWSLIST_PENDING: 
            return {
                ...state,
                pending: true
            }
        case FETCH_NEWSLIST_SUCCESS:
            return {
                ...state,
                pending: false,
                newsList: action.newsList,
            }
        case FETCH_NEWSLIST_ERROR:
            return {
                ...state,
                pending: false,
                error: action.error
            }
        default: 
            return state;
    }
}
