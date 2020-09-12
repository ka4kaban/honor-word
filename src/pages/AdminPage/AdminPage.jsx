import React from 'react';
import './admin-page.scss';
import $ from "jquery";
import { AdminCard } from './AdminCard/AdminCard';
import classNames from 'classnames';
import { AdminCardAddForm } from './AdminCardAddForm/AdminCardAddForm';
import { Button } from '../../components/Button/Button';

const StatusEnum = Object.freeze({ "created": 5671, "checking": 5672, "correcting": 5673, "printing": 5674 })
// const StatusIdsEnum = Object.freeze({ "adminPageCreatedList": 1, "adminPageCheckingList": 2, "adminPageCorrectingList": 3, "adminPagePrintingList": 4 });
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
    debugger
    cardCoord.top = card.offsetTop;
    cardCoord.left = card.offsetLeft;
    cardCoord.right = parseFloat(card.offsetLeft) + parseFloat(card.offsetWidth);
    cardCoord.bottom = parseFloat(card.offsetTop) + parseFloat(card.offsetHeight);

    debugger
    if (x > cardCoord.left && x < cardCoord.right && y < cardCoord.bottom && y > cardCoord.top) {
      return true;
    }

  }
  debugger
  return false;
  // e2.top = $(elemenClass).offset().top;
  // e2.left = $(elemenClass).offset().left;
  // e2.right = parseFloat($(elemenClass).offset().left) + parseFloat($(elemenClass).width());
  // e2.bottom = parseFloat($(elemenClass).offset().top) + parseFloat($(elemenClass).height());

  // if (x > e2.left && x < e2.right && y < e2.bottom && y > e2.top) {
  //   return true
  // }
}

export class AdminPage extends React.Component {

  state = {
    showAddingForm: false,
    selectedCardId: null,
    cards: this.getArticlesTemplatesData()
  }

  getArticlesTemplatesData() {
    return [{
      status: StatusEnum.created,
      caption: "Новая статьяНовая статьяНовая статьяНовая статьяНовая статьяНовая статьяНовая статьяНовая статьяНовая статья",
      uuid: "735f801f-133b-4e5c-9a91-3dfb6312b11d",
    }]
  }

  filterCards(status) {
    const { cards } = this.state;
    return cards
      .filter((d) => d.status === status)
      .map((d) =>
        <AdminCard
          caption={d.caption}
          uuid={d.uuid}
          className={"drag"}
        />
      )
  }

  updateCard(cardId, status) {
    const { cards } = this.state;
    let card = cards.find((t) => t.uuid === cardId);
    card.status = status;
    this.setState({
      cards: cards,
      selectedCardId: null
    });
  }

  componentDidMount() {
    let context = this;

    // get
    $('.drag').on('mousedown', function (e) {

      debugger
      context.setState({
        selectedCardId: '735f801f-133b-4e5c-9a91-3dfb6312b11d'
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

            debugger;
            // 
            context.updateCard('735f801f-133b-4e5c-9a91-3dfb6312b11d', parseInt(event.target.id));

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
  }
  showAddForm = () => {
    this.setState({ showAddingForm: true })
  }

  addCard = (caption) => {
    debugger
    // this.setState({ showAddingForm: true })
  }


  render() {
    const { showAddingForm } = this.state;
    return (
      <div className="admin-page">

        <div
          id={StatusEnum.created}
          className={classNames("drop", "admin-page__list")}>
          <h2 >Создание</h2>
          {this.filterCards(StatusEnum.created)}
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
              onSave={this.addCard}
              onCancel={() => {
                this.setState({ showAddingForm: false })
              }}
            />}
        </div>

        <div
          id={StatusEnum.checking}
          className={classNames("drop", "admin-page__list")}>
          <h2>Проверка</h2>
          {this.filterCards(StatusEnum.checking)}
        </div>

        <div
          id={StatusEnum.correcting}
          className={classNames("drop", "admin-page__list")}>
          <h2 >Коррекция</h2>
          {this.filterCards(StatusEnum.correcting)}
        </div>

        <div
          id={StatusEnum.printing}
          className={classNames("drop", "admin-page__list")}>
          <h2 >Печать</h2>
          {this.filterCards(StatusEnum.printing)}
        </div>

      </div>
    )
  }
}