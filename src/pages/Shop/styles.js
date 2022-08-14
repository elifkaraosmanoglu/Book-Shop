import styled from "styled-components";




export const Layout = styled.div`
  width: 80%;
  display: flex;
  align-items: center;
  justify-content: space-around;
  flex-wrap: wrap;
  height: 100%;
  padding-bottom: 50px;
  margin-left: 85px;

  @media screen and (max-width: 768px) {
    flex-direction: column;
    justify-content: center;
    align-items: center;
    max-height: fit-content;
    height: fit-content;
  }
`;