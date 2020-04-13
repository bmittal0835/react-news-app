import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { NewsList } from './newsList.component';
import '../styles/newsList.scss'
import loader from '../assets/images/loader.gif';

import newsListService from '../services/newsList.service';

// import LoadingSpinner from './SomeLoadingSpinner';
// import ProductList from './ProductList';

class NewsListView extends Component {
    constructor(props) {
        super(props);
    }

    componentWillMount() {
        const {fetchNewsList} = this.props;
        fetchNewsList();
        // newsListService.fetchNewsList();
    }

    render() {
        const {newsListData, error, pending} = this.props;

        return (
            <div className='news-list__main'>
                {error && <span className='news-list__error'>something went wrong. please try again..</span>}
                {pending && <span className="news-list__loader-container"><img src={loader} className="news-list__loader"/></span>}
                {!pending && <NewsList newsItems={newsListData} />}
            </div>
        )
    }
}


const mapStateToProps = state => {
    const { newsListReducer } = state;
    const newsListData = newsListReducer.newsList;
    const { pending, error } = newsListReducer;
    return { newsListData, pending, error }
};

const mapDispatchToProps = dispatch => bindActionCreators({
    fetchNewsList: newsListService.fetchNewsList
}, dispatch)

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(NewsListView );