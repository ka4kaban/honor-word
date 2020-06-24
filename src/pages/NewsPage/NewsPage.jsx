import React from 'react';
import './news-page.scss';
import { connect } from 'react-redux';
import { store } from '../../redux/configureStore';
import { loadArticleByIdAction } from '../../redux/actions/actions';
import { Header } from '../../components/Header/Header';
import { selectArticle } from '../../redux/reducers/articlesReducer';
import { Footer } from '../../components/Footer/Footer';
import { NewsFeed } from '../../components/NewsFeed/NewsFeed';

export class NewsPageComponent extends React.Component {
  componentDidMount() {
    let { id } = this.props.match.params;
    id = id.replace(':', '');
    store.dispatch(loadArticleByIdAction(id))
  }
  render() {
    const { article } = this.props;
    return (
      <div className="news-page">
        <Header />
        <div className="main-page__content-container">
          <div className="main-page__innerView-container">
            {article && article.content}
          </div>
          <div className="main-page__news-feed-container">
            <NewsFeed />
          </div>
        </div>
        <Footer />

      </div>
    )
  }
}

function mapState(state) {///TODO
  return {
    article: selectArticle(state)
  }
}

export const NewsPage = connect(mapState)(NewsPageComponent);