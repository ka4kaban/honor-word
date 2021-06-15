import React from 'react';
import './comment.scss'
import classNames from 'classnames';
import { string, any, func } from 'prop-types';

// export const ButtonStyle = {
//   DEFAULT: 'default',
//   BIG_PINK: 'big-pink',
//   BIG_PINK_FULL: 'big-pink-full'
// };

export class Comment extends React.Component {

  static propTypes = {
    className: string,
    children: any,
    onClick: func,
    // buttonStyle: string
  };

  static defaultProps = {
    onClick() {
    },
    // buttonStyle: ButtonStyle.DEFAULT
  };

  render() {
    const { className, children, onClick, buttonStyle } = this.props;

    return (
      <div className='comment'>

        <div className='comment__photo'>

        </div>
        <div className='comment__content'>
          <div className='comment__top-content'>
            <div>
              <div className='comment__header'>Алексей Пескарёв</div>
              <div className='comment__header-info'>12:04, 15 мая 2020</div>
            </div>
            <div className='comment__rating'>
              <div className='comment__rating-down'>-</div>
              <div className='comment__rating-value'>+34</div>
              <div className='comment__rating-up'>+</div>
            </div>
          </div>
          <div className='comment__content-body'>
            <div>Какой бред! Что же делать теперь??!!!</div>
            <div>Ответить</div>
          </div>
        </div>

      </div>
    );
  }

}
