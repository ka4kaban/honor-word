import React from 'react';
import './first-line.scss';
import { TopicBlock } from '../Blocks/TopicBlock/TopicBlock';
import { RichBlock } from '../Blocks/RichBlock/RichBlock';


export class FirstLine extends React.Component {
  getPrimaryBlockData() {
    return {
      id:'',
      caption: "Новые правила жизни туляков: «масочный режим», открытие бассейнов, магазинов и парков",
      img: require('./images/2466408.jpg'),
      date: "8:54"
    }
  }
  getSecondaryBlockData() {

  }
  render() {
    const primaryBlockData = this.getPrimaryBlockData();
    return (<div className="first-line">
      <div className="first-line__column" style={{ flex: 2 }}>
        <div className="first-line__row">
          <TopicBlock 
          size='large'
            id={primaryBlockData.id}
            caption={primaryBlockData.caption}
            img={primaryBlockData.img}
            date={primaryBlockData.date}
          />
        </div>
      </div>
      <div className="first-line__column" style={{ flex: 1 }}>
        <div className="first-line__row">
          <TopicBlock
            caption="Под Тулой незаконно захоронили более 3 млн литров нефтепродуктов"
            date="8:54"
          />
        </div>
        <div className="first-line__row">
          <TopicBlock
            caption="Один месяц будет на что купить продукты"
            date="8:54"
          />
        </div>
        {/* <div className="first-line__row">
          <TopicBlock
            caption="Разрешены торговля и прогулки: в каких регионах России начали снимать карантинные меры"
            date="8:54"
          />
        </div> */}
        {/* <div className="first-line__row">
          <TopicBlock
            caption="В Туле под боком у «Тулачермета» выращивают овощи на продажу"
            date="8:54"
          />
        </div> */}
      </div>
    </div>)
  }
}