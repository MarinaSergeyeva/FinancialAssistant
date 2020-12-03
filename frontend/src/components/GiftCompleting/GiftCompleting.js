import React from 'react';
import {
  Wrapper,
  TitleWrapper,
  Title,
  Price,
  ImgWrapper,
  Quantity,
} from './giftCompletingStyled';
import giftImg from '../../assets/images/GiftCompleting/gift grey.png';
import giftImg2 from '../../assets/images/GiftCompleting/gift 2.png';
import { useDispatch } from 'react-redux';
import statsOperatioins from '../../redux/operations/statsOperatioins';
import useReduxState from '../../hooks/useReduxState';

const GiftCompleting = ({ openCongModal, openErrModal }) => {
  const {
    stats: { giftsForUnpacking, savingsForNextSquareMeterLeft },
  } = useReduxState();

  const dispatch = useDispatch();

  const unpackGift = async () => {
    dispatch(await statsOperatioins.updateGifts(openCongModal, openErrModal));
  };

  return (
    <Wrapper>
      <TitleWrapper>
        <Title>
          Чтобы добавить еще <Quantity>1 кв.м</Quantity> на планировку, осталось
          накопить
        </Title>
        <Price>{savingsForNextSquareMeterLeft.toFixed(0)} ₴</Price>
      </TitleWrapper>
      <ImgWrapper onClick={unpackGift}>
        {!giftsForUnpacking > 0 ? (
          <img src={giftImg} alt="giftImg" width="159" height="159" />
        ) : (
          <img src={giftImg2} alt="giftImg" width="159" height="159" />
        )}
      </ImgWrapper>
    </Wrapper>
  );
};

export default GiftCompleting;
