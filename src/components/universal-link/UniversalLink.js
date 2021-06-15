import React from 'react';
import './universal-link.scss';
import classNames from 'classnames';
import {any, func, string, bool} from 'prop-types';
import startsWith from 'lodash/startsWith'
import { HashLink as Link } from 'react-router-hash-link';

UniversalLink.propTypes = {
  className: string,
  href: string,
  children: any,
  target: string,
  onClick: func,
  noStyle: bool
};

UniversalLink.defaultProps = {
  onClick() {

  }
};

export function UniversalLink({className, children, href, target, onClick, noStyle}) {

  if (startsWith(href, 'http') || startsWith(href, 'tel') || startsWith(href, '#')) {
    return (
      <a className={classNames('universal-link', {'universal-link_no-style' : noStyle}, className)}
         target={target}
         onClick={onClick}
         href={href}>
        {children}
      </a>
    );
  } else {
    return (
      <Link className={classNames('universal-link', {'universal-link_no-style' : noStyle}, className)}
            onClick={onClick}
            to={href}>
        {children}
      </Link>
    );
  }

}
