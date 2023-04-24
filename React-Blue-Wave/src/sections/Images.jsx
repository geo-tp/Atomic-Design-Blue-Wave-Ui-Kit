import { Img } from "../components/atoms/images";
import { StyledSection } from "./style";
import ImageExample from "../assets/image-example.jpg";
import { UserImg } from "../components/atoms/images";
export const Images = () => {
  return (
    <StyledSection>
      <Img src={ImageExample} alt="an example" width="150px" height="100px" />
      <UserImg src={ImageExample} alt="an example" />
    </StyledSection>
  );
};
