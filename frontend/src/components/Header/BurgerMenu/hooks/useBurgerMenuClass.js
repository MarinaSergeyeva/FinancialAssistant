import { useState, useEffect } from 'react';

const useBurgerMenuClass = (menuStatus, openMenuFn) => {
  const [className, setClassName] = useState('burger');
  const [isActiveClass, setActiveClass] = useState(false);

  const classNameHandleChange = () => {
    openMenuFn();
    setActiveClass(!isActiveClass);
  };

  useEffect(() => {
    menuStatus ? setClassName('burger burger-active') : setClassName('burger');
  }, [menuStatus]);

  return [className, classNameHandleChange];
};

export default useBurgerMenuClass;
