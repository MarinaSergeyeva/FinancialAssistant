import React from 'react';
import isAuth from '../../redux/selectors/authSelector';
import { planRoute, homeRoute } from '../../assets/routes/routes';

import img from '../../assets/images/notFound/dribbble_1.gif';
import { LinkNotFound, SectionNotFound, SectionText } from './NotFoundStyle';

const NotFound = () => {
  return (
    <SectionNotFound>
      <SectionText>404</SectionText>
      <img src={img} alt="not found" width="700" />
      <h2>Look like you're lost...</h2>
      <p>The page you are looking for not avaible!</p>
      <button>
        <LinkNotFound to={isAuth ? `${planRoute.path}` : `${homeRoute.path}`}>
          Go to Home
        </LinkNotFound>
      </button>
    </SectionNotFound>
  );
};

export default NotFound;
