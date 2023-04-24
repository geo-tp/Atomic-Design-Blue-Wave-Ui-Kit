import styled from "styled-components";

export const StyledPageWrapper = styled.div`
  margin-top: 20px;

  & h2 {
    margin: 10px 0px;
  }
`;
export const StyledPageWrapperHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: ${(props) => props.theme.gradient2};
  padding: 5px 20px;
  border: 1px solid ${(props) => props.theme.colorBG5};
  border-radius: 20px 20px 0px 0px;
`;

export const StyledPageWrapperBody = styled.div`
  background: ${(props) => props.theme.gradient1};
  border-radius: 0px 0px 20px 20px;
  min-height: 300px;
  border: 1px solid ${(props) => props.theme.colorBG5};
`;
