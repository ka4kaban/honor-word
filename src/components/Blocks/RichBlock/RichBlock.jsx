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
    history.push('/article/' + id);
  }
  render() {
    const { caption, date, img } = this.props;
    return (<div className="rich-block" onClick={this.onClick}>
      {img ? <img src={img} alt='' className="topic-block__background-img" /> : null}
      {caption}
      <div className="rich-block__date">
        {date}
      </div>
    </div>)
  }
}

export const RichBlock = withRouter(RichBlockComponent)