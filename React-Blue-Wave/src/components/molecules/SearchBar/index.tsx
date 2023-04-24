import { ButtonAction } from "../../atoms/buttons";
import { Input } from "../../atoms/inputs";
import { StyledSearchBar } from "./style";

export const SearchBar = (props: {
  onChange: Function;
  onClick: Function;
  value: string;
}) => {
  return (
    <StyledSearchBar>
      <Input
        alternativeColor={false}
        onChange={props.onChange}
        value={props.value}
      />
      <ButtonAction
        onClick={props.onClick}
        alternativeColor={false}
        width="28px"
        height="28px"
      >
        <i className="fa fa-search"></i>
      </ButtonAction>
    </StyledSearchBar>
  );
};
