import { useState } from "react";
import { CheckBox, Input, Select } from "../components/atoms/inputs";
import { StyledSection } from "./style";

export const Inputs = () => {
  const [checked, setChecked] = useState(false);
  const [inputValue, setInputValue] = useState("");
  const [selected, setSelected] = useState(1);

  const options = [
    { id: 1, name: "Computer" },
    { id: 2, name: "Phone" },
    { id: 3, name: "Accessories" },
    { id: 4, name: "Others" },
  ];

  return (
    <StyledSection>
      <CheckBox name={"Settings"} checked={checked} onChange={setChecked} />

      <Input
        alternativeColor={false}
        onChange={setInputValue}
        value={inputValue}
      />

      <Select
        selected={selected}
        onChange={setSelected}
        options={options}
        alternativeColor={false}
      />
    </StyledSection>
  );
};
