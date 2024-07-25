import { useEffect, useState, useRef } from "react";
import { useNavigation, useRoute } from "@react-navigation/native";

import { Alert, FlatList, type TextInput } from "react-native";

import { Header } from "../../components/header";
import { Highlight } from "../../components/Highlight";
import { ButtonIcon } from "../../components/ButtonIcon";
import { Input } from "../../components/Input";
import { Filter } from "../../components/Filter";
import { PlayerCard } from "../../components/PlayerCard";
import { ListEmpty } from "../../components/ListEmpty";
import { Button } from "../../components/Button";
import { Loading } from "../../components/loading";

import { AppError } from "../../utils/exeptions/app-error";

import {
  FormContainer,
  HeaderList,
  PlayersContainer,
  PlayersQuantity,
} from "./style";

import { playerAddByGroup } from "../../storege/players/player-add-by-group";
import { getPlayersByGroupAndTeam } from "../../storege/players/player-get-by-group-and-team";
import { PlayerStoregeDTO } from "../../storege/players/DTO/Player-Storage-DTO";
import { deletePlayerByGroup } from "../../storege/players/delete-player-by-group";
import { deleteGroup } from "../../storege/groups/delete-group";

type RouteParams = {
  group: string;
};

export function Players() {
  const [selectedTeam, setSelectedTeam] = useState("Time A");
  const [newPlayers, setNewPlayers] = useState("");
  const [players, setPlayers] = useState<PlayerStoregeDTO[]>([]);
  const [loadings, setLoadings] = useState<boolean>(true);

  const route = useRoute();
  const navigation = useNavigation();

  const { group } = route.params as RouteParams;

  const newPlayerNameInputRef = useRef<TextInput>(null);

  async function handleAddPlayer() {
    console.log(newPlayers.trim().length);
    if (newPlayers.trim().length === 0) {
      return Alert.alert("Nova pessoa", "Informe o nome da pessoa desejada.");
    }

    const newPlayer = {
      name: newPlayers,
      team: selectedTeam,
    };

    try {
      await playerAddByGroup(newPlayer, group);

      newPlayerNameInputRef.current?.blur();

      setNewPlayers("");

      fetchPlayersByTeam();
    } catch (error) {
      if (error instanceof AppError) {
        Alert.alert("Nova pessoa", error.message);
      } else {
        console.error(error);
        Alert.alert("Nova pessoa", "Ocorreu um erro ao adicionar a pessoa.");
      }
    }
  }

  async function fetchPlayersByTeam() {
    try {
      setLoadings(true);
      const playersByTeam = await getPlayersByGroupAndTeam(group, selectedTeam);
      setPlayers(playersByTeam);
    } catch (error) {
      console.error(error);
      Alert.alert("Pessoas", "Ocorreu um erro ao buscar as pessoas.");
    } finally {
      setLoadings(false);
    }
  }

  async function handleRemovePlayer(playerName: string) {
    try {
      await deletePlayerByGroup(playerName, group);
      fetchPlayersByTeam();
    } catch (error) {
      console.log(error);
      Alert.alert("Remover pessoa", "Ocorreu um erro ao remover a pessoa.");
    }
  }

  async function groupRemove() {
    try {
      await deleteGroup(group);
      navigation.navigate("home");
    } catch (error) {
      console.error(error);
      Alert.alert("Remover grupo", "Algo deu errado, ao deletar o grupo.");
    }
  }

  async function handleRemoveGroup() {
    try {
      Alert.alert("Remover pessoa", "Tem certeza que deseja remover o grupo?", [
        { text: "Não", style: "cancel" },
        { text: "Sim", onPress: () => groupRemove() },
      ]);
    } catch (error) {
      console.error(error);
      Alert.alert("Remover grupo", "Ocorreu um erro ao remover o grupo.");
    }
  }

  useEffect(() => {
    fetchPlayersByTeam();
  }, [selectedTeam]);

  return (
    <>
      {loadings ? (
        <Loading />
      ) : (
        <PlayersContainer>
          <Header showBackButton />

          <Highlight
            title={group}
            subtitle="Adicione a galera e separe os times"
          />

          <FormContainer>
            <Input
              onChangeText={setNewPlayers}
              value={newPlayers}
              inputRef={newPlayerNameInputRef}
              placeholder="Nome da pessoa"
              autoCorrect={false}
            />

            <ButtonIcon icon="add" onPress={handleAddPlayer} />
          </FormContainer>

          <HeaderList>
            <FlatList
              data={["Time A", "Time B"]}
              keyExtractor={(item) => item}
              renderItem={({ item }) => (
                <Filter
                  title={item}
                  isActive={item === selectedTeam}
                  onPress={() => setSelectedTeam(item)}
                />
              )}
              horizontal
            />
            <PlayersQuantity>{players.length}</PlayersQuantity>
          </HeaderList>

          <FlatList
            data={players}
            keyExtractor={(item) => item.name}
            renderItem={({ item }) => (
              <PlayerCard
                nickname={item.name}
                onRemove={() => handleRemovePlayer(item.name)}
              />
            )}
            ListEmptyComponent={() => (
              <ListEmpty message="Não há jogadores neste time" />
            )}
            showsVerticalScrollIndicator={false}
            contentContainerStyle={[
              { paddingBottom: 100 },
              players.length === 0 && { flex: 1 },
            ]}
          />

          <Button
            buttonText="Remover Turma"
            type="secondary"
            onPress={handleRemoveGroup}
          />
        </PlayersContainer>
      )}
    </>
  );
}
