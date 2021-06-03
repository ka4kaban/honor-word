import React from 'react';
import string from 'prop-types';
import { withRouter } from 'react-router';
import './feed-block.scss';
import { formatDate } from '../../../helpers/dateHelper';


class FeedBlockComponent extends React.Component {
  static propTypes = {
    caption: string,
    uuid: string,
    date: string,
    img: string,
  }

  onClick = () => {
    const { uuid, history } = this.props;
    history.push('/article/' + uuid);
  }

  render() {
    const { caption, date} = this.props;
    
    return (<div className="feed-block" onClick={this.onClick}>
      <div className="feed-block__caption">
        {caption}
      </div>
      <div className="feed-block__date">
        topic, {formatDate(date)}
      </div>
    </div>)
  }
}

export const FeedBlock = withRouter(FeedBlockComponent)