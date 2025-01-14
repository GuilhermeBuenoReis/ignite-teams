import { useState } from "react";
import { useNavigation } from "@react-navigation/native";
import { Alert } from "react-native";

import { groupCreate } from "../../storege/groups/group-create";

import { Button } from "../../components/Button";
import { Header } from "../../components/header";
import { Highlight } from "../../components/Highlight";
import { Input } from "../../components/Input";

import { AppError } from "../../utils/exeptions/app-error";

import { Content, Icon, NewGroupContainer } from "./style";

export function NewGroup() {
  const [group, setGroup] = useState("");

  const navigation = useNavigation();

  async function handleNewGroup() {
    try {
      if (group.trim().length === 0) {
        return Alert.alert("Novo Grupo", "Nome da turma é obrigatório.");
      }

      await groupCreate(group);

      navigation.navigate("players", { group });
    } catch (error) {
      if (error instanceof AppError) {
        Alert.alert("Grupo já existente.", error.message);
      } else {
        Alert.alert("Novo Grupo", "Não foi possível criar um novo grupo.");
        console.log(error);
      }
    }
  }

  async function fecthGroups() {
    try {
    } catch (error) {}
  }

  return (
    <NewGroupContainer>
      <Header showBackButton />

      <Content>
        <Icon />

        <Highlight
          title="Nova Turma"
          subtitle="crie a turma para adicionar as pessoas"
        />

        <Input placeholder="Nome da turma" onChangeText={setGroup} />

        <Button
          buttonText="Criar"
          style={{ marginTop: 20 }}
          onPress={handleNewGroup}
        />
      </Content>
    </NewGroupContainer>
  );
}
