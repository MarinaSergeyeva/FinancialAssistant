import React from 'react';
import styled from 'styled-components';
import device, { Mobile, Tablet, Desktop } from '../../common/deviceSizes';

const Navigation = () => {
    return (
        <>
            {/* <NavigationContainer> */}
                <Tablet>
                    <ButtonWrapper>
                    <ButtonSignIn>Войти</ButtonSignIn>
                    <ButtonSignUp>Регистрация</ButtonSignUp>
                    </ButtonWrapper>
                </Tablet>

                <Desktop>
                    <ButtonWrapper>
                    <ButtonSignIn>Войти</ButtonSignIn>
                    <ButtonSignUp>Регистрация</ButtonSignUp>
                    </ButtonWrapper>
                </Desktop>
            {/* </NavigationContainer> */}
      </>
    );
};

export default Navigation;

// const NavigationContainer = styled.div`

//   @media ${device.tablet} {
//     padding-top: 16px;
//     padding-bottom: 16px;
//     width: 768px;
//     margin: 0 auto;
//   }
//   @media ${device.desktop} {
//     position: relative;
//     padding-top: 16px;
//     padding-bottom: 16px;
//     width: 1280px;
//     margin: 0 auto;
//   }
// `;

const ButtonWrapper = styled.div`
  display: flex;
  position: relative;
  justify-content: flex-end;
  margin: 0 auto;
  margin-bottom: 17px;
  margin-right:55px;

  @media ${device.tablet} {
    margin-right:40px;
  }

  @media ${device.desktop} {
    margin-right:55px;
  }

`
const ButtonSignIn = styled.button`
width: 100px;
height: 40px;
background: rgb(227,234,255,1);
border: none;
border-radius: 8px;
font-family: Roboto;
font-style: normal;
font-size: 14px;
font-weight: 700;
line-height: 20px;
margin-right: 22px;
`

const ButtonSignUp = styled.button`
width: 100px;
height: 40px;
background: rgb(255,108,0,1);
color: rgb(255,255,255,1);
border: none;
border-radius: 8px;
font-family: Roboto;
font-style: normal;
font-size: 14px;
font-weight: 700;
line-height: 20px;
`
