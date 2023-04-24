import styled from "styled-components";

export const StyledSearchBar = styled.form`
  background: ${(props) => props.theme.gradient1};
  border: 1px solid ${(props) => props.theme.colorBG2};
  height: 52px;
  width: 265px;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  border-radius: 20px;

  & button {
    position: absolute;
    right: 18px;
  }
`;
