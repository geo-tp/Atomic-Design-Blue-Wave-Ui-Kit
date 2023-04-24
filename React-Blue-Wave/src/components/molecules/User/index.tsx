import { UserImg } from "../../atoms/images";
import { Label, Mention } from "../../atoms/texts";
import { StyledUser } from "./style";

export const User = (props: {
  src: string;
  alt: string;
  title: string;
  subtitle: string;
}) => {
  return (
    <StyledUser>
      <UserImg src={props.src} alt={props.alt} />
      <div>
        <Label>{props.title}</Label>
        <Mention rounded={false}>{props.subtitle}</Mention>
      </div>
    </StyledUser>
  );
};
