import styled from 'styled-components';

export const ExpenseListHeaderWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const TabsModeView = styled.ul`
  margin-right: 50px;
  display: flex;
`;

export const TabMode = styled.li`
  display: flex;
  border: 1px solid rgba(24, 25, 31, 0.03);
  border-radius: 8px 8px 0px 0px;

  .tab-link {
    padding: 18px 12px;
    flex-grow: 1;
    color: rgb(16.5%, 21.2%, 23.1%);
  }
  .active-tab {
    background: rgba(24, 25, 31, 0.03);
  }
`;
