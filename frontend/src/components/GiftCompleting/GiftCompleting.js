import React from 'react';
import styled from 'styled-components';
import giftImg from '../../assets/images/GiftCompleting/gift grey.png';
import giftImg2 from '../../assets/images/GiftCompleting/gift 2.png';
import { device } from '../../common/deviceSizes';
import { useDispatch, useSelector } from 'react-redux';
import statsFlatSelectors from '../../redux/selectors/statsFlatSelectors';
import statsOperatioins from '../../redux/operations/statsOperatioins';

const GiftCompleting = () => {
  const giftForUnpack = useSelector(state =>
    statsFlatSelectors.getGiftsForUnpacking(state),
  );
  const savingsForNextSquareMeterLeft = useSelector(state =>
    statsFlatSelectors.getSavingsForNextSquareMeterLeft(state),
  );

  const dispatch = useDispatch();

  const unpackGift = async () => {
    dispatch(await statsOperatioins.updateGifts());
  };

  return (
    <>
      <Wrapper>
        <TitleWrapper>
          <Title>
            Чтобы добавить еще <Quantity>1 кв.м</Quantity> на планировку,
            осталось накопить
          </Title>
          <Price>{savingsForNextSquareMeterLeft.toFixed(0)} ₴</Price>
        </TitleWrapper>
        <ImgWrapper onClick={unpackGift}>
          {!giftForUnpack > 0 ? (
            <img src={giftImg} alt="giftImg" width="159" height="159" />
          ) : (
            <img src={giftImg2} alt="giftImg" width="159" height="159" />
          )}
        </ImgWrapper>
      </Wrapper>
    </>
  );
};

export default GiftCompleting;

const Wrapper = styled.div`
  background-color: #f7f7f7;
  border-radius: 8px;
  padding-top: 34px;
  padding-bottom: 34px;
  padding-right: 27px;
  padding-left: 27px;
  margin: 0 auto;
  width: 280px;
  height: 388px;
  @media ${device.largeTablet} {
    padding-top: 50px;
    padding-bottom: 48px;
    padding-left: 44px;
    padding-right: 70px;
    width: 510px;
    height: 258px;
    display: flex;
    justify-content: space-between;
  }
  @media ${device.largeDesktop} {
    width: 570px;
    padding-left: 70px;
    padding-right: 80px;
  }
`;

const Title = styled.div`
  margin: 0 auto;
  margin-bottom: 23px;
  width: 208px;
  font-family: 'Gilroy';
  font-style: normal;
  font-weight: bold;
  font-size: 20px;
  line-height: 24px;
  text-align: center;
  color: #18191f;
  @media ${device.largeTablet} {
    padding-top: 10px;
  }
`;

const Quantity = styled.span`
  color: #ff6c00;
`;

const Price = styled.p`
  font-family: 'Roboto';
  font-style: normal;
  font-weight: bold;
  font-size: 36px;
  line-height: 42px;
  text-align: center;
  color: #18191f;
  margin-bottom: 24px;
  @media ${device.largeTablet} {
    margin-bottom: 0px;
  }
`;

const ImgWrapper = styled.div`
  width: 159px;
  margin: 0 auto;
  cursor: pointer;
`;

const TitleWrapper = styled.div`
  @media ${device.largeDesktop} {
    margin-right: 54px;
  }
`;
