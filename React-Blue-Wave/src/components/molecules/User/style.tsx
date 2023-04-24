import styled from "styled-components";

export const StyledUser = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 10px;

  & img {
    margin-right: 5px;
  }
  & div {
    display: flex;
    flex-direction: column;
    & span {
      margin: 0px;
      padding: 0px;
    }
  }
`;
