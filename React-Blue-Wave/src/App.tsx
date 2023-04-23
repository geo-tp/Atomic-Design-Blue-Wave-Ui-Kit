import React, { useState } from "react";
import { HeaderTitle } from "./components/atoms/titles";
import ImageExample from "./assets/image-example.jpg";
import {
  ButtonAction,
  ButtonActionSoft,
  ButtonLabelIcon,
  ButtonPagination,
} from "./components/atoms/buttons";
import {
  Chip,
  Icon,
  Label,
  Mention,
  Paragraph,
  StatusColor,
} from "./components/atoms/texts";
import { CheckBox, Input, Select } from "./components/atoms/inputs";
import { Img, UserImg } from "./components/atoms/images";

function App() {
  const [checked, setChecked] = useState(false);

  return (
    <div className="App">
      <HeaderTitle>
        <h1>This is a title h1</h1>
      </HeaderTitle>
      <HeaderTitle>
        <h2>This is a title h2</h2>
      </HeaderTitle>
      <HeaderTitle>
        <h3>This is a title h3</h3>
      </HeaderTitle>
      <Paragraph>Styled parag</Paragraph>
      <Label>
        <i className="fa fa-user"></i>
        <span>label</span>
      </Label>
      <Mention rounded={true}>this is a mention</Mention>
      <Icon alternativeColor={false} size={16}>
        <i className="fa fa-close"></i>
      </Icon>
      <Chip borderColor={StatusColor.Blue} bgColor={StatusColor.Blue}>
        <i className="fa fa-clock"></i>
        <span>2Ohdssfsfd</span>
      </Chip>

      <Chip
        borderColor={StatusColor.Green}
        bgColor={StatusColor.Transparent}
        fontColor={StatusColor.Green}
      >
        <i className="fa fa-clock"></i>
        <span>2Ohdssfsfd</span>
      </Chip>
      <ButtonLabelIcon onClick={() => {}} alternativeColor={false}>
        <i className="fa fa-user"></i>
        <span>Dashboard</span>
      </ButtonLabelIcon>
      <CheckBox name={"Settings"} checked={checked} onChange={setChecked} />
      <Input alternativeColor={false} onChange={() => {}} value={"ezfezfze"} />
      <Select
        selected={0}
        onChange={() => {}}
        options={[
          { id: 1, name: "Computer" },
          { id: 2, name: "Phone" },
          { id: 3, name: "Accessories" },
          { id: 4, name: "Misc" },
        ]}
        alternativeColor={false}
      />
      <Img
        src={ImageExample}
        alt="landscape with field and cloudy sky"
        width={"100px"}
        height={"200px"}
      />
      <UserImg src={ImageExample} alt={"example"} />
      {/* <ButtonPagination
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
        alternativeColor={false}
      >
        <i className="fa fa-search"></i>
      </ButtonAction>
      <ButtonActionSoft
        onClick={() => {}}
        disabled={false}
        alternativeColor={false}
      >
        <span>Refuse</span>
      </ButtonActionSoft> */}
    </div>
  );
}

export default App;
