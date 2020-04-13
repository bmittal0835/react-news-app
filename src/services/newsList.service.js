import { newsListActions } from "../actions/news.action";

const newsListService = {
    fetchNewsList,
    hideNews,
    upvote,
    getListByPage
};


function fetchNewsList() {
    return dispatch => {
        dispatch(newsListActions.fetchNewsListPending());
        fetch('https://hn.algolia.com/api/v1/search?tags=front_page')
        .then(res => res.json())
        .then(res => {
            if(!res) {
                throw(res.error);
            }
            dispatch(newsListActions.fetchNewsListSuccess(res.hits));
            return res.hits;
        })
        .catch(error => {
            dispatch(newsListActions.fetchNewsListError(error));
        })
    }
}

function hideNews(item) {
    return dispatch => {
        dispatch(newsListActions.hideNewsSuccess(item));
    }
}

function upvote(item) {
    return dispatch => {
        dispatch(newsListActions.upvoteSuccess(item));
    }
}

function getListByPage(pageNumber) {
    return dispatch => {
        dispatch(newsListActions.fetchNextPagePending());
        fetch('https://hn.algolia.com/api/v1/search?page='+pageNumber)
        .then(res => res.json())
        .then(res => {
            if(!res) {
                throw(res.error);
            }
            dispatch(newsListActions.fetchNextPageSuccess(res.hits));
            return res.hits;
        })
        .catch(error => {
            dispatch(newsListActions.fetchNextPageError(error));
        })
    }
}

export default newsListService;