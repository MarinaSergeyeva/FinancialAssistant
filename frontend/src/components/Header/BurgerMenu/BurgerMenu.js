import React from 'react';
import { BurgerMenuWrapper } from './burgerMenuStyled';
import useBurgerMenuClass from './hooks/useBurgerMenuClass';

const BurgerMenu = ({ showNavigation, isNavigationOn }) => {
  const [className, classNameHandleChange] = useBurgerMenuClass(
    isNavigationOn,
    showNavigation,
  );

  return (
    <BurgerMenuWrapper
      className="burger-wrapper"
      onClick={classNameHandleChange}
    >
      <div className={className}></div>
    </BurgerMenuWrapper>
  );
};

export default BurgerMenu;
