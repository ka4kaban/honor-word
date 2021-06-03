import React from 'react';
import './faces.scss';

export class Faces extends React.Component {
  render() {
    return (
      <div className="faces">
        <div className="faces__spoiler"></div>
        <div className="faces__caption">
          ЛИЦА
        </div>
        <div className="faces__toogler-container">
          <div className="faces__toogler">
          <div className="faces__toogler-circle">
            
          </div>
          </div>
        </div>
      </div>
    );
  }
}