import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import styled from 'styled-components';
import { textColor } from '../../stylesheet/vars';

const BurgerMenu = ({ showNavigation }) => {
  const [className, setClassName] = useState('burger');
  const [isActiveClass, setActiveClass] = useState(false);

  // const match = useRouteMatch();
  const location = useLocation();
  console.log('location in burger', location);

  const classNameHandleChange = () => {
    showNavigation();
    setActiveClass(!isActiveClass);
  };

  useEffect(() => {
    isActiveClass
      ? setClassName('burger burger-active')
      : setClassName('burger');
  }, [isActiveClass]);

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

const BurgerMenuWrapper = styled.div`
  cursor: pointer;

  .burger-wrapper {
    height: 30px;
    width: 30px;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .burger {
    position: relative;
    width: 24px;
    height: 3px;
    background-color: ${textColor.secondary};
  }

  .burger::before {
    position: absolute;
    left: 0;
    top: -6px;
    content: '';
    display: block;
    width: 24px;
    height: 3px;
    background-color: ${textColor.secondary};
    transition: transform 0.2s ease-in, top 0.2s linear 0.2s;
  }

  .burger::after {
    position: absolute;
    left: 0;
    top: 6px;
    content: '';
    display: block;
    width: 24px;
    height: 3px;
    background: ${textColor.secondary};
    transition: transform 0.2s ease-in, top 0.2s linear 0.2s;
  }

  .burger.burger-active {
    background-color: transparent;
  }

  .burger.burger-active::before {
    transform: rotate(45deg);
    top: 0;
    transition: top 0.2s linear, transform 0.2s ease-in 0.2s;
  }
  .burger.burger-active::after {
    transform: rotate(-45deg);
    top: 0;
    transition: top 0.2s linear, transform 0.2s ease-in 0.2s;
  }
`;
