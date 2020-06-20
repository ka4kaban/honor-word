import React from 'react';
import { HeaderItem } from './HeaderItem/HeaderItem';
import './header.scss';


export class Header extends React.Component {
  render() {
    return (<div className="header">
      <HeaderItem
        caption="Честное слово"
        to=""
      />
      <div className="header__bar">
        <HeaderItem
          caption="Тульский ежедневник"
          to=""
        />
        <HeaderItem
          caption="Политика"
          to=""
        />
        <HeaderItem
          caption="Экономика"
          to=""
        />
        <HeaderItem
          caption="Происшествия"
          to=""
        />
        <HeaderItem
          caption="Тульский ежедневник"
          to=""
        />
      </div>
      <HeaderItem
        caption="Войти"
        to=""
      />
    </div>)
  }
}