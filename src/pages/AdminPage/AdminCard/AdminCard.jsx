import React from 'react';
import string from 'prop-types';
import classNames from 'classnames';

import './admin-card.scss';


export class AdminCard extends React.Component {
  static propTypes = {
    caption: string,
    uuid: string,
    className: string
  }
  onDoubleClick() {

  }
  render() {
    const { caption,className } = this.props;
    return (
      <div className={classNames("admin-card", className)} >
        {caption}
      </div>
    )
  }
}