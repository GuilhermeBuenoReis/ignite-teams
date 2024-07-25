import { useState, useCallback } from "react";
import { useNavigation, useFocusEffect } from "@react-navigation/native";
import { FlatList } from "react-native";

import { Header } from "../../components/header";
import { Highlight } from "../../components/Highlight";
import { GroupCard } from "../../components/GroupCard";
import { ListEmpty } from "../../components/ListEmpty";
import { Button } from "../../components/Button";
import { Loading } from "../../components/loading";

import { getAllGroups } from "../../storege/groups/groups-get-all";

import { HomeContainer } from "./style";

export function HomePage() {
  const [loading, setLoading] = useState<boolean>(true);
  const [groups, setGroups] = useState<string[]>([]);
  const navigation = useNavigation();

  function handleNewGroup() {
    navigation.navigate("new");
  }

  async function fetchGroups() {
    try {
      setLoading(true);

      const data = await getAllGroups();

      setGroups(data);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  }

  function handleOpenGroup(group: string) {
    navigation.navigate("players", { group });
  }

  useFocusEffect(
    useCallback(() => {
      console.log("O IMPORTANTE É O QUE IMPORTA");
      fetchGroups();
    }, [])
  );

  return (
    <>
      {loading ? (
        <Loading />
      ) : (
        <HomeContainer>
          <Header />

          <Highlight title="Turmas" subtitle="jogue com a sua turma" />

          <FlatList
            data={groups}
            keyExtractor={(item) => item}
            renderItem={({ item }) => (
              <GroupCard title={item} onPress={() => handleOpenGroup(item)} />
            )}
            contentContainerStyle={groups.length === 0 && { flex: 1 }}
            ListEmptyComponent={() => (
              <ListEmpty message="Que tal cadastrar a primeira turma?" />
            )}
          />
          <Button buttonText="Criar nova turma" onPress={handleNewGroup} />
        </HomeContainer>
      )}
    </>
  );
}
