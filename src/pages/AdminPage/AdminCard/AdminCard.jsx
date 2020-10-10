import React from 'react';
import string from 'prop-types';
import classNames from 'classnames';
import { store } from '../../../redux/configureStore';
import './admin-card.scss';
import { AdminCardAddForm } from '../AdminCardAddForm/AdminCardAddForm';
import { articleUpdate } from '../../../redux/actions/article/articleUpdate';


export class AdminCard extends React.Component {
  static propTypes = {
    caption: string,
    uuid: string,
    className: string
  }
  state = {
    isEditing: false
  }
  onDoubleClick = () => {
    const { isEditing } = this.state;
    if (!isEditing) {
      this.setState({ isEditing: true })
    }
  }
  updateCaption = (caption) => {
   const { uuid } = this.props;
    store.dispatch(articleUpdate(uuid, caption));
  }
  closeEditForm = () => {
    this.setState({ isEditing: false })
  }
  onDrug = () => {
    console.log('onDrug')
  }
  onClick = () => {
    console.log('onClick')
  }
  render() {
    const { caption, className, uuid } = this.props;
    const { isEditing } = this.state;
    if (isEditing) {
      return (<AdminCardAddForm
        caption={caption}
        uuid={uuid}
        onSave={this.updateCaption}
        onCancel={this.closeEditForm}
      />)
    }
    return (
      <div className={classNames("admin-card", className)}
        draggable="true"
        onDoubleClick={this.onDoubleClick}
        onDrag={this.onDrug}
        onClick={this.onClick}>
        {caption}
      </div>
    )
  }
}