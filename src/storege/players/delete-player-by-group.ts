import AsyncStorage from "@react-native-async-storage/async-storage";

import { PLAYER_COLLECTION } from "../storege-config";
import { getAllPlayers } from "./players-get-by-group";

export async function deletePlayerByGroup(playerName: string, group: string) {
  try {
    const storage = await getAllPlayers(group);

    const removePlayer = storage.filter((player) => player.name !== playerName);

    const players = JSON.stringify(removePlayer);

    await AsyncStorage.setItem(`${PLAYER_COLLECTION}-${group}`, players);
  } catch (error) {
    throw error;
  }
}
