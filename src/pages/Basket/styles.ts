import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  width: 90%;
  justify-content: space-evenly;
`;

export const BasketItemContainer = styled.div`
  width: 75%;
`;

export const SummaryContainer = styled.div`
  width: 20%;
`;

export const AcceptButtonContainer = styled.div`
  display: flex;
  justify-content: end;
`;

export const BasketItemBookInfoContainer = styled.div`
  display: flex;
  flex-direction: row;
`;

export const BasketItemBookPriceContainer = styled.div`
  display: flex;
  flex-direction: row;
  width: 60%;
  justify-content: space-around;
`;

export const Element = styled.div`
  display: flex;
  justify-content: space-between;
  font-size: 14px;
  margin: 8px 0;
  line-height: 1.5;
`;

export const BoldElement = styled(Element)`
  font-weight: 600;
  margin: 8px 0;
  font-size: 16px;
`;
