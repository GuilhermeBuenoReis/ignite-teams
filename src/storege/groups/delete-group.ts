import AsyncStorage from "@react-native-async-storage/async-storage";
import { GROUP_COLLECTION, PLAYER_COLLECTION } from "../storege-config";
import { getAllGroups } from "./groups-get-all";

export async function deleteGroup(groupDeleted: string) {
  try {
    const storege = await getAllGroups();

    const removeGroup = storege.filter((group) => group !== groupDeleted);

    await AsyncStorage.setItem(GROUP_COLLECTION, JSON.stringify(removeGroup));
    await AsyncStorage.removeItem(`${PLAYER_COLLECTION}-${groupDeleted}`);
  } catch (error) {
    throw error;
  }
}
