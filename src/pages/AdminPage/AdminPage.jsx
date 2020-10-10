import React from 'react';
import './admin-page.scss';
import $ from "jquery";
import { AdminCard } from './AdminCard/AdminCard';
import classNames from 'classnames';
import { v4 as uuidv4 } from 'uuid';
import { AdminCardAddForm } from './AdminCardAddForm/AdminCardAddForm';
import { Button } from '../../components/Button/Button';
import { store } from '../../redux/configureStore';
import { articleInsert } from '../../redux/actions/article/articleInsert';
// import { loadArticlesAction } from '../../redux/actions/article/loadArticleByIdAction';
import { selectArticles } from '../../redux/reducers/articlesReducer';
import { connect } from 'react-redux';
import { loadArticlesAction } from '../../redux/actions/articles/loadArticlesAction';
// published
// const StatusEnum = Object.freeze({ "created": 5671, "checking": 5672, "correcting": 5673, "published": 5674 })

export const ArticleStatus = {
  created: 'created',
  checking: 'checking',
  correcting: 'correcting',
  published: 'published',
  archive: 'archive'
};

function onDrop() {
  // $('.drop').css({ 'background': '#ff5722' })
  // window.setTimeout(function () {
  //   $('.drop').css({ 'background': 'white' })
  // }, 2500);
}

function isColliding(x, y, elemenClass) {
  var cardCoord = {};
  let containers = $(elemenClass);
  for (var card of containers) {
    cardCoord.top = card.offsetTop;
    cardCoord.left = card.offsetLeft;
    cardCoord.right = parseFloat(card.offsetLeft) + parseFloat(card.offsetWidth);
    cardCoord.bottom = parseFloat(card.offsetTop) + parseFloat(card.offsetHeight);

    if (x > cardCoord.left && x < cardCoord.right && y < cardCoord.bottom && y > cardCoord.top) {
      return true;
    }
  }
  return false;
}

class AdminPageComponent extends React.Component {
  state = {
    showAddingForm: false,
    selectedArticleId: null,
  }

  // caption: "Москалькова: пикет нельзя рассматривать как митинг даже во время пандемии"
  // content: "Одиночное пикетирование, даже в условиях пандемии коронавируса, не может рассматриваться как массовое мероприятие. Об этом заявила уполномоченная по правам человека РФ Татьяна Москалькова на видеоконференции с комиссаром Совета Европы по правам человека Дуней Миятович. Таким образом она прокомментировала задержание муниципального депутата и журналиста Ильи Азара."
  // date: "2020-06-23T00:13:40.000Z"
  // uuid: "5898f656-a39c-45e7-9e35-aa1c307c8a69"
  // _id: "5ef20ae393110b40386b7d05"

  renderArticlesByStatus (status) {
    const { articles } = this.props;
    // debugger

    return articles
      .filter((d) => d.status === status)
      .map((d) =>
        <AdminCard
          caption={d.caption}
          uuid={d.uuid}
          className={"drag"}
        />
      )
  }

  updateArticle(articleId, status) {
    console.log('updateArticle' + articleId)
    const { articles } = this.props;
    let article = articles.find((t) => t.uuid === articleId);
    // article.status = status;
    // this.setState({
    //   articles: articles,
    //   selectedArticleId: null
    // });
  }

  componentDidMount() {
    let context = this;

    $('.drag').on('mousedown', function (e) {

      context.setState({
        selectedArticleId: '735f801f-133b-4e5c-9a91-3dfb6312b11d'
      });
      // var isDragging = true;
      var drag = $(this).clone().addClass('dragged').appendTo('.wrapper');
      var originalPosX = $(this).offset().left;
      var originalPosY = $(this).offset().top;
      // var startX = e.clientX - originalPosX;
      // var startY = e.clientY - originalPosY;
      // drag.css({ 'left': e.clientX - startX, 'top': e.clientY - startY })
      // drag.css({ 'transform-origin': Math.round(startX / drag.outerWidth() * 100) + '% ' + Math.round(startY / drag.outerHeight() * 100) + '%' })
      // drag.addClass('beginDrag')

      // $(window).on('mousemove', function (event) {
      //   if (isDragging) {
      //     // drag.css({ 'left': event.clientX - startX, 'top': event.clientY - startY })
      //     // if (isColliding(event.clientX, event.clientY, '.drop')) {
      //     //   drag.removeClass('beginDrag')
      //     //   drag.addClass('readyDrop')
      //     // } else {
      //     //   drag.removeClass('readyDrop')
      //     // }
      //   }
      // });

      $(window).on('mouseup', function (event) {
        // if (isDragging) {
        $(window).off('mousemove');
        if (isColliding(event.clientX, event.clientY, '.drop')) {
          // drag.removeClass('readyDrop').addClass('bye');

          context.updateArticle('735f801f-133b-4e5c-9a91-3dfb6312b11d', parseInt(event.target.id));

          // window.setTimeout(function () {
          //   onDrop()
          //   drag.remove()
          // }, 400)
        } else {
          // drag.animate({ 'top': originalPosY, 'left': originalPosX, 'opacity': 0 }, 400, function () {
          //   drag.remove()
          // })
        }
        // isDragging = false;
        // }
      })
    });

    store.dispatch(loadArticlesAction(200));
  }
  
  showAddForm = () => {
    this.setState({ showAddingForm: true })
  }

  addArticle = (caption) => {
    store.dispatch(articleInsert(uuidv4(), caption, ArticleStatus.created));
    this.setState({ showAddingForm: false })
  }

  render() {
    const { showAddingForm } = this.state;
    
    return (
      <div className="admin-page">

        <div
        // on
          id={ArticleStatus.created}
          className={classNames("drop", "admin-page__list")}>
          <h2 >Создание</h2>
          {this.renderArticlesByStatus ("created")}
          <Button
            className={"admin-page__add-button"}
            onClick={this.showAddForm}
            caption={
              <div className="admin-page__add-button-caption">
                <span className="admin-page__add-button-plus">
                  +
              </span>
                ДОБАВИТЬ СТАТЬЮ
              </div>
            }
          />
          {showAddingForm &&
            <AdminCardAddForm
              onSave={this.addArticle}
              onCancel={() => {
                this.setState({ showAddingForm: false })
              }}
            />}
        </div>

        <div
          id={ArticleStatus.checking}
          className={classNames("drop", "admin-page__list")}>
          <h2>Проверка</h2>
          {this.renderArticlesByStatus (ArticleStatus.checking)}
        </div>

        <div
          id={ArticleStatus.correcting}
          className={classNames("drop", "admin-page__list")}>
          <h2 >Коррекция</h2>
          {this.renderArticlesByStatus (ArticleStatus.correcting)}
        </div>

        <div
          id={ArticleStatus.published}
          className={classNames("drop", "admin-page__list")}>
          <h2 >Печать</h2>
          {this.renderArticlesByStatus (ArticleStatus.published)}
        </div>

      </div>
    )
  }
}

function mapState(state) {///TODO
  return {
    articles: selectArticles(state)
  }
}

export const AdminPage = connect(mapState)(AdminPageComponent);