import AsyncStorage from "@react-native-async-storage/async-storage";
import { getAllPlayers } from "./players-get-by-group";

export async function getPlayersByGroupAndTeam(group: string, team: string) {
  try {
    const storage = await getAllPlayers(group);

    const players = storage.filter((player) => player.team === team);

    return players;
  } catch (error) {
    throw error;
  }
}
