const { useState } = require('react');

// TEXT //
export const useTextInputValue = () => {
  const [value, setValue] = useState('');

  const onValueChange = e => {
    setValue(e.target.value);
  };

  return [value, setValue, onValueChange];
};

// NUMBER //
export const useNumberInputValue = () => {
  const [value, setValue] = useState('');

  const onValueChange = e => {
    setValue(Number(e.target.value));
  };

  return [value, setValue, onValueChange];
};
