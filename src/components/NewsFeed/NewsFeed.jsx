import React from 'react';
import { selectArticles } from '../../redux/reducers/articlesReducer';

import { connect } from 'react-redux';
import { store } from '../../redux/configureStore';

import './news-feed.scss';
import { FeedBlock } from '../Blocks/FeedBlock/FeedBlock';
import { loadArticlesAction } from '../../redux/actions/articles/loadArticlesAction';
import { Faces } from '../Faces/Faces';

export class NewsFeedComponent extends React.Component {
  componentDidMount() {
    store.dispatch(loadArticlesAction())
  }
  render() {
    const { articles } = this.props;
    const blocks = articles.map((m) =>
      <FeedBlock
        caption={m.caption}
        uuid={m.uuid}
        date={m.date}
      />);

    return (<div className="news-feed">
      <Faces />
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