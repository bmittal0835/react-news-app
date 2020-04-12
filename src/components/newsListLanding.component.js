import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { NewsList } from './newsList.component';
import '../styles/newsList.scss'

import fetchNewsListAction from '../services/fetchNewsList';

// import LoadingSpinner from './SomeLoadingSpinner';
// import ProductList from './ProductList';

class NewsListView extends Component {
    constructor(props) {
        super(props);
    }

    componentWillMount() {
        const {fetchNewsList} = this.props;
        fetchNewsList();
    }

    render() {
        const {newsListData, error, pending} = this.props;

        return (
            <div className='news-list__main'>
                {error && <span className='news-list__error'>{error}</span>}
                <NewsList newsItems={newsListData} />
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
    fetchNewsList: fetchNewsListAction
}, dispatch)

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(NewsListView );