import AsyncStorage from "@react-native-async-storage/async-storage";
import { AppError } from "../../utils/exeptions/app-error";

import { PLAYER_COLLECTION } from "../storege-config";

import { PlayerStoregeDTO } from "./DTO/Player-Storage-DTO";
import { getAllPlayers } from "./players-get-by-group";

export async function playerAddByGroup(
  newPlayer: PlayerStoregeDTO,
  group: string
) {
  try {
    const storedPlayer = await getAllPlayers(group);

    const playerAlreadyExists = storedPlayer.filter(
      (player) => player.name === newPlayer.name
    );

    if (playerAlreadyExists.length > 0) {
      throw new AppError("Essa pessoa já está em algum time");
    }

    const storege = JSON.stringify([...storedPlayer, newPlayer]);

    await AsyncStorage.setItem(`${PLAYER_COLLECTION}-${group}`, storege);
  } catch (error) {
    throw new AppError("Não foi possível adicionar o jogador ao grupo.");
  }
}
