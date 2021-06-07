import React from 'react';
import './face-block.scss';

export class FaceBlock extends React.Component {
  render() {
    const { img } = this.props;
    return (
      <div>
        {img ? <img src={img} alt='' className="topic-block__background-img" /> : null}
        Получил представление за дороги
        Игорь Авдеев
      </div>
    );
  }
}