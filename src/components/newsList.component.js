import React, { Component } from 'react';
import PropTypes from 'prop-types'
import NewsItem from './newsItem.component';
import NewsListHeader from './newsListHeader.component';


export class NewsList extends Component {
render() {
  const {newsItems} = this.props;
  
  return (
    <ul className="news-list__wrapper">
      <NewsListHeader />
      {newsItems.map((news, index) => (
        <NewsItem key={index} item={news} />
      ))}
    </ul>
  )}
}
