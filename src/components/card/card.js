import React from "react";
import { Image, Text, View } from "react-native";
import { CardStyles } from "./card.styles";

function Card() {
  return (
    <View style={CardStyles.container}>
      <Image
        source={require("./camisa.png")}
        style={{ width: 200, height: 200 }}
      />
      <Text>Camisa Comum Verão</Text>
      <Text>T-Shirts</Text>
    </View>
  );
}

export default Card;
