import React from 'react';
import './comments-list.scss'
import classNames from 'classnames';
import { string, any, func } from 'prop-types';
import { Comment } from './comment/Comment';

// export const ButtonStyle = {
//   DEFAULT: 'default',
//   BIG_PINK: 'big-pink',
//   BIG_PINK_FULL: 'big-pink-full'
// };

export class CommentsList extends React.Component {

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
      <div>
        <div className={'comments-list__header'}>КОММЕНТАРИИ</div>
        <Comment />
        {/* <button>
          {children}
        </button> */}
      ЕЩЁ 147 КОММЕНТАРИЕВ
      </div>
    );
  }

}
