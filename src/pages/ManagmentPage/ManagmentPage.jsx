import React from 'react';
import './managment-page.scss';

import { selectArticles } from '../../redux/reducers/articlesReducer';
import { connect } from 'react-redux';
import { Header } from '../../components/Header/Header';
import { HeaderItem } from '../../components/Header/HeaderItem/HeaderItem';
import { UniversalLink } from '../../components/universal-link/UniversalLink';
import { Button } from '../../components/button/Button';
import { FirstLine } from '../../components/FirstLine/FirstLine';
import { store } from '../../redux/configureStore';
import { loadPersonsAction } from '../../redux/actions/persons/loadPersonsAction';
import { loadArticlesAction } from '../../redux/actions/articles/loadArticlesAction';
import { FaceBlock } from '../../components/Blocks/FaceBlock/FaceBlock';
import { selectPersons } from '../../redux/reducers/personsReducer';

class ManagmentPageComponent extends React.Component {
  componentDidMount() {
    store.dispatch(loadArticlesAction());
    store.dispatch(loadPersonsAction());
  }
  render() {
    const { articles, persons = [] } = this.props;

    const personsBlocks = persons.map((m) =>
      <FaceBlock
        caption={m.caption}
        uuid={m.uuid}
        date={m.date}
      />);
    return (
      <div className="managment-page">
        <Header>
          <UniversalLink noStyle={true} href="/admin">
            <Button className="header__button">
              Новости
              </Button>
          </UniversalLink>
          <UniversalLink noStyle={true} href="/complaints">
            <Button className="header__button">
              Жалобы
              </Button>
          </UniversalLink>

          <UniversalLink noStyle={true} href="/managment">
            <Button className="header__button">
              Управление
              </Button>
          </UniversalLink>
        </Header>
        <div className="managment-page__container">
          <div >
            <FirstLine editable={true} />
          </div>
          <div>
            Лица
        </div>
        </div>
        {personsBlocks}
      </div>
    )
  }
}

function mapState(state) {///TODO
  return {
    articles: selectArticles(state),
    persons: selectPersons(state)
  }
}

export const ManagmentPage = connect(mapState)(ManagmentPageComponent);