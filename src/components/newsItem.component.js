import React, { Component } from 'react'

class NewsItem extends Component {
render() {

  const parseURL = url => {
    return new URL(url);
  };

  const getTimeDifference = createdDate => {
    const diffInTime = new Date().getTime() - createdDate*1000;
    const diffInYears = Math.floor(diffInTime / (1000 * 3600 * 24 * 30 * 12));
    const diffInMonths = Math.floor(diffInTime / (1000 * 3600 * 24 * 30));
    const diffInDays = Math.floor(diffInTime / (1000 * 3600 * 24));
    const diffInHours = Math.floor(diffInTime / (1000 * 3600));
    if (diffInYears >= 1) {
      return diffInYears + ' years ago';
    } else if(diffInMonths >= 1) {
      return diffInMonths + ' months ago';
    } else if(diffInDays >= 1) {
      return diffInDays + ' days ago';
    } else {
      return diffInHours + ' hours ago'
    }
  };

  const {item} = this.props;
  return (item &&
    <li className="news-item__container">
      <div className="news-item__counts">
        <span className="news-item__comment">{item.num_comments}</span>
        <span className="news-item__points">{item.points}</span>
      </div>
      <div className="news-item__details">
        <span className="news-item__title"> {item.title}</span>
        <span className="news-item__url small"> 
          <a href={item.url}>({parseURL(item.url).origin})</a>
        </span>
        <span className="news-item__author small"> by <strong>{item.author}</strong></span>
        <span className="news-item__time small"> {getTimeDifference(item.created_at_i)} </span>
        <span className="news-item__hide-link small">[
          <span onClick={alert}>hide</span>
        ]</span>
      </div>
    </li>
  )}
}

export default NewsItem;