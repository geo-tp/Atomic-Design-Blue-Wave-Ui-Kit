import { useState } from "react";
import { SearchBar } from "../components/molecules/SearchBar";
import { SearchFilter } from "../components/molecules/SearchFilter";
import { StyledMolecules } from "./style";
import ImageExample from "../assets/image-example.jpg";
import { User } from "../components/molecules/User";
import { LabelInput } from "../components/molecules/LabelInput";
import { NavBar } from "../components/molecules/NavBar";
import { MobileMenu } from "../components/molecules/MobileMenu";
import { PageWrapper } from "../components/molecules/PageWrapper";
import { CategoryWrapper } from "../components/molecules/CategoryWrapper";

export const Molecules = () => {
  const [checked, setChecked] = useState(false);

  return (
    <StyledMolecules>
      <SearchBar onClick={() => {}} onChange={() => {}} value={""} />
      <SearchFilter
        selected={1}
        checked={checked}
        onSelectChange={() => {}}
        onCheckboxChange={() => setChecked(!checked)}
        options={[
          { id: 1, name: "Computer" },
          { id: 2, name: "Phone" },
          { id: 3, name: "Tablet" },
          { id: 4, name: "Others" },
        ]}
        checkboxMention={"mention"}
      />
      <User
        src={ImageExample}
        alt={"example"}
        title="John"
        subtitle="Marketing"
      />
      <LabelInput
        onChange={() => {}}
        value={""}
        label={"label input"}
        icon={"user"}
      />
      <NavBar />
      <MobileMenu />
      <PageWrapper title={"Settings"} icon={"cog"}>
        <div></div>
      </PageWrapper>
      <CategoryWrapper title={"a cat label"} icon={"home"}>
        <div></div>
      </CategoryWrapper>
    </StyledMolecules>
  );
};
