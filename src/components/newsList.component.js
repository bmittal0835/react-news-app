import React, { Component } from 'react';
import NewsItem from './newsItem.component';
import NewsListHeader from './newsListHeader.component';
import NewsListFooter from './newsListFooter.component';


export class NewsList extends Component {
render() {
  const {newsItems} = this.props;
  
  return (
    <ul className="news-list__wrapper">
      <NewsListHeader />
      {newsItems.map((news, index) => (
        ( news && !news.hide && <NewsItem key={index} item={news} /> )
      ))}
      <NewsListFooter />
    </ul>
  )}
}
