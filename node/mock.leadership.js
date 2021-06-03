// import _ from 'lodash';
// var url = require('url');
// import { v4 as uuidv4 } from 'uuid';
// import { allDistricts, allRegions } from '../../../utils/geoUtil';
const { _ } = require('lodash');
const { v4: uuidv4 } = require('uuid');

exports.leadership = function() {
  return {
    period: {
      dateFrom: '2019-01-01',
      dateTo: '2019-08-01',
    },
    person: createPerson(),
    data: {
      persons: createSimplePersonsModel(),
      // competence: {
      //   average: averageData,
      //   best: bestData,
      // },
    },
  };
}

const averageData = [
  {
    caption: 'Лидерство',
    value: 6.1,
    icon: 'leadership',
  },
  {
    caption: 'Результативность',
    value: 6.0,
    icon: 'effectiveness',
  },
  {
    caption: 'Управление собой',
    value: 2.5,
    icon: 'selfControl',
  },
  {
    caption: 'Стратегическое мышление',
    value: 3.1,
    icon: 'strategicThinking',
  },
  {
    caption: 'Инновационность',
    value: 0.5,
    icon: 'innovativeness',
  },
  {
    caption: 'Коммуникативность',
    value: 5.0,
    icon: 'communicativeness',
  },
];

const bestData = [
  {
    caption: 'Лидерство',
    value: 9,
    icon: 'leadership',
  },
  {
    caption: 'Результативность',
    value: 8,
    icon: 'effectiveness',
  },
  {
    caption: 'Управление собой',
    value: 8.5,
    icon: 'selfControl',
  },
  {
    caption: 'Стратегическое мышление',
    value: 9.3,
    icon: 'strategicThinking',
  },
  {
    caption: 'Инновационность',
    value: 7.5,
    icon: 'innovativeness',
  },
  {
    caption: 'Коммуникативность',
    value: 8.2,
    icon: 'communicativeness',
  },
];

const competence = [
  {
    caption: 'Лидерство',
    value: 6.5,
    icon: 'leadership',
    referenceValue: 0.6,
  },
  {
    caption: 'Результативность',
    value: 6.3,
    icon: 'effectiveness',
    referenceValue: -0.2,
  },
  {
    caption: 'Управление собой',
    value: 7.5,
    icon: 'selfControl',
    referenceValue: +0.2,
  },
  {
    caption: 'Стратегическое мышление',
    value: 9.1,
    icon: 'strategicThinking',
    referenceValue: 0.6,
  },
  {
    caption: 'Инновационность',
    value: 6.5,
    icon: 'innovativeness',
    referenceValue: -0.6,
  },
  {
    caption: 'Коммуникативность',
    value: 6.0,
    icon: 'communicativeness',
    referenceValue: 0,
  },
];

const staffNumber = [
  {
    caption: 'Отдел выездных проверок',
    items: [
      {
        value: 7,
      },
      {
        value: 7,
      },
      {
        value: 4,
      },
      {
        value: 7,
      },
      {
        value: 4,
      },
    ],
  },
  {
    caption: 'Урегулирование задолженности',
    items: [
      {
        value: 1,
      },
      {
        value: 15,
      },
      {
        value: 1,
      },
      {
        value: 15,
      },
      {
        value: 1,
      },
    ],
  },
  {
    caption: 'Камеральный контроль',
    items: [{ value: 2 }, { value: 2 }, { value: 10 }, { value: 2 }, { value: 2 }],
  },
  {
    caption: 'ИО',
    items: [{ value: 4 }, { value: 3 }, { value: 15 }, { value: 4 }, { value: 3 }],
  },
  {
    caption: 'Финансовый отдел',
    items: [{ value: 8 }, { value: 6 }, { value: 20 }, { value: 8 }, { value: 6 }],
  },
  {
    caption: 'Общий отдел',
    items: [{ value: 5 }, { value: 10 }, { value: 25 }, { value: 5 }, { value: 10 }],
  },
  {
    caption: 'Отдел кадров',
    items: [{ value: 10 }, { value: 14 }, { value: 30 }, { value: 5 }, { value: 10 }],
  },
];

