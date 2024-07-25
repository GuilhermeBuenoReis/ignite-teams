import { ButtonIcon } from "../ButtonIcon";

import { Icon, Nickname, PlayCardContainer } from "./style";

type PlayerCardProps = {
  nickname: string;
  onRemove: () => void;
};

export function PlayerCard({ nickname, onRemove }: PlayerCardProps) {
  return (
    <PlayCardContainer>
      <Icon name="person" />

      <Nickname>{nickname}</Nickname>

      <ButtonIcon icon="close" type="secondary" onPress={onRemove} />
    </PlayCardContainer>
  );
}
