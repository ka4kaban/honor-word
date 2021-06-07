import React from 'react';
import { selectArticles } from '../../redux/reducers/articlesReducer';

import { connect } from 'react-redux';
import { store } from '../../redux/configureStore';

import './news-feed.scss';
import { FeedBlock } from '../Blocks/FeedBlock/FeedBlock';
import { loadArticlesAction } from '../../redux/actions/articles/loadArticlesAction';
import { FacesButton as FacesButton } from '../FacesButton/FacesButton';
import { FaceBlock } from '../Blocks/FaceBlock/FaceBlock';
import { loadPersonsAction } from '../../redux/actions/persons/loadPersonsAction';
import { selectPersons } from '../../redux/reducers/personsReducer';

export class NewsFeedComponent extends React.Component {
  state = {
    showFaces: false
  }

  componentDidMount() {
    store.dispatch(loadArticlesAction());
    store.dispatch(loadPersonsAction());
  }

  onChekedChange = () => {
    this.setState({ showFaces: !this.state.showFaces });
  }

  render() {
    const { articles, persons = [] } = this.props;
    const { showFaces } = this.state;

    const blocks = articles.map((m) =>
      <FeedBlock
        caption={m.caption}
        uuid={m.uuid}
        date={m.date}
      />);

    const personsBlocks = persons.map((m) =>
      <FaceBlock
        caption={m.caption}
        uuid={m.uuid}
        date={m.date}
      />);

    return (<div className="news-feed">
      <FacesButton onChekedChange={this.onChekedChange} />
      {showFaces ? personsBlocks : blocks}
    </div>)
  }
}

function mapState(state) {///TODO
  return {
    articles: selectArticles(state),
    persons: selectPersons(state)
  }
}

export const NewsFeed = connect(mapState)(NewsFeedComponent);