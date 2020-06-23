import React from 'react';
import './news-tiles.scss';
import { TopicBlock } from '../Blocks/TopicBlock/TopicBlock';
import { selectArticles } from '../../redux/reducers/articlesReducer';
import { connect } from 'react-redux';
import { store } from '../../redux/configureStore';
import { loadArticlesAction } from '../../redux/actions/actions';
// import fetch from 'cross-fetch'//TODO???????????

class NewsTilesComponent extends React.Component {
  // getDate() {
  //   return [
  //     {
  //       caption: "Под Тулой незаконно захоронили более 3 млн литров нефтепродуктов",
  //       date: "8:54"
  //     },
  //  
  //   ]
  // }

  componentDidMount() {
    store.dispatch(loadArticlesAction())
  }

  // componentDidMount(){
  //   debugger
  //   let articles = fetch(`http://localhost:8080/articles`)
  //     .then(response => response.json())
  //     .then(json =>
        
  //       dispatch(receiveArticles(json))
  //     )
  
  // }
  render() {
    const { articles } = this.props;
    const blocks = articles.map((m) =>
      <div className="news-tiles__block">
        <TopicBlock
          caption={m.caption}
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
