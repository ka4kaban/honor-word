import React from 'react';
import string, { func } from 'prop-types';
import classNames from 'classnames';

import './button.scss';

export class Button extends React.Component {
  static propTypes = {
    caption: string,
    onClick: func,
    className: string
  }
  render() {
    const { caption, className, onClick } = this.props;
    return (
      <div className={classNames("button", className)} onClick={onClick} >
        {caption}
      </div>
    )
  }
}