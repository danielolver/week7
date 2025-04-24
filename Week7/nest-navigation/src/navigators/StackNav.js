import { createStackNavigator } from "@react-navigation/stack";
import ProdList from "../screens/ProdList";
import TabNav from "./TabNav";
const Stack = createStackNavigator();

export default function StackNav() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="ProdList" component={ProdList} />
      <Stack.Screen name="ProdDetail" component={TabNav} />
    </Stack.Navigator>
  );
}
