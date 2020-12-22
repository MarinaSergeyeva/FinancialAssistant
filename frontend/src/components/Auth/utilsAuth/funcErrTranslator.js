const funcErrTranslator = numberErr => {
  switch (numberErr) {
    case 409:
      return 'Пользователь с таким адресом электронной почты существует. Ввидите другой email.';

    case 404:
      return 'Электронная почта неправильная, введите другую';

    case 403:
      return 'Пароль неправильный, введите другой';

    case 500:
      return 'Такой юзер не существует введите другие данные';

    default:
      break;
  }
};

export default funcErrTranslator;
