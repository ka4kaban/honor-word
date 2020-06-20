import React from 'react';
import string from 'prop-types';
// import { withRouter } from 'react-router';
import './topic-block.scss';


export class TopicBlock extends React.Component {
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
    return (<div className="topic-block" onClick={this.onClick}>
      {caption}
      <div className="topic-block__date">
        {date}
      </div>
    </div>)
  }
}

// export const TopicBlock = withRouter(TopicBlockComponent)