import React from 'react';
import { usePrognosisBuy } from './hooks/usePrognosisBuy';
import Modal from '../Modal/Modal';
import decor from '../../assets/images/planPage/decor.svg';
import { PrognosisBuyStyled, MessageStyled } from './prognosisBuyStyled';

function PrognosisBuy({ fields }) {
  const { valuePrognosisBuy, methodPrognosisBuy } = usePrognosisBuy(fields);
  const { years, months, isShowModal, message } = valuePrognosisBuy;
  const { onHandleSubmit, declOfNum, closeForm } = methodPrognosisBuy;

  return (
    <>
      <PrognosisBuyStyled>
        <div className="wrapper">
          <h2>У вас будет квартира через:</h2>
          <form onSubmit={onHandleSubmit}>
            <label>
              <input
                type="text"
                name="years"
                value={
                  !years
                    ? ''
                    : years + ' ' + declOfNum(years, ['год', 'года', 'лет'])
                }
                onChange={() => {}}
                placeholder="0 лет"
              />
              <span>Кол-во лет</span>
            </label>
            <label>
              <input
                type="text"
                name="months"
                value={
                  !months
                    ? ''
                    : months +
                      ' ' +
                      declOfNum(months, ['месяц', 'месяца', 'месяцев'])
                }
                onChange={() => {}}
                placeholder="0 месяцев"
              />
              <span>Кол-во месяцев</span>
            </label>
            <button type="submit">Подходит</button>
          </form>
        </div>
        <img src={decor} alt="элемент декора" />
      </PrognosisBuyStyled>
      {isShowModal && (
        <Modal closeModal={closeForm}>
          <MessageStyled>{message}</MessageStyled>
        </Modal>
      )}
    </>
  );
}

export default PrognosisBuy;
