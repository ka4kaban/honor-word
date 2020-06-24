import React from 'react';
import string from 'prop-types';
import './admin-card.scss';


export class AdminCard extends React.Component {
  static propTypes = {
    caption: string,
    uuid: string,
  }
  onDoubleClick(){
    
  }
  render() {
    const { caption } = this.props;
    return (
      <div className="admin-card"  >
        {caption}
      </div>
    )
  }
}