export const FETCH_NEWSLIST_PENDING = 'FETCH_NEWSLIST_PENDING';
export const FETCH_NEWSLIST_SUCCESS = 'FETCH_NEWSLIST_SUCCESS';
export const FETCH_NEWSLIST_ERROR = 'FETCH_NEWSLIST_ERROR';

export const newsListActions = {
    fetchNewsListPending,
    fetchNewsListSuccess,
    fetchNewsListError
};

function fetchNewsListPending() {
    return {
        type: FETCH_NEWSLIST_PENDING
    }
}

function fetchNewsListSuccess(newsList) {
    return {
        type: FETCH_NEWSLIST_SUCCESS,
        newsList: newsList
    }
}

function fetchNewsListError(error) {
    return {
        type: FETCH_NEWSLIST_ERROR,
        error: error
    }
}