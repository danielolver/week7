import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Button } from "react-native";

export default function ProdDetail({ navigation, route }) {
  const { id, name, price } = route?.params.product;
  return (
    <View style={styles.container}>
      <Text>Product Detail!</Text>
      <Text>ID:{id}</Text>
      <Text>Name:{name}</Text>
      <Text>Price:{price}</Text>
      <Button
        title="Back"
        onPress={() => {
          navigation.goBack();
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
