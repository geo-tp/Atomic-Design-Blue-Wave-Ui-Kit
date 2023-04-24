import { ButtonAction } from "../../atoms/buttons";
import { Logo } from "../../atoms/images";
import { HeaderTitle } from "../../atoms/titles";
import { StyledNavBar } from "./style";

export const NavBar = () => {
  return (
    <StyledNavBar>
      <div>
        <Logo width={"24px"} height={"24px"} />
        <HeaderTitle>
          <h1>Blue Wave</h1>
        </HeaderTitle>
      </div>
      <div>
        <ButtonAction
          width={"28px"}
          height={"28px"}
          onClick={() => {}}
          alternativeColor={false}
        >
          <i className="fa fa-user"></i>
        </ButtonAction>
        <ButtonAction
          width={"28px"}
          height={"28px"}
          onClick={() => {}}
          alternativeColor={false}
        >
          <i className="fa fa-tachometer"></i>
        </ButtonAction>
        <ButtonAction
          width={"28px"}
          height={"28px"}
          onClick={() => {}}
          alternativeColor={false}
        >
          <i className="fa fa-cog"></i>
        </ButtonAction>
        <ButtonAction
          width={"28px"}
          height={"28px"}
          onClick={() => {}}
          alternativeColor={true}
        >
          <i className="fa fa-ellipsis"></i>
        </ButtonAction>
      </div>
    </StyledNavBar>
  );
};
