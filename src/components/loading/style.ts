import styled from "styled-components/native";

export const LoadingContainer = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
  background-color: ${({ theme }) => theme.COLORS.GRAY_600};
`;

export const LoadingIndicator = styled.ActivityIndicator`
  color: ${({ theme }) => theme.COLORS.GREEN_700};
`;
