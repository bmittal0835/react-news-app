import { newsListActions } from "../actions/news.action";


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

export default fetchNewsList;