const management = [
  {
    caption: 'Численность в органе',
    value: 100,
    subitems: [],
  },
  //добавить
  {
    caption: 'Текучесть',
    value: 12,
    subitems: [],
  },
  {
    caption: 'Количество подведомственных органов',
    value: 12,
    subitems: [],
  },
  {
    caption: '',
    // value: 45123,
    // currency: ' руб./мес.',
    subitems: [
      // {
      //   caption: '',
      //   // value: 45123,
      //   // currency: ' руб./мес.',
      //   subitems: [],
      // },
    ],
  },
  {
    caption: '',
    subitems: [],
  },
  // {
  //   caption: 'Средний доход в органе',
  //   value: 45123,
  //   currency: ' руб./мес.',
  //   subitems: [
  //     {
  //       caption: 'Средний доход по региону',
  //       value: 45123,
  //       currency: ' руб./мес.',
  //       subitems: [],
  //     },
  //   ],
  // },

  {
    caption: 'Налогоплательщики',
    subitems: [
      {
        caption: 'Юридические лица',
        value: 16484,
        subitems: [],
      },
      {
        caption: 'Индивидуальные предприниматели',
        value: 56469,
        subitems: [],
      },
      {
        caption: 'Самозанятые',
        value: 847,
        subitems: [],
      },
      {
        caption: 'Физические лица',
        value: 9898345,
        subitems: [],
      },
    ],
  },
];

const general = [
  {
    caption: 'Дата рождения',
    value: '16 июня 1978 г.',
  },
  {
    caption: 'Место рождения',
    value: 'Санкт-Петербург',
  },
  {
    caption: 'Должность',
    value: 'Начальник отдела',
  },
  {
    caption: 'Семейное положение',
    value: 'Женат',
  },
  {
    caption: 'Несовершеннолетние дети',
    value: 'Да',
  },
  {
    caption: 'Готовность к переезду',
    value: 'Нет',
  },
  {
    caption: 'Дата заключения контракта',
    value: '30 ноября 2018 г.',
  },
  {
    caption: 'Дата окончания контракта',
    value: '30 ноября 2020 г.',
  },
  {
    caption: 'Стаж работы',
    value: '17 лет',
  },
  {
    caption: 'Классный чин',
    value: 'Советник налоговой службы I ранга',
  },
  {
    caption: 'Приказ о присвоении классного чина',
    value: 'Приказ №123 от 19 мая 2019 г.',
  },
  {
    caption: 'Квалификация',
    value: 'Квалификация',
  },
  {
    caption: 'Специальность',
    value: 'Специальность',
  },
  {
    caption: 'Ученая степень',
    value: 'Ученая степень',
  },
  {
    caption: 'Ученое звание',
    value: 'Ученое звание',
  },
  {
    caption: 'Иностранные языки и языки народов РФ',
    value: 'Английский, марийский',
  },
  {
    caption: 'Хобби',
    value: 'Триатлон, туризм, оригами',
  },
];

const labourActivity = [
  {
    caption: 'ООО «Издательство «Э»',
    subitems: [
      {
        caption: 'Дата назначения',
        value: '16 июня 2001 г.',
      },
      {
        caption: 'Дата увольнения',
        value: '28  сентярбя 2018 г.',
      },
      // {
      //   caption: 'Название организации',
      //   value: 'ООО «Издательство «Э»',
      // },
      {
        caption: 'Должность',
        value: 'Главный экономист',
      },
    ],
  },

  {
    caption: 'ПАО Газпром',
    subitems: [
      {
        caption: 'Дата назначения',
        value: '16 июня 2005 г.',
      },
      {
        caption: 'Дата увольнения',
        value: '28  сентярбя 2008 г.',
      },
      // {
      //   caption: 'Название организации',
      //   value: 'Газпром',
      // },
      {
        caption: 'Должность',
        value: 'Экономист',
      },
    ],
  },
];

