import { StyleSheet, Text, View, FlatList, Pressable } from "react-native";

const products = [
  {
    id: 1,
    name: "computer",
    price: 150,
  },
  {
    id: 2,
    name: "desk",
    price: 200,
  },
];

export default function ProdList({ navigation }) {
  const gotoProductDetail = (product) => {
    navigation.navigate("ProdDetail", { product });
  };
  return (
    <View style={styles.container}>
      <Text>Product List!</Text>
      <FlatList
        data={products}
        renderItem={({ item }) => (
          <Pressable onPress={gotoProductDetail.bind(null, item)}>
            <Text>name: {item.name}</Text>
          </Pressable>
        )}
        keyExtractor={(item) => item.id}
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
