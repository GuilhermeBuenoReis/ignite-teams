import "styled-components/native";
import { defaultTheme } from "../styles/theme/default-theme";

declare module "styled-components/native" {
  type ThemeType = typeof defaultTheme;

  export interface DefaultTheme extends ThemeType {}
}
