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
    isEditing: false,
    caption: string,
  }
  constructor(props) {
    super(props);
    this.state = {
      isEditing: false,
      caption: props.caption
    }
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
    if(caption.length > 70){
      alert('Рекомендовано использовать не больше 70 знаков в заголовке чтобы он умещался на двух строках');
    }
    this.setState({ isEditing: false, caption: caption })
  }
  closeEditForm = () => {
    this.setState({ isEditing: false })
  }
  onDrug = () => {
    console.log('onDrug')
  }
  onDragOver = () => {
    console.log('onDragOver')
  }
  
  onClick = () => {
    console.log('onClick')
  }

  // componentDidMount() {
  //   const { handleDragStart } = this.props;
  //   this.addEventListener("dragstart", handleDragStart);
  // }
  handleDragStart = (e) => {
    const { handleDragStart, uuid } = this.props;
    // const { handleDragStart } = this.props;
    handleDragStart(e, uuid);
  }
  render() {
    const {className, uuid, handleDragStart } = this.props;
    
    const { caption,isEditing } = this.state;
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
        id={uuid}
        onDoubleClick={this.onDoubleClick}
        onDragStart={this.handleDragStart}
        // onDrag={this.onDrug}
        // onDragEnd={this.onDragOver}
        onClick={this.onClick}>
        {caption}
      </div>
    )
  }
}