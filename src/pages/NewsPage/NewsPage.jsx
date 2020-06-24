import React from 'react';
import './news-page.scss';
import { connect } from 'react-redux';
import { store } from '../../redux/configureStore';
import { loadArticleByIdAction } from '../../redux/actions/actions';
import { selectArticle } from '../../redux/reducers/articlesReducer';

export class NewsPageComponent extends React.Component {
  componentDidMount() {
    let {id} = this.props.match.params;
    id = id.replace(':','');
    store.dispatch(loadArticleByIdAction(id))
  }
  render() {
    const {article} = this.props;
    return (
      <div className="news-page">
        {article && article.content}
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