const education = [
  {
    caption: 'Основное образование',
    subitems: [
      {
        caption: '',
        subitems: [
          {
            caption: 'Название вуза',
            value: 'МИРЭА',
          },
          {
            caption: 'Город (вуза)',
            value: 'Москва',
          },
          {
            caption: 'Специальность',
            value: 'Экономика',
          },
          {
            caption: 'Квалификация',
            value: 'Финансы и управление бизнесом',
          },
          {
            caption: 'Форма обучения',
            value: 'очная',
          },
          {
            caption: 'Срок обучения',
            value: '5 лет',
          },
        ]
      },
      {
        caption: '',
        subitems: [
          {
            caption: 'Название вуза',
            value: 'РАНГХИЗ',
          },
          {
            caption: 'Город (вуза)',
            value: 'Москва',
          },
          {
            caption: 'Специальность',
            value: 'Экономика',
          },
          {
            caption: 'Квалификация',
            value: 'Госуправление',
          },
          {
            caption: 'Форма обучения',
            value: 'очная',
          },
          {
            caption: 'Срок обучения',
            value: '5 лет',
          },
        ]
      }
    ],
  },
  {
    caption: 'Профессиональное развитие',
    subitems: [
      {
        caption: '',
        subitems: [
          {
            caption: 'Название учреждения/самообразования',
            value: 'Coursera',
          },
          {
            caption: 'Город (учреждения)',
            value: 'Москва',
          },
          {
            caption: 'Название программы',
            value: 'Финансовые инструменты для частного инвестора',
          },
          {
            caption: 'Вид обучения',
            value: 'Повышение квалификации',
          },
          {
            caption: 'Форма обучения',
            value: 'Онлайн',
          },
          {
            caption: 'Срок обучения',
            value: '6 месяцев',
          },
          {
            caption: 'Результат обучения',
            value: 'Удостоверение о повышении квалификации',
          },
          {
            caption: 'Иные мероприятия профразвития',
            value: 'Семинары, тренинги',
          },
        ]
      },
      {
        caption: '',
        subitems: [
          {
            caption: 'Название учреждения/самообразования',
            value: 'Coursera',
          },
          {
            caption: 'Город (учреждения)',
            value: 'Москва',
          },
          {
            caption: 'Название программы',
            value: 'Продвинутый курс английского языка',
          },
          {
            caption: 'Вид обучения',
            value: 'Повышение квалификации',
          },
          {
            caption: 'Форма обучения',
            value: 'Онлайн',
          },
          {
            caption: 'Срок обучения',
            value: '6 месяцев',
          },
          {
            caption: 'Результат обучения',
            value: 'Удостоверение о повышении квалификации',
          },
          {
            caption: 'Иные мероприятия профразвития',
            value: 'Семинары, тренинги',
          },
        ]
      }
    ],
  },
];

const progress = [
  {
    caption: 'Награды и почетные звания',
    subitems: [
      {
        caption: '',
        subitems: [
          {
            caption: 'Дата',
            value: '3 марта 2011',
          },
          {
            caption: 'Название',
            value: 'Ветеран труда',
          },
        ]
      },
      {
        caption: '',
        subitems: [
          {
            caption: 'Дата',
            value: '3 марта 2014',
          },
          {
            caption: 'Название',
            value: 'Передовик производства',
          },
        ]
      },
      {
        caption: '',
        subitems: [
          {
            caption: 'Дата',
            value: '3 марта 2014',
          },
          {
            caption: 'Название',
            value: 'Участник семинара ',
          },
        ]
      }

    ],
  },

];

function createMockInformationModel() {
  return [
    {
      code: 'general',
      caption: 'Общая',
      subitems: general,
    },
    {
      code: 'labourActivity',
      caption: 'Трудовая деятельность',
      subitems: labourActivity,
    },
    {
      code: 'education',
      caption: 'Образование',
      subitems: education,
    },
    {
      code: 'progress',
      caption: 'Достижения',
      subitems: progress,
    },
  ];
}

