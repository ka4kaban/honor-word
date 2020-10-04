import React from 'react';
import './news-tiles.scss';
import { TopicBlock } from '../Blocks/TopicBlock/TopicBlock';
import { selectArticles } from '../../redux/reducers/articlesReducer';
import { connect } from 'react-redux';
import { store } from '../../redux/configureStore';
import { loadArticlesAction } from '../../redux/actions/articles/loadArticlesAction';
// import { loadArticlesAction } from '../../redux/actions/article/loadArticleByIdAction';

class NewsTilesComponent extends React.Component {
  componentDidMount() {
    store.dispatch(loadArticlesAction())
  }

  render() {
    const { articles } = this.props;

    const blocks = articles.map((m) =>
      <div className="news-tiles__block">
        <TopicBlock
          caption={m.caption}
          uuid={m.uuid}
          date={m.date}
        />
      </div>
    );

    return (<div className="news-tiles">
      {blocks}
    </div>)
  }
}

function mapState(state) {///TODO
  return {
    articles: selectArticles(state)
  }
}

export const NewsTiles = connect(mapState)(NewsTilesComponent);