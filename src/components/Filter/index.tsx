import { TouchableOpacityProps } from "react-native";

import { FilterContainer, FilterStyleProps, FilterTitle } from "./style";

type FilterProps = TouchableOpacityProps &
  FilterStyleProps & {
    title: string;
  };

export function Filter({ title, isActive = false, ...rest }: FilterProps) {
  return (
    <FilterContainer isActive={isActive} {...rest}>
      <FilterTitle>{title}</FilterTitle>
    </FilterContainer>
  );
}
