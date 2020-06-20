import React from 'react';
import string from 'prop-types';
import './rich-block.scss';


export class RichBlock extends React.Component {
  static propTypes = {
    caption: string,
    to: string,
    date: string,
  }
  onClick = () => {
    // const { to, history } = this.props;
    // history.push(to);
  }
  render() {
    const { caption, date } = this.props;
    return (<div className="rich-block" onClick={this.onClick}>
      {caption}
      {date}
    </div>)
  }
}