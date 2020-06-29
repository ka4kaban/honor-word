import React from 'react';
import string, { func } from 'prop-types';
import classNames from 'classnames';

import './admin-card-add-form.scss';
import { Button } from '../../../components/Button/Button';


export class AdminCardAddForm extends React.Component {
  static propTypes = {
    uuid: string,
    onCancel: func,
    onSave: func,
    className: string
  }
  state = {
    caption: ""
  }
  onCaptionChange = (event) => {
    this.setState({
      caption: event.target.value
    })
  }
  render() {
    const { onSave, className, onCancel } = this.props;
    const { caption } = this.state;

    return (
      <div className={classNames("admin-card-add-form", className)} >
        <textarea className="admin-card-add-form__textarea" onChange={this.onCaptionChange}>
          {caption}
        </textarea>

        <div className="admin-card-add-form__buttons-container" >
          <Button
            className={"admin-card-add-form__save-button"}
            caption={"Сохранить"}
            onClick={() => onSave(caption)}
          />
          <Button
            className={"admin-card-add-form__cancel-button"}
            caption={"Отмена"}
            onClick={onCancel}
          />
        </div>
      </div>
    )
  }
}