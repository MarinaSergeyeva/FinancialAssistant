import styled from 'styled-components';
import { size } from '../../../common/deviceSizes';

const CategoryPercentage = styled.span`
  min-width: 30px;
  text-align: right;
`;

const CategoryItem = styled.li`
  padding: 18px 14px;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  font-family: 'Roboto';
  font-size: 16px;
  font-weight: 400;
  background: rgba(24, 25, 31, 0.03);
  border-radius: 4px;
  border-bottom: 1px solid rgba(0, 0, 0, 0.36);
  box-shadow: 0px;
`;

const CategoryName = styled.span`
  margin-bottom: 15px;
  min-width: 190px;
  @media (min-width: ${size.tablet}) {
    margin-bottom: 0;
  }
`;

const CategoryIcon = styled.div`
  margin-right: 10px;
  margin-bottom: 15px;
  @media (min-width: ${size.tablet}) {
    margin-bottom: 0;
  }
`;

const CategoryAmount = styled.span`
  margin-right: 110px;
  padding-left: 25px;
  min-width: 85px;
  text-align: right;
  @media (min-width: ${size.tablet}) {
    padding-left: 0;
  }
`;

export {
  CategoryPercentage,
  CategoryItem,
  CategoryName,
  CategoryIcon,
  CategoryAmount,
};
