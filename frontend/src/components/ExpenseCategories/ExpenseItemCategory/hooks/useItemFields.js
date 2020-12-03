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
      icon: 'other',
    },
  },
  {
    entertainment: {
      name: 'Развлечения',
      icon: 'cafe',
    },
  },
  {
    food: {
      name: 'Продукты',
      icon: 'food',
    },
  },
  {
    products: {
      name: 'Товары',
      icon: 'clothes',
    },
  },
  {
    transport: {
      name: 'Транспорт',
      icon: 'transport',
    },
  },
  {
    services: {
      name: 'ЖКХ',
      icon: 'home',
    },
  },
];
