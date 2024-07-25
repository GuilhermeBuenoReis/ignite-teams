import AsyncStorage from "@react-native-async-storage/async-storage";

import { GROUP_COLLECTION } from "../storege-config";

export async function getAllGroups() {
  try {
    //o parse foi feito pois, o storege armazena tuto como string!

    const storage = await AsyncStorage.getItem(GROUP_COLLECTION);
    const groups: string[] = storage ? JSON.parse(storage) : [];

    return groups;
  } catch (error) {
    throw error;
  }
}
