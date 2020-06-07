import React from 'react';
import { Header } from '../../components/Header/Header';
import { FirstLine } from '../../components/FirstLine/FirstLine';
import { NewsFeed } from '../../components/NewsFeed/NewsFeed';
import { NewsTiles } from '../../components/NewsTiles/NewsTiles';
import { Footer } from '../../components/Footer/Footer';
// import './main-page.scss';


export class MainPage extends React.Component {
  render() {
    return (
      <div>
        <Header />
        <FirstLine />
        {/* <NewsFeed /> */}
        {/* <NewsTiles /> */}
        <Footer />
      </div>
    )
  }
}