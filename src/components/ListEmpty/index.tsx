import { ListEmptyContainer, Message } from "./style";

type ListEmptyProps = {
  message: string;
};
export function ListEmpty({ message }: ListEmptyProps) {
  return (
    <ListEmptyContainer>
      <Message>{message}</Message>
    </ListEmptyContainer>
  );
}
