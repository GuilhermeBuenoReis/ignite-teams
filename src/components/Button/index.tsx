import { ButtonContainer, ButtonText, ButtonTypeStyleProps } from "./style";

import { TouchableOpacityProps } from "react-native";

type ButtonProps = TouchableOpacityProps & {
  type?: ButtonTypeStyleProps;
  buttonText: string;
};

export function Button({ type = "primary", buttonText, ...rest }: ButtonProps) {
  return (
    <ButtonContainer type={type} {...rest}>
      <ButtonText>{buttonText}</ButtonText>
    </ButtonContainer>
  );
}
