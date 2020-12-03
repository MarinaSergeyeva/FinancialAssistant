import styled from 'styled-components';

export const ButtonModal = styled.button`
  width: 100px;
  height: 40px;
  background: rgb(227, 234, 255, 1);
  border: none;
  border-radius: 8px;
  font-family: 'Roboto';
  font-style: normal;
  font-size: 14px;
  font-weight: 700;
  line-height: 20px;
  margin-right: 22px;
  z-index: 3;
  color: black;
  &:hover {
    box-shadow: 0px 24px 38px rgba(0, 0, 0, 0.14),
      0px 9px 46px rgba(0, 0, 0, 0.12), 0px 11px 15px rgba(0, 0, 0, 0.2);
  }
`;