import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import newsListService from '../services/newsList.service';
import loader from '../assets/images/loader.gif';

class NewsListFooter extends Component {
render() {

  const onMoreClick = () => {
    const {getListByPage, pageNumber} = this.props;
    getListByPage(pageNumber+1);
  };

  const {nextPagePending, nextPageError} = this.props;
  return (
    <li className="news-list__footer">
       {nextPagePending && <span className="news-list__loader-container"><img src={loader} className="news-list__loader"/></span>}
       {!nextPagePending && <span className="news-list__more-link" onClick={onMoreClick}>More</span>}
       {nextPageError && <span className='news-list__error'>something went wrong while trying to load more news. please try again..</span>}
    </li>
  )}
}

const mapStateToProps = state => {
  const { newsListReducer } = state;
  const { pageNumber, nextPagePending, nextPageError } = newsListReducer;
  return { pageNumber, nextPagePending, nextPageError };
};

const mapDispatchToProps = dispatch => bindActionCreators({
  getListByPage: newsListService.getListByPage
}, dispatch)

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(NewsListFooter );