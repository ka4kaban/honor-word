import React from 'react';
import './admin-page.scss';
import $ from "jquery";
import { AdminCard } from './AdminCard/AdminCard';
import classNames from 'classnames';
import { AdminCardAddForm } from './AdminCardAddForm/AdminCardAddForm';
import { Button } from '../../components/Button/Button';

const StatusEnum = Object.freeze({ "created": 1, "checking": 2, "correcting": 3, "printing": 4 })

function onDrop() {
  $('.drop').css({ 'background': '#ff5722' })
  window.setTimeout(function () {
    $('.drop').css({ 'background': 'white' })
  }, 2500);
}

function isColliding(x, y, element2) {
  var e2 = {};
  e2.top = $(element2).offset().top;
  e2.left = $(element2).offset().left;
  e2.right = parseFloat($(element2).offset().left) + parseFloat($(element2).width());
  e2.bottom = parseFloat($(element2).offset().top) + parseFloat($(element2).height());

  if (x > e2.left && x < e2.right && y < e2.bottom && y > e2.top) {
    return true
  }
}

export class AdminPage extends React.Component {

  state = {
    showAddingForm: false
  }

  getArticlesTemplatesData() {
    return [{
      status: StatusEnum.created,
      caption: "Новая статья",
      uuid: "735f801f-133b-4e5c-9a91-3dfb6312b11d",
    }]
  }
  getCards(status) {
    return this.getArticlesTemplatesData()
      .filter((d) => d.status === status)
      .map((d) =>
        <AdminCard
          caption={d.caption}
          uuid={d.uuid}
          className={"drag"}
        />
      )
  }

  componentDidMount() {

    $('.drag').on('mousedown', function (e) {

      var isDragging = true;
      var drag = $(this).clone().addClass('dragged').appendTo('.wrapper');
      var originalPosX = $(this).offset().left;
      var originalPosY = $(this).offset().top;
      var startX = e.clientX - originalPosX;
      var startY = e.clientY - originalPosY;
      drag.css({ 'left': e.clientX - startX, 'top': e.clientY - startY })
      drag.css({ 'transform-origin': Math.round(startX / drag.outerWidth() * 100) + '% ' + Math.round(startY / drag.outerHeight() * 100) + '%' })
      drag.addClass('beginDrag')

      $(window).on('mousemove', function (event) {
        if (isDragging) {
          drag.css({ 'left': event.clientX - startX, 'top': event.clientY - startY })
          if (isColliding(event.clientX, event.clientY, '.drop')) {
            drag.removeClass('beginDrag')
            drag.addClass('readyDrop')
          } else {
            drag.removeClass('readyDrop')
          }
        }
      });

      $(window).on('mouseup', function (event) {
        if (isDragging) {
          $(window).off('mousemove');
          if (isColliding(event.clientX, event.clientY, '.drop')) {
            drag.removeClass('readyDrop').addClass('bye');

            window.setTimeout(function () {
              onDrop()
              drag.remove()
            }, 400)
          } else {
            drag.animate({ 'top': originalPosY, 'left': originalPosX, 'opacity': 0 }, 400, function () {
              drag.remove()
            })
          }
          isDragging = false;
        }
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

        <div className="admin-page__list">
          <h2>Создание</h2>
          {this.getCards(StatusEnum.created)}
          {/* <div className="button" onClick={this.addCard}>
            
          </div> */}
          <Button
            caption={"+ добавить статью"}
            onClick={this.showAddForm}
          />
          {showAddingForm && <AdminCardAddForm
            onSave={this.addCard}
            onCancel={() => {
              this.setState({ showAddingForm: false })
            }}
          />}
        </div>

        <div className={classNames("drop", "admin-page__list")}>
          <h2>Проверка</h2>
          {this.getCards(StatusEnum.checking)}
        </div>

        <div className="admin-page__list">
          <h2>Коррекция</h2>
          {this.getCards(StatusEnum.correcting)}
        </div>

        <div className="admin-page__list">
          <h2>Печать</h2>
          {this.getCards(StatusEnum.printing)}
        </div>

      </div>
    )
  }
}