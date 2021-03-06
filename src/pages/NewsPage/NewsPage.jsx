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
  getArticleContent() {
    const { article } = this.props;
    return article && article.content;
  }
  getArticleCaption() {
    const { article } = this.props;
    return article && article.caption;
  }
  render() {
    return (
      <div className="news-page">
        <Header />
        <div className="news-page__content-container">
          <div className="news-page__innerView-container">
            <h2> {this.getArticleCaption()} </h2>
            {this.getArticleContent()}
          </div>
          <div className="news-page__simular-articles-container">
            <div className="news-page__simular-articles-header">
              ПОХОЖИЕ ТЕМЫ
            </div>  
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