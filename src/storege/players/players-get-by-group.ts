import AsyncStorage from "@react-native-async-storage/async-storage";

import { PlayerStoregeDTO } from "./DTO/Player-Storage-DTO";
import { PLAYER_COLLECTION } from "../storege-config";

export async function getAllPlayers(group: string) {
  try {
    const storage = await AsyncStorage.getItem(`${PLAYER_COLLECTION}-${group}`);

    const players: PlayerStoregeDTO[] = storage ? JSON.parse(storage) : [];

    return players;
  } catch (error) {
    throw error;
  }
}
