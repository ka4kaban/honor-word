import React from 'react';
import string from 'prop-types';
import { withRouter } from 'react-router';
import './topic-block.scss';
import { formatDate } from '../../../helpers/dateHelper';


class TopicBlockComponent extends React.Component {
  static propTypes = {
    caption: string,
    uuid: string,
    date: string,
  }

  onClick = () => {
    const { uuid, history } = this.props;
    history.push('/news/:' + uuid);
  }

  render() {
    const { caption, date } = this.props;
    return (<div className="topic-block" onClick={this.onClick}>
      {caption}
      <div className="topic-block__date">
        {formatDate(date)}
      </div>
    </div>)
  }
}

export const TopicBlock = withRouter(TopicBlockComponent)