import { ReactNode } from "react";
import {
  StyledButtonAction,
  StyledButtonActionSoft,
  StyledButtonAlt,
  StyledButtonLabelIcon,
  StyledButtonPagination,
} from "./style";

export interface IButtonBase {
  onClick: Function;
  disabled?: boolean;
  alternativeColor: boolean;
  children: ReactNode;
}

export const ButtonPagination = (props: IButtonBase) => {
  return (
    <StyledButtonPagination
      disabled={props.disabled}
      onClick={(e) => props.onClick(e)}
    >
      {props.children}
    </StyledButtonPagination>
  );
};

export const ButtonAction = (props: IButtonBase) => {
  return (
    <StyledButtonAction
      alternativeColor={props.alternativeColor}
      onClick={(e) => props.onClick(e)}
      disabled={props.disabled}
    >
      {props.children}
    </StyledButtonAction>
  );
};

export const ButtonActionSoft = (props: IButtonBase) => {
  return (
    <StyledButtonActionSoft
      onClick={(e) => props.onClick(e)}
      disabled={props.disabled}
    >
      {props.children}
    </StyledButtonActionSoft>
  );
};

export const ButtonAlt = (props: IButtonBase) => {
  return (
    <StyledButtonAlt
      onClick={(e) => props.onClick(e)}
      disabled={props.disabled}
    >
      {props.children}
    </StyledButtonAlt>
  );
};

export const ButtonLabelIcon = (props: IButtonBase) => {
  return (
    <StyledButtonLabelIcon
      onClick={(e) => props.onClick(e)}
      disabled={props.disabled}
      alternativeColor={props.alternativeColor}
    >
      {props.children}
    </StyledButtonLabelIcon>
  );
};
