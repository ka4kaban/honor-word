import React from 'react';
import { Header } from '../../components/Header/Header';
import { FirstLine } from '../../components/FirstLine/FirstLine';
import { NewsFeed } from '../../components/NewsFeed/NewsFeed';
import { NewsTiles } from '../../components/NewsTiles/NewsTiles';
import { Footer } from '../../components/Footer/Footer';
import './main-page.scss';


export class MainPage extends React.Component {
  render() {
    return (
      <div className="main-page">
        <Header />
        <div className="main-page__content-container">
          <div className="main-page__innerView-container">
            <FirstLine />
          </div>
          <NewsTiles />
          <div className="main-page__news-feed-container">
            <NewsFeed />
          </div>
        </div>
        <Footer />
      </div>
    )
  }
}