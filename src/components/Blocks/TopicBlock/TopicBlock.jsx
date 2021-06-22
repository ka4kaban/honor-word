import React from 'react';
import string, {bool} from 'prop-types';
import { withRouter } from 'react-router';
import classNames from 'classnames';
import './topic-block.scss';
import { formatDate } from '../../../helpers/dateHelper';


class TopicBlockComponent extends React.Component {
  static propTypes = {
    caption: string,
    uuid: string,
    date: string,
    topic: string,
    editable: bool,
    size: 'small' | 'large' | undefined
  }

  onClick = () => {
    const { uuid, history } = this.props;
    history.push('/article/:' + uuid);
  }

  render() {
    let { caption, date, img, size, topic, editable } = this.props; //TODO const
    img = img || require('./images/2466408.jpg');
    topic = topic || 'topic';

    return (
      <div className={classNames('topic-block', size === 'large' ? 'topic-block__large' : undefined)} onClick={this.onClick}>
        {editable ? editable: null}
        {img ? <div className="topic-block__background-img-container">
          <img src={img} alt='' className="topic-block__background-img" />
        </div> : null}
        <div className="topic-block__info-container">
          <div className="topic-block__info">

            <div className="topic-block__info-caption">
              {caption}
            </div>
            <div className="topic-block__info-date">
              {topic + ', ' + formatDate(date)}
            </div>

          </div>
        </div>
      </div>
    );
  }
}

export const TopicBlock = withRouter(TopicBlockComponent)