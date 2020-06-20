import React from 'react';
import './header-item.scss';
import string from 'prop-types';

export class HeaderItem extends React.Component {
  static propTypes = {
    caption: string,
    to: string
  }

  render() {
    const { caption } = this.props;
    return (<div className="header-item">
      {caption}
    </div>)
  }
}