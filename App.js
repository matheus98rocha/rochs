import { SafeAreaView, ScrollView, StyleSheet, View } from "react-native";
import Card from "./src/components/card/card";
import { HomeWrapper, ListItems } from "./app.styles";

export default function App() {
  return (
    <HomeWrapper>
      <View style={styles.header}></View>
      <ScrollView>
        <ListItems>
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
        </ListItems>
      </ScrollView>
    </HomeWrapper>
  );
}

const styles = StyleSheet.create({
  listItens: {
    flex: 1,
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    flexWrap: "wrap",
    gap: 2,
  },
  header: {
    height: 60,
    backgroundColor: "#fefefe",
  },
});
