import React from 'react';
import './admin-page.scss';
import { AdminCard } from './AdminCard/AdminCard';

const StatusEnum = Object.freeze({ "created": 1, "checking": 2, "correcting": 3, "printing": 4 })
export class AdminPage extends React.Component {
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
        />
      )
  }
  render() {
    return (
      <div className="admin-page">

        <div className="admin-page__list">
          <h2>Создание</h2>
          {this.getCards(StatusEnum.created)}
          <div className="button">
            + добавить статью
          </div>
        </div>

        <div className="admin-page__list">
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