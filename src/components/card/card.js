import React from "react";
import { Image, Text, View } from "react-native";
import { CardStyles, PriceContainer, PriceText } from "./card.styles";
import InfoCard from "./info-card/info-card";

function Card() {
  return (
    <CardStyles>
      <Image
        source={require("./camisa.png")}
        style={{ width: 200, height: 200 }}
      />
      <InfoCard labelInfoCard={"FRETE GRÁTIS"} />
      <InfoCard labelInfoCard={"FRETE GRÁTIS"} />
      <View>
        <Text>Camisa Comum Verão</Text>
        <Text>T-Shirts</Text>
      </View>
      <PriceContainer>
        <PriceText>R$ 129,99</PriceText>
      </PriceContainer>
    </CardStyles>
  );
}

export default Card;
