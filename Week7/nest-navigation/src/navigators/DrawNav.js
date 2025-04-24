import { NavigationContainer } from "@react-navigation/native";
import { createDrawerNavigator } from "@react-navigation/drawer";
import Home from "../screens/Home";
import StackNav from "./StackNav";

const Drawer = createDrawerNavigator();

export default function DrawNav() {
  return (
    <NavigationContainer>
      <Drawer.Navigator>
        <Drawer.Screen name="Home" component={Home} />
        <Drawer.Screen name="Products" component={StackNav} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}
