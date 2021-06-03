import React from 'react';
import './faces.scss';
import classNames from 'classnames';
import { ToggleSwitch } from '../ToggleSwitch/ToggleSwitch';

export class Faces extends React.Component {
  state = {
    cheked: false,
  }

  onCheked = () => {
    this.setState({
      cheked: !this.state.cheked,
    });
  }
  render() {
    const { cheked } = this.state;
    return (
      <div className={'faces'} onClick={this.onCheked}>
        <div className="faces__spoiler"></div>
        <div className="faces__caption">
          ЛИЦА
        </div>
        <div className="faces__toogler-container">

          <ToggleSwitch />
          {/* <div className="faces__toogler">
            <div className="faces__toogler-circle">

            </div>
          </div> */}
        </div>
      </div>
    );
  }
}

//classNames("faces", cheked ?'faces_red': '')