import { ButtonLabelIcon } from "../../atoms/buttons";
import { StyledMobileMenu } from "./style";

export const MobileMenu = () => {
  return (
    <StyledMobileMenu>
      <ButtonLabelIcon onClick={() => {}} alternativeColor={true}>
        <i className="fa fa-home"></i>
        <span>Home</span>
      </ButtonLabelIcon>
      <ButtonLabelIcon onClick={() => {}} alternativeColor={false}>
        <i className="fa fa-user"></i>
        <span>User</span>
      </ButtonLabelIcon>
      <ButtonLabelIcon onClick={() => {}} alternativeColor={false}>
        <i className="fa fa-tachometer"></i>
        <span>Dashboard</span>
      </ButtonLabelIcon>
      <ButtonLabelIcon onClick={() => {}} alternativeColor={false}>
        <i className="fa fa-cog"></i>
        <span>Settings</span>
      </ButtonLabelIcon>
    </StyledMobileMenu>
  );
};
