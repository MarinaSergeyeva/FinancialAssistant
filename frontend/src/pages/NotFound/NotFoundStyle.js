import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const SectionNotFound = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  height: 100vh;
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

export const SectionText = styled.p`
  position: absolute;
  top: 15%;
  font-size: 80px;
`;

export const LinkNotFound = styled(Link)`
  color: #fff;
  text-decoration: none;
`;
