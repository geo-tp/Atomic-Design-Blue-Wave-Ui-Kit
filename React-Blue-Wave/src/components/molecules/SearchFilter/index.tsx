import { CheckBox, Select } from "../../atoms/inputs";
import { Mention } from "../../atoms/texts";
import { StyledSearchFilter } from "./style";

export const SearchFilter = (props: {
  selected: number;
  checked: boolean;
  options: Array<{ id: number; name: string }>;
  onSelectChange: Function;
  onCheckboxChange: Function;
  checkboxMention: string;
}) => {
  return (
    <StyledSearchFilter>
      <Select
        selected={props.selected}
        onChange={props.onSelectChange}
        options={props.options}
        alternativeColor={false}
      />
      <Mention rounded={false}>{props.checkboxMention}</Mention>
      <CheckBox
        name={props.checkboxMention}
        checked={props.checked}
        onChange={props.onCheckboxChange}
      />
    </StyledSearchFilter>
  );
};
