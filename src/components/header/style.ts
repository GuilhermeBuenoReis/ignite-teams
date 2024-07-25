import styled from "styled-components/native";
import FontAwesome6 from "@expo/vector-icons/FontAwesome6";

export const HeaderContainer = styled.View`
  width: 100%;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

export const HeaderImage = styled.Image`
  width: 46px;
  height: 55px;
`;

export const Button = styled.TouchableOpacity`
  flex: 1;
`;

export const BackButton = styled(FontAwesome6).attrs(({ theme }) => ({
  name: "chevron-left",
  size: 36,
  color: theme.COLORS.WHITE,
}))``;
