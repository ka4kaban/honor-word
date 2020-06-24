import React from 'react';
import { selectArticles } from '../../redux/reducers/articlesReducer';
import { connect } from 'react-redux';
import { store } from '../../redux/configureStore';
import { loadArticlesAction } from '../../redux/actions/actions';

import './news-feed.scss';
import { FeedBlock } from '../Blocks/FeedBlock/FeedBlock';

export class NewsFeedComponent extends React.Component {
  componentDidMount() {
    store.dispatch(loadArticlesAction())
  }
  render() {
    const { articles } = this.props;
    const blocks = articles.map((m) =>
      <FeedBlock
        caption={m.caption}
        date={m.date}
      />);

    return (<div className="news-feed">
      {blocks}
    </div>)
  }
}

function mapState(state) {///TODO
  return {
    articles: selectArticles(state)
  }
}

export const NewsFeed = connect(mapState)(NewsFeedComponent);