const randomName = () => {
  const families = [
    'Смирнов',
    'Иванов',
    'Кузнецов',
    'Соколов',
    'Попов',
    'Лебедев',
    'Козлов',
    'Новиков',
    'Морозов',
    'Петров',
    'Волков',
    'Соловьёв',
    'Васильев',
    'Зайцев',
    'Павлов',
    'Семёнов',
    'Голубев',
    'Виноградов',
    'Богданов',
    'Воробьёв',
    'Фёдоров',
    'Михайлов',
    'Беляев',
    'Тарасов',
  ];

  const names = [
    'Август',
    'Августин',
    'Авраам',
    'Агафон',
    'Аким',
    'Александр',
    'Алексей',
    'Альберт',
    'Анастасий',
    'Анатолий',
    'Андрей',
    'Анисий',
    'Антон',
    'Антоний',
    'Анфим',
    'Аполлинарий',
    'Аполлон',
    'Аристарх',
    'Аркадий',
    'Арсен',
    'Арсений',
    'Арсентий',
    'Артём',
    'Артемий',
    'Артур',
    'Архип',
  ];

  const middleNames = [
    'Александрович',
    'Алексеевич',
    'Анатольевич',
    'Андреевич',
    'Антонович',
    'Аркадьевич',
    'Артемович',
    'Бедросович',
    'Богданович',
    'Борисович',
    'Валентинович',
    'Валерьевич',
    'Васильевич',
    'Викторович',
    'Витальевич',
    'Владимирович',
    'Владиславович',
    'Вольфович',
    'Вячеславович',
    'Геннадиевич',
    'Георгиевич',
    'Григорьевич',
  ];

  return `${families[_.random(23)]} ${names[_.random(25)]} ${middleNames[_.random(21)]}`;
};

const randomPosition = () => {
  const parts = ['Начальник ИФНС №', 'Сотрудник ИФНС №', 'Заместитель начальника ИФНС №'];
  return parts[_.random(2)];
};

function createSimplePersonsModel() {
  const mockPersonsModel = () => {
    const name = randomName();
    return {
      userid: uuidv4(),
      fio: name,
      photo: null,
      position: randomPosition(),
      sono: _.random(10),
      // lotus: `${name}/ ЦА / МНС@МНС`,
      // phones: ['8 (495) 123-45-67', '8 (99) 15-15', '8 (495) 123-45-67'],
      // mails: ['my@nalog.ru'],
      // management,
      // staffNumber,
      // competence,
      // information: createMockInformationModel(),
    };
  };

  const modelForGeoObject = (code) => {
    const subitems = [];
    const count = 200;//_.random( 200) + 1;
    for (let i = 0; i < count; i++) {
      subitems.push(mockPersonsModel());
    }
    return subitems;
    return {
      code,
      subitems,
    };
  };

  // const subsectionModel = {
  //   country: modelForGeoObject(undefined),
  //   // districts: _.map(allDistricts, (district) => modelForGeoObject(district.code)),
  //   // regions: _.map(allRegions, (region) => modelForGeoObject(region.code)),
  // };
  return modelForGeoObject(undefined);
}


function createPerson() {
  const mockPersonsModel = () => {
    const name = randomName();
    return {
      userid: uuidv4(),
      fio: name,
      photo: null,
      position: randomPosition(),
      sono: _.random(10),
      lotus: `${name}/ ЦА / МНС@МНС`,
      phones: ['8 (495) 123-45-67', '8 (99) 15-15', '8 (495) 123-45-67'],
      mails: ['my@nalog.ru'],
      management,
      staffNumber,
      competence: {
        personal: competence,
        average: averageData,
        best: bestData,
      },
      information: createMockInformationModel(),
    };
  };

 
  return mockPersonsModel();
}
