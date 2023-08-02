import { ScrollView, StyleSheet, View } from "react-native";
import Card from "./src/components/card/card";

export default function App() {
  return (
    <ScrollView>
      <View style={styles.container}>
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 0,
    backgroundColor: "#fff",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 2,
  },
});
