import { TouchableOpacityProps } from "react-native";
import { ButtonIconContainer, Icon, ButtonIconTypeStyleProps } from "./style";
import { MaterialIcons } from "@expo/vector-icons";

type ButtonIconProps = TouchableOpacityProps & {
  type?: ButtonIconTypeStyleProps;
  icon: keyof typeof MaterialIcons.glyphMap;
};

export function ButtonIcon({
  icon,
  type = "primary",
  ...rest
}: ButtonIconProps) {
  return (
    <ButtonIconContainer {...rest}>
      <Icon name={icon} type={type} />
    </ButtonIconContainer>
  );
}
