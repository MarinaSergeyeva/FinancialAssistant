import React from 'react';
import styled from 'styled-components';
import device, { Mobile, Tablet, Desktop } from '../../common/deviceSizes';
import Navigation from '../Header/Navigation'
import Logo from "../Header/Logo"


const Header = () => {
    return (
        <>
    <Navigation/>
    <Logo/>
      </>
    );
};

export default Header;
