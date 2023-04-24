import styled from "styled-components";

export const StyledNavBar = styled.div`
  background: ${(props) => props.theme.gradient2};
  border: 1px solid ${(props) => props.theme.colorBG5};

  width: 100%;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 30px;

  & h1 {
    font-size: 1.2em;
  }

  & div {
    display: flex;
    align-items: center;

    & button {
      margin-right: 10px;
    }
  }
`;
