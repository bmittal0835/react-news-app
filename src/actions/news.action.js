export const FETCH_NEWSLIST_PENDING = 'FETCH_NEWSLIST_PENDING';
export const FETCH_NEWSLIST_SUCCESS = 'FETCH_NEWSLIST_SUCCESS';
export const FETCH_NEWSLIST_ERROR = 'FETCH_NEWSLIST_ERROR';
export const HIDE_NEWS_SUCCESS = 'HIDE_NEWS_SUCCESS';
export const UPVOTE_SUCCESS = 'UPVOTE_SUCCESS';
export const FETCH_NEXTPAGE_PENDING = 'FETCH_NEXTPAGE_PENDING';
export const FETCH_NEXTPAGE_SUCCESS = 'FETCH_NEXTPAGE_SUCCESS';
export const FETCH_NEXTPAGE_ERROR = 'FETCH_NEXTPAGE_ERROR';

export const newsListActions = {
    fetchNewsListPending,
    fetchNewsListSuccess,
    fetchNewsListError,
    hideNewsSuccess,
    upvoteSuccess,
    fetchNextPagePending,
    fetchNextPageSuccess,
    fetchNextPageError,
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

function hideNewsSuccess(item) {
    return {
        type: HIDE_NEWS_SUCCESS,
        itemId: item.objectID
    }
}

function upvoteSuccess(item) {
    return {
        type: UPVOTE_SUCCESS,
        item: item
    }
}

function fetchNextPagePending() {
    return {
        type: FETCH_NEXTPAGE_PENDING
    }
};

function fetchNextPageSuccess(nextPageList) {
    return {
        type: FETCH_NEXTPAGE_SUCCESS,
        nextPageList: nextPageList
    }
};

function fetchNextPageError(error) {
    return {
        type: FETCH_NEXTPAGE_ERROR,
        error: error
    }
};