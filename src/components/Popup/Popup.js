import React from 'react';
import './popup.scss';
import classNames from 'classnames';
import {bool} from 'prop-types';

export class Popup extends React.Component {

  static propTypes = {
    shown: bool,
    portfolioMode: bool
  };

  render() {
    const {children, shown, portfolioMode} = this.props;

    if (!shown) {
      return null;
    }

    return (
      <div className={classNames('popup', portfolioMode ? 'popup__portfolio-mode' : null)}>
        {children}
      </div>
    );

  }

}
