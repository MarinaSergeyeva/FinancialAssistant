const useItemFields = category => {
  let name = '';
  let icon = '';
  for (let cat of expensesCats) {
    const keyCat = Object.keys(cat)[0];
    if (keyCat === category) {
      name = cat[keyCat].name;
      icon = cat[keyCat].icon;
    }
  }
  return { name, icon };
};

export default useItemFields;

export const expensesCats = [
  {
    other: {
      name: 'Другое',
      icon: 'IconOther',
    },
  },
  {
    entertainment: {
      name: 'Развлечения',
      icon: 'IconEntertainment',
    },
  },
  {
    food: {
      name: 'Продукты',
      icon: 'IconFood',
    },
  },
  {
    products: {
      name: 'Товары',
      icon: 'IconProducts',
    },
  },
  {
    transport: {
      name: 'Транспорт',
      icon: 'IconTransport',
    },
  },
  {
    services: {
      name: 'ЖКХ',
      icon: 'IconHome',
    },
  },
];
