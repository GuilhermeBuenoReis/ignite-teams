import styled, { css } from "styled-components/native";
import { SafeAreaView } from "react-native-safe-area-context";

export const PlayersContainer = styled(SafeAreaView)`
  flex: 1;
  background-color: ${({ theme }) => theme.COLORS.GRAY_600};
  padding: 24px;
`;

export const FormContainer = styled.View`
  width: 100%;
  background: ${({ theme }) => theme.COLORS.GRAY_700};

  flex-direction: row;
  justify-content: center;

  border-radius: 6px;
`;

export const HeaderList = styled.View`
  width: 100%;
  flex-direction: row;
  align-items: center;

  margin: 32px 0 12px;
`;

export const PlayersQuantity = styled.Text`
  ${({ theme }) => css`
    color: ${theme.COLORS.GRAY_200};
    font-family: ${theme.FONT_FAMILY.BOLD};
    font-size: ${theme.FONT_SIZE.SM}px;
  `}
`;
