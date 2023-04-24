import {
  ButtonAction,
  ButtonActionSoft,
  ButtonAlt,
  ButtonLabelIcon,
  ButtonPagination,
} from "../components/atoms/buttons";
import { StyledSection } from "./style";

export const Buttons = () => {
  return (
    <StyledSection>
      <ButtonPagination
        onClick={() => {}}
        disabled={false}
        alternativeColor={false}
      >
        <i className="fa fa-angle-left"></i>
        <span>Previous</span>
      </ButtonPagination>

      <ButtonAction
        onClick={() => {}}
        disabled={false}
        width={"32px"}
        height={"32px"}
        alternativeColor={false}
      >
        <i className="fa fa-search"></i>
      </ButtonAction>

      <ButtonAction
        width={"28px"}
        height={"28px"}
        onClick={() => {}}
        alternativeColor={true}
      >
        <i className="fa fa-ellipsis"></i>
      </ButtonAction>

      <ButtonAction
        onClick={() => {}}
        disabled={false}
        width={"32px"}
        height={"32px"}
        alternativeColor={false}
      >
        <span>Send</span>
      </ButtonAction>

      <ButtonActionSoft
        onClick={() => {}}
        disabled={false}
        alternativeColor={false}
      >
        <span>Accept</span>
      </ButtonActionSoft>

      <ButtonAlt onClick={() => {}} disabled={false} alternativeColor={false}>
        <span>Refuse</span>
      </ButtonAlt>

      <ButtonLabelIcon onClick={() => {}} alternativeColor={false}>
        <i className="fa fa-home"></i>
        <span>Home</span>
      </ButtonLabelIcon>

      <ButtonLabelIcon onClick={() => {}} alternativeColor={true}>
        <i className="fa fa-home"></i>
        <span>Home</span>
      </ButtonLabelIcon>

      <ButtonAlt onClick={() => {}} disabled={false} alternativeColor={false}>
        <i className="fa fa-check"></i>
      </ButtonAlt>
    </StyledSection>
  );
};
