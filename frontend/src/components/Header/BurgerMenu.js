import React, { useEffect, useRef, useState } from 'react';
import { useLocation, useRouteMatch } from 'react-router-dom';
import styled from 'styled-components';
import { textColor } from '../../stylesheet/vars';

const BurgerMenu = ({ showNavigation }) => {
  const [className, setClassName] = useState('burger');
  const [isActiveClass, setActiveClass] = useState(false);

  const prevLocation = useRef('');

  const match = useRouteMatch();
  const { pathname } = useLocation();
  const [location, setLocation] = useState(pathname);

  const classNameHandleChange = () => {
    showNavigation();
    setActiveClass(!isActiveClass);
  };

  useEffect(() => {
    setLocation(pathname);
    if (prevLocation.current !== location) setActiveClass(!isActiveClass);
  }, [pathname]);

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
