import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import img from '../../assets/images/notFound/dribbble_1.gif';
import isAuth from '../../redux/selectors/authSelector';

const NotFound = () => {
  return (
    <>
       <SectionNotFound>
        <SectionText>404</SectionText>
        <img src={img} alt="/" width="700" />
        <h2>Look like you're lost...</h2>
        <p>The page you are looking for not avaible!</p>
        <button>
          <LinkNotFound to={isAuth? "/plan" : "/"}>Go to Home</LinkNotFound>
        </button>
      </SectionNotFound>
    </>
  );
};

export default NotFound;

{
 
}

const SectionNotFound = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  height: 100vh;

  /* margin-top: 50px; */
  width: 100%;

  & button {
    background: rgba(255, 108, 0, 1);
    border-radius: 5px;
    margin: 20px 10px;
    padding: 10px;
    border: none;
  }

  & img {
    margin-bottom: 30px;
    object-fit: cover;
    z-index: -1;
  }
`;

const SectionText = styled.p`
  position: absolute;
  top: 20%;
  font-size: 80px;
`;

const LinkNotFound = styled(Link)`
  color: #fff;
  text-decoration: none;
`;
