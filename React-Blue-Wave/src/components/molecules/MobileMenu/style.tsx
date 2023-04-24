import styled from "styled-components";

export const StyledMobileMenu = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  background: ${(props) => props.theme.gradient2};
  border-radius: 20px 20px 0px 0px;
  border: 1px solid ${(props) => props.theme.colorBG5};
  height: 40px;
`;
