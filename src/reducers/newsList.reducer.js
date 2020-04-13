import {FETCH_NEWSLIST_PENDING, 
        FETCH_NEWSLIST_SUCCESS,
        FETCH_NEWSLIST_ERROR,
        HIDE_NEWS_SUCCESS,
        UPVOTE_SUCCESS,
        FETCH_NEXTPAGE_PENDING, 
        FETCH_NEXTPAGE_SUCCESS,
        FETCH_NEXTPAGE_ERROR,
    } from '../actions/news.action';

const initialState = {
    pending: false,
    newsList: [],
    error: null,
    pageNumber: 0,
    nextPagePending: false,
    nextPageError: null
}

function getNewsDataFromStorage() {
    const data = sessionStorage.getItem('newsData');
    return data ? JSON.parse(data) : null;
}

function hideItemInList(newsList, itemId) {
    const data = getNewsDataFromStorage() || {};
    data[itemId] = data[itemId] ? {...data[itemId], hide: true} : {hide: true};
    sessionStorage.setItem('newsData', JSON.stringify(data));

    // return newsList.filter(item => item.objectID !== itemId);
    return transformNewsList(newsList);
}

function upvoteNews(newsList, item) {
    const data = getNewsDataFromStorage() || {};
    const itemId = item.objectID;
    data[itemId] = data[itemId] ? {...data[itemId], points: item.points+1} : {points: item.points+1};
    sessionStorage.setItem('newsData', JSON.stringify(data));
    return transformNewsList(newsList);
}

function transformNewsList(newsList) {
    const data = getNewsDataFromStorage();
    let listData = newsList;
    if (data) {
        listData = newsList.map((news)=> {
            return data[news.objectID] ? {...news, ...data[news.objectID]} : news;
        });
    }

    return listData;
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
                newsList: transformNewsList(action.newsList),
                pageNumber: 1
            }
        case FETCH_NEWSLIST_ERROR:
            return {
                ...state,
                pending: false,
                error: action.error
            }
        case HIDE_NEWS_SUCCESS:
            return {
                ...state,
                newsList: hideItemInList(state.newsList, action.itemId)
            }
        case UPVOTE_SUCCESS:
            return {
                ...state,
                newsList: upvoteNews(state.newsList, action.item)
            }
        case FETCH_NEXTPAGE_PENDING:
            return {
                ...state,
                nextPagePending: true
            }
        case FETCH_NEXTPAGE_SUCCESS:
            return {
                ...state,
                nextPagePending: false,
                newsList: [...state.newsList, ...action.nextPageList],
                pageNumber: state.pageNumber + 1,
            }
        case FETCH_NEXTPAGE_ERROR:
            return {
                ...state,
                nextPagePending: false,
                nextPageError: action.error
            }
        default: 
            return state;
    }
}
