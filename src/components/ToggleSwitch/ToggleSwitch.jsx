import React from 'react';
import './toggle-switch.scss';

export class ToggleSwitch extends React.Component {
  render() {
    return (
      <div className="toggle-switch__container">
        <label className="switch">
          <input type="checkbox" />
          <span className="slider"></span>
        </label>
      </div>
    );
  }
}