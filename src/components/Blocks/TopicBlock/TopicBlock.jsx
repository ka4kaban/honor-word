import React from 'react';
import string from 'prop-types';
import { withRouter } from 'react-router';
import './topic-block.scss';


class TopicBlockComponent extends React.Component {
  static propTypes = {
    caption: string,
    id: string,
    date: string,
  }
  onClick = () => {
    const { id, history } = this.props;
    history.push('/news/' + id);
  }
  render() {
    const { caption, date } = this.props;
    return (<div className="topic-block" onClick={this.onClick}>
      {caption}
      <div className="topic-block__date">
        {date}
      </div>
    </div>)
  }
}

export const TopicBlock = withRouter(TopicBlockComponent)