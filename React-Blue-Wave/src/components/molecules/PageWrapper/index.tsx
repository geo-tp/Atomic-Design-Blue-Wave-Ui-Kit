import { ReactNode } from "react";
import {
  StyledPageWrapper,
  StyledPageWrapperBody,
  StyledPageWrapperHeader,
} from "./style";
import { HeaderTitle } from "../../atoms/titles";
import { Icon } from "../../atoms/texts";

export const PageWrapper = (props: {
  title: string;
  icon: string;
  children: ReactNode;
}) => {
  return (
    <StyledPageWrapper>
      <StyledPageWrapperHeader>
        <HeaderTitle>
          <h2>
            <span>{props.title}</span>
          </h2>
        </HeaderTitle>
        <Icon alternativeColor={false} icon={props.icon} size={22}></Icon>
      </StyledPageWrapperHeader>
      <StyledPageWrapperBody>{props.children}</StyledPageWrapperBody>
    </StyledPageWrapper>
  );
};
