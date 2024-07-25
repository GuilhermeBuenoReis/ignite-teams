import { useNavigation } from "@react-navigation/native";

import Logo from "../../assets/Logo.png";
import { BackButton, HeaderContainer, HeaderImage, Button } from "./style";

type HeaderProps = {
  showBackButton?: boolean;
};

export function Header({ showBackButton = false }: HeaderProps) {
  const navigation = useNavigation();

  function handleGoBackButtonClick() {
    navigation.navigate("home");
  }

  return (
    <HeaderContainer>
      {showBackButton && (
        <Button onPress={handleGoBackButtonClick}>
          <BackButton />
        </Button>
      )}
      <HeaderImage source={Logo} />
    </HeaderContainer>
  );
}
