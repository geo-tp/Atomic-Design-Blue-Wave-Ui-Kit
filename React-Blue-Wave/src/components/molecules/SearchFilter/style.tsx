import styled from "styled-components";

export const StyledSearchFilter = styled.form`
  background: ${(props) => props.theme.gradient1};
  border: 1px solid ${(props) => props.theme.colorBG2};
  height: 52px;
  width: 250px;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  border-radius: 20px;
  margin-bottom: 10px;
`;
