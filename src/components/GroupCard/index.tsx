import { GroupCardContainer, Icon, Title } from "./style";
import { TouchableOpacityProps } from "react-native";

type GroupCardProps = TouchableOpacityProps & {
  title: string;
};

export function GroupCard({ title, ...rest }: GroupCardProps) {
  return (
    <GroupCardContainer {...rest}>
      <Icon />
      <Title>{title}</Title>
    </GroupCardContainer>
  );
}
