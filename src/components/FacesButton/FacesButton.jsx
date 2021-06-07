import React from 'react';
import './faces-button.scss';
import classNames from 'classnames';
import { ToggleSwitch } from '../ToggleSwitch/ToggleSwitch';

export class FacesButton extends React.Component {
  // state = {
  //   cheked: false,
  // }

  onCheked = (event) => {
    console.log(11)
    if (event.target.type === 'checkbox') {
      // const { cheked } = this.state;
      const { onChekedChange } = this.props;
      onChekedChange();
      // this.setState({
      //   cheked: !cheked,
      // });
    }
    // event.preventDefault();
  }
  render() {
    // const { cheked } = this.state;
    return (
      <label className='faces' onClick={this.onCheked}>
        <div className="faces__spoiler"></div>
        <div className="faces__caption">
          ЛИЦА
        </div>
        <div className="faces__toogler-container">
          {/* <div className="toggle-switch__container"> */}
          <div className="switch">
            <input type="checkbox" />
            <span className="slider"></span>
          </div>
          {/* {cheked && 'cheked'} */}
          {/* </div> */}
        </div>
      </label>
    );
  }
}