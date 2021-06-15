import React from 'react';
import './article-page.scss';
import { connect } from 'react-redux';
import { store } from '../../redux/configureStore';
import { loadArticleByIdAction } from '../../redux/actions/article/loadArticleByIdAction';
import { Header } from '../../components/Header/Header';
import { selectArticle } from '../../redux/reducers/articlesReducer';
import { Footer } from '../../components/Footer/Footer';
import { NewsFeed } from '../../components/NewsFeed/NewsFeed';
import { CommentsList } from '../../components/comments-list/CommentsList';

export class ArticlePageComponent extends React.Component {
  componentDidMount() {
    let { id } = this.props.match.params;
    id = id.replace(':', '');
    store.dispatch(loadArticleByIdAction(id));
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
      <div className="article-page">
        <Header />
        <div className="article-page__content-container">
          <div className="article-page__innerView-container">
            <h2> {this.getArticleCaption()} </h2>
            {this.getArticleContent()}
            <CommentsList />
          </div>
          <div className="article-page__simular-articles-container">
            <div className="article-page__simular-articles-header">
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

export const ArticlePage = connect(mapState)(ArticlePageComponent);