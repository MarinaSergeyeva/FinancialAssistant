import { MyChart } from "./ChartExpenseIncome";
import ChartTitle from "./ChartTitle";
import styled from "styled-components";
import device, { Mobile, Tablet, Desktop } from "../../common/deviceSizes";

export default function ChartWrapper() {
  return (
    <>
      <ChartWrapperSC>
        <ChartTitle />
        <MyChart />
      </ChartWrapperSC>
    </>
  );
}
const ChartWrapperSC = styled.div`
  /* padding-top: 10px; */
  /* display: flex;
  flex-direction: column;
  align-items: center; */
  /* border: 1px solid black; */
  height: 527px;
  width: 280px;
  /* overflow: hidden; */
  @media ${device.tablet} {
    width: 510px;
    height: 390px;
  }
  @media ${device.desktop} {
    width: 468px;
    height: 390px;
  }
`;
