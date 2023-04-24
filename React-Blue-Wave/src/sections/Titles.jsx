import { HeaderTitle } from "../components/atoms/titles";
import { StyledSection } from "./style";

export const Titles = () => {
  return (
    <StyledSection>
      <HeaderTitle>
        <h1>This is a h1 title</h1>
      </HeaderTitle>

      <HeaderTitle>
        <h2>This is a h2 title</h2>
      </HeaderTitle>

      <HeaderTitle>
        <h3>This is a h3 title</h3>
      </HeaderTitle>
    </StyledSection>
  );
};
