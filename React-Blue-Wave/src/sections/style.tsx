import styled from "styled-components";

export const StyledSection = styled.section`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  flex-wrap: wrap;
  margin-bottom: 30px;

  & button {
    margin: 6px 6px;
  }

  & input {
    margin-bottom: 10px;
  }
`;

export const StyledTexts = styled.section`
  & div {
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    flex-wrap: wrap;
    margin-bottom: 40px;

    & span {
      margin-bottom: 10px;
    }
  }
`;
