import { StyledImage, StyledUserImage } from "./style";

export const Img = (props: {
  src: string;
  alt: string;
  width: string;
  height: string;
}) => {
  return <StyledImage {...props}></StyledImage>;
};

export const UserImg = (props: { src: string; alt: string }) => {
  return <StyledUserImage {...props}></StyledUserImage>;
};
