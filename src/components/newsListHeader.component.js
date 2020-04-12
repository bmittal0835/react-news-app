import React, { Component } from 'react'
import newsLogo from '../assets/images/newsLogo.gif';

class NewsListHeader extends Component {
render() {

  return (
    <li className="news-list__header">
        <img src={newsLogo} className="news-list__logo"/>
        <span className="news-list__top-link">top</span> | <span className="news-list__new-link">new</span>
    </li>
  )}
}

export default NewsListHeader;