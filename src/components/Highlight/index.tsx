import { HighlightContainer, Title, Subtitle } from "./style";

type HighlightProps = {
  title: string;
  subtitle: string;
};

export function Highlight({ subtitle, title }: HighlightProps) {
  return (
    <HighlightContainer>
      <Title>{title}</Title>
      <Subtitle>{subtitle}</Subtitle>
    </HighlightContainer>
  );
}
