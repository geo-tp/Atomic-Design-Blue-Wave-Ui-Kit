import {
  Chip,
  Label,
  Mention,
  Paragraph,
  StatusColor,
} from "../components/atoms/texts";
import { StyledTexts } from "./style";

export const Texts = () => {
  return (
    <StyledTexts>
      <div>
        <Label>I'm a label</Label>
        <Label>
          <i className="fa fa-home"></i>
          <span>I'm a label with icon</span>
        </Label>
        <Mention rounded={false}>I'm a mention</Mention>
        <Mention rounded={true}>I'm a rounded mention</Mention>
      </div>

      <div>
        <Chip bgColor={StatusColor.Blue} borderColor={StatusColor.Blue}>
          <i className="fa fa-clock"></i>
          <span>20h</span>
        </Chip>

        <Chip bgColor={StatusColor.Yellow} borderColor={StatusColor.Yellow}>
          <i className="fa fa-clock"></i>
          <span>saturday</span>
        </Chip>

        <Chip
          bgColor={StatusColor.Transparent}
          borderColor={StatusColor.Green}
          fontColor={StatusColor.Green}
        >
          <i className="fa fa-check"></i>
          <span>avalaible</span>
        </Chip>
        <Chip bgColor={StatusColor.Red} borderColor={StatusColor.Red}>
          <span>refused</span>
        </Chip>
        <Chip
          bgColor={StatusColor.Transparent}
          borderColor={StatusColor.Red}
          fontColor={StatusColor.Red}
        >
          <i className="fa fa-hand"></i>
          <span>Forbidden</span>
        </Chip>
      </div>
      <Paragraph>
        I'm a paragraph : Lorem ipsum dolor sit amet, consectetur adipisicing
        elit. Delectus labore, corporis sunt odit a ullam quas quisquam optio
        dolor autem sequi suscipit commodi fugit et dolorem veniam iure? Eum,
        explicabo?
      </Paragraph>
    </StyledTexts>
  );
};
