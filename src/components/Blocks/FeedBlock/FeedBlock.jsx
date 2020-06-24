import React from 'react';
import string from 'prop-types';
import { withRouter } from 'react-router';
import './feed-block.scss';
import { formatDate } from '../../../helpers/dateHelper';


class FeedBlockComponent extends React.Component {
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
    return (<div className="feed-block" onClick={this.onClick}>
      {caption}
      <div className="feed-block__date">
        {formatDate(date)}
      </div>
    </div>)
  }
}

export const FeedBlock = withRouter(FeedBlockComponent)