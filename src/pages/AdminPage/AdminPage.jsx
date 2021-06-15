import React from 'react';
import './admin-page.scss';
import $ from "jquery";
import { AdminCard } from './AdminCard/AdminCard';
import classNames from 'classnames';
import { v4 as uuidv4 } from 'uuid';
import { AdminCardAddForm } from './AdminCardAddForm/AdminCardAddForm';
// import { Button } from '../../components/button/Button';
import { store } from '../../redux/configureStore';
import { articleInsert } from '../../redux/actions/article/articleInsert';
// import { loadArticlesAction } from '../../redux/actions/article/loadArticleByIdAction';
import { selectArticles } from '../../redux/reducers/articlesReducer';
import { connect } from 'react-redux';
import { loadArticlesAction } from '../../redux/actions/articles/loadArticlesAction';
import { articleUpdate } from '../../redux/actions/article/articleUpdate';
import { Header } from '../../components/Header/Header';
import { HeaderItem } from '../../components/Header/HeaderItem/HeaderItem';
import { UniversalLink } from '../../components/universal-link/UniversalLink';
import { Button } from '../../components/button/Button';
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
    draggedId: null
  }

  // caption: "Москалькова: пикет нельзя рассматривать как митинг даже во время пандемии"
  // content: "Одиночное пикетирование, даже в условиях пандемии коронавируса, не может рассматриваться как массовое мероприятие. Об этом заявила уполномоченная по правам человека РФ Татьяна Москалькова на видеоконференции с комиссаром Совета Европы по правам человека Дуней Миятович. Таким образом она прокомментировала задержание муниципального депутата и журналиста Ильи Азара."
  // date: "2020-06-23T00:13:40.000Z"
  // uuid: "5898f656-a39c-45e7-9e35-aa1c307c8a69"
  // _id: "5ef20ae393110b40386b7d05"
  // constructor(props){
  //   super(props);

  //   // debugger;
  // }
  renderArticlesByStatus(status) {
    const { articles } = this.props;
    // debugger

    return articles
      .filter((d) => d.status === status)
      .map((d) =>
        <AdminCard
          caption={d.caption}
          uuid={d.uuid}
          // className={"drag"}
          handleDragStart={this.handleDragStart}
        />
      )
  }

  updateArticle(articleId, status) {
    console.log('updateArticle' + articleId)
    const { articles } = this.props;
    let article = articles.find((t) => t.uuid === articleId);
    // article.status = status;

    store.dispatch(articleUpdate(articleId, article.caption, status));
    // this.setState({
    //   articles: articles,
    //   selectedArticleId: null
    // });
  }

  componentDidMount() {

    // var draggable = document.querySelectorAll('[draggable]')
    // var targets = document.querySelectorAll('[data-drop-target]');

    let context = this;

    // $('.drag').on('mousedown', function (e) {

    //   context.setState({
    //     selectedArticleId: '735f801f-133b-4e5c-9a91-3dfb6312b11d'
    //   });
    //   // var isDragging = true;
    //   var drag = $(this).clone().addClass('dragged').appendTo('.wrapper');
    //   var originalPosX = $(this).offset().left;
    //   var originalPosY = $(this).offset().top;
    //   // var startX = e.clientX - originalPosX;
    //   // var startY = e.clientY - originalPosY;
    //   // drag.css({ 'left': e.clientX - startX, 'top': e.clientY - startY })
    //   // drag.css({ 'transform-origin': Math.round(startX / drag.outerWidth() * 100) + '% ' + Math.round(startY / drag.outerHeight() * 100) + '%' })
    //   // drag.addClass('beginDrag')

    //   // $(window).on('mousemove', function (event) {
    //   //   if (isDragging) {
    //   //     // drag.css({ 'left': event.clientX - startX, 'top': event.clientY - startY })
    //   //     // if (isColliding(event.clientX, event.clientY, '.drop')) {
    //   //     //   drag.removeClass('beginDrag')
    //   //     //   drag.addClass('readyDrop')
    //   //     // } else {
    //   //     //   drag.removeClass('readyDrop')
    //   //     // }
    //   //   }
    //   // });

    //   $(window).on('mouseup', function (event) {
    //     // if (isDragging) {
    //     $(window).off('mousemove');
    //     if (isColliding(event.clientX, event.clientY, '.drop')) {
    //       // drag.removeClass('readyDrop').addClass('bye');

    //       context.updateArticle('735f801f-133b-4e5c-9a91-3dfb6312b11d', parseInt(event.target.id));

    //       // window.setTimeout(function () {
    //       //   onDrop()
    //       //   drag.remove()
    //       // }, 400)
    //     } else {
    //       // drag.animate({ 'top': originalPosY, 'left': originalPosX, 'opacity': 0 }, 400, function () {
    //       //   drag.remove()
    //       // })
    //     }
    //     // isDragging = false;
    //     // }
    //   })
    // });

    var targets = document.querySelectorAll('[data-drop-target]');

    for (var i = 0; i < targets.length; i++) {
      let target = targets[i];
      target.addEventListener("dragover", (e) => this.handleOverDrop(e, target));
      target.addEventListener("drop", (e) => this.handleOverDrop(e, target));
      // targets[i].addEventListener("dragover", this.handleOverDrop);
      // targets[i].addEventListener("drop", this.handleOverDrop);
      // targets[i].addEventListener("dragover", this.handleOverDrop);
      // targets[i].addEventListener("drop", this.handleOverDrop);

      target.addEventListener("dragenter", this.handleDragEnterLeave);
      target.addEventListener("dragleave", this.handleDragEnterLeave);
    }

    store.dispatch(loadArticlesAction(200));
    // debugger;
  }

  showAddForm = () => {
    this.setState({ showAddingForm: true })
  }

  addArticle = (caption) => {
    store.dispatch(articleInsert(uuidv4(), caption, ArticleStatus.created));
    this.setState({ showAddingForm: false })
  }

  handleDragStart(e, uuid) {
    // this.setState({
    //   draggedId: uuid
    // })
    e.dataTransfer.setData("text", uuid); //note: using "this" is the same as using: e.target.
  }//end function


  //The dragenter event fires when dragging an object over the target. 
  //The css class "drag-enter" is append to the targets object.
  handleDragEnterLeave(e) {
    if (e.type == "dragenter") {
      this.className = "drag-enter"
    } else {
      this.className = "" //Note: "this" referces to the target element where the "dragenter" event is firing from.
    }
  }//end function



  //Function handles dragover event eg.. moving your source div over the target div element.
  //If drop event occurs, the function retrieves the draggable element’s id from the DataTransfer object.
  handleOverDrop(e, target) {
    e.preventDefault();
    //Depending on the browser in use, not using the preventDefault() could cause any number of strange default behaviours to occur.
    if (e.type != "drop") {
      return; //Means function will exit if no "drop" event is fired.
    }
    //Stores dragged elements ID in var draggedId
    var draggedId = e.dataTransfer.getData("text");
    //Stores referrence to element being dragged in var draggedEl
    var draggedEl = document.getElementById(draggedId);

    //if the event "drop" is fired on the dragged elements original drop target e.i..  it's current parentNode, 
    //then set it's css class to ="" which will remove dotted lines around the drop target and exit the function.
    if (draggedEl.parentNode == this) {
      target.className = "";
      // alert(1)
      return; //note: when a return is reached a function exits.
    }
    // alert(2)
    //Otherwise if the event "drop" is fired from a different target element, detach the dragged element node from it's
    //current drop target (i.e current perantNode) and append it to the new target element. Also remove dotted css class. 
    draggedEl.parentNode.removeChild(draggedEl);
    target.appendChild(draggedEl); //Note: "this" references to the current target div that is firing the "drop" event.
    target.className = "";

    // context
    this.updateArticle(draggedId, e.target.id);

  }//end Function


  render() {
    const { showAddingForm } = this.state;

    return (
      <div>
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
        <div className="admin-page">

          <span className='creation-container'>

            <div
              // on
              data-drop-target="true"
              id={ArticleStatus.created}
            // className={classNames("drop", "admin-page__list")}
            >
              <h2 >Создание</h2>

              {showAddingForm &&
                <AdminCardAddForm
                  onSave={this.addArticle}
                  onCancel={() => {
                    this.setState({ showAddingForm: false })
                  }}
                />}

              {this.renderArticlesByStatus("created")}


            </div>

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
          </span>

          <div
            data-drop-target="true"
            id={ArticleStatus.checking}
          // className={classNames("drop", "admin-page__list")}
          >
            <h2>Проверка</h2>
            {this.renderArticlesByStatus(ArticleStatus.checking)}
          </div>

          <div
            data-drop-target="true"
            id={ArticleStatus.correcting}
          // className={classNames("drop", "admin-page__list")}
          >
            <h2 >Коррекция</h2>
            {this.renderArticlesByStatus(ArticleStatus.correcting)}
          </div>

          <div
            data-drop-target="true"
            id={ArticleStatus.published}
          // className={classNames("drop", "admin-page__list")}
          >
            <h2 >Печать</h2>
            {this.renderArticlesByStatus(ArticleStatus.published)}
          </div>
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