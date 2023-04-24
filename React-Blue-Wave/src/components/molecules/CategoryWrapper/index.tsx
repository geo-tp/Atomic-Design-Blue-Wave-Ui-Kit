import { ReactNode } from "react";
import { Label } from "../../atoms/texts";
import { StyledCategoryWrapper, StyledCategoryWrapperBody } from "./style";

export const CategoryWrapper = (props: {
  children: ReactNode;
  title: string;
  icon: string;
}) => {
  return (
    <StyledCategoryWrapper>
      <Label>
        <i className={`fa fa-${props.icon}`}></i>
        <span>{props.title}</span>
      </Label>
      <StyledCategoryWrapperBody>{props.children}</StyledCategoryWrapperBody>
    </StyledCategoryWrapper>
  );
};
