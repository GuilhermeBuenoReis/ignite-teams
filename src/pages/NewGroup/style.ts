import styled from "styled-components/native";
import FontAwesome6 from "@expo/vector-icons/FontAwesome6";
import { SafeAreaView } from "react-native-safe-area-context";

export const NewGroupContainer = styled(SafeAreaView)`
  flex: 1;
  background-color: ${({ theme }) => theme.COLORS.GRAY_600};
  padding: 24px;
`;

export const Content = styled.View`
  flex: 1;
  justify-content: center;
`;

export const Icon = styled(FontAwesome6).attrs(({ theme }) => ({
  name: "users",
  size: 32,
  color: theme.COLORS.GREEN_700,
}))`
  align-self: center;
`;
