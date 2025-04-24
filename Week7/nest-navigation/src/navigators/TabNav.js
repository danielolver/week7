import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import ProdDetail from "../screens/ProdDetail";
import Order from "../screens/Order";

const Tab = createBottomTabNavigator();
export default function TabNav({ route }) {
  const product = route?.params.product;

  return (
    <Tab.Navigator>
      <Tab.Screen
        name="ProductDetail"
        component={ProdDetail}
        initialParams={{ product }}
      />
      <Tab.Screen name="Order" component={Order} />
    </Tab.Navigator>
  );
}
