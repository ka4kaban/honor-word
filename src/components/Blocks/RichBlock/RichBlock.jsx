import React from 'react';
import string from 'prop-types';
import './rich-block.scss';
import { withRouter } from 'react-router';


export class RichBlockComponent extends React.Component {
  static propTypes = {
    caption: string,
    id: string,
    img: string,
    date: string,
  }
  onClick = () => {
    const { id, history } = this.props;
    history.push('/news/' + id);
  }
  render() {
    const { caption, date } = this.props;
    return (<div className="rich-block" onClick={this.onClick}>
      {caption}
      <div className="rich-block__date">
        {date}
      </div>
    </div>)
  }
}

export const RichBlock = withRouter(RichBlockComponent)