import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { HomePage } from "../pages/home";
import { NewGroup } from "../pages/NewGroup";
import { Players } from "../pages/Players";

const { Navigator, Screen } = createNativeStackNavigator();

export function AppRoutes() {
  return (
    <Navigator screenOptions={{ headerShown: false }}>
      <Screen name="home" component={HomePage} />
      <Screen name="new" component={NewGroup} />
      <Screen name="players" component={Players} />
    </Navigator>
  );
}
