import styled from "styled-components";

export const StyledButtonPagination = styled.button`
  border: none;
  background-color: transparent;
  display: flex;
  align-items: center;

  & i {
    color: ${(props) => props.theme.colorAction1};
    font-size: 2em;
  }

  & span {
    color: ${(props) => props.theme.colorFont1};
    font-weight: bold;
    font-size: 1.2em;
  }
`;

export const StyledButtonAction = styled.button<{ alternativeColor: boolean }>`
  border: 0px;
  padding: 10px 10px;

  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 8px;

  background-color: ${(props) =>
    props.alternativeColor ? props.theme.colorBG2 : props.theme.colorAction1};

  color: ${(props) =>
    props.alternativeColor ? props.theme.colorFont2 : props.theme.colorFont1};

  & i {
    font-size: 22px;
  }

  & span {
    font-weight: bold;
  }
`;

export const StyledButtonActionSoft = styled.button`
  border: 0px;
  padding: 10px 10px;

  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 20px;

  background-color: transparent;

  color: ${(props) => props.theme.colorFont1};

  & span {
    font-weight: bold;
  }
`;

export const StyledButtonAlt = styled.button`
  border: 0px;
  padding: 10px 10px;
  background-color: transparent;

  color: ${(props) => props.theme.colorFont1};

  & span {
    font-weight: bold;
  }
`;

export const StyledButtonLabelIcon = styled.button<{
  alternativeColor: boolean;
}>`
  border: 0px;
  padding: 10px 10px;
  background-color: transparent;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  color: ${(props) =>
    props.alternativeColor ? props.theme.colorAction1 : props.theme.colorFont2};

  & i {
    font-size: 1.6em;
    padding-bottom: 2px;
  }

  & span {
    font-weight: 400;
    font-size: 0.8em;
  }
`;
