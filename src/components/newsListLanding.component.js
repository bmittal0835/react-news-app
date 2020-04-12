import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import fetchNewsListAction from '../services/fetchNewsList';
import {getNewsList, getNewsListPending, getNewsListError} from '../reducers/newsList.reducer';

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
        const {newsList, error, pending} = this.props;

        return (
            <div className='news-list-wrapper'>
                {error && <span className='news-list-error'>{error}</span>}
                
            </div>
        )
    }
}


const mapStateToProps = state => {
    const { newsListReducer } = state;
    const { newsList, pending, error } = newsListReducer;
    return { newsList, pending, error }
};

const mapDispatchToProps = dispatch => bindActionCreators({
    fetchNewsList: fetchNewsListAction
}, dispatch)

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(NewsListView );