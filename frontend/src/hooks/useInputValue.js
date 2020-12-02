const { useState } = require('react');

export const useInput = initialValue => {
  const [value, setValue] = useState(initialValue);

  const onChange = e => {
    setValue(e.target.value);
  };
  const clear = () => setValue('');
  return {
    bind: { value, onChange },
    value,
    clear,
  };
};

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
