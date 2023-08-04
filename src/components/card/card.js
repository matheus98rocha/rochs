import React, { useState } from "react";
import { Image, Text, Touchable, TouchableWithoutFeedback, View } from "react-native";
import {
  CardStyles,
  FavoriteWrapper,
  PriceContainer,
  PriceText,
} from "./card.styles";
import InfoCard from "./info-card/info-card";

import { AntDesign } from "@expo/vector-icons";

function Card() {
  const [isFavorite, setIsFavorite] = useState(false);
  return (
    <CardStyles>
      <TouchableWithoutFeedback onPress={() => setIsFavorite(!isFavorite)}>
        <FavoriteWrapper>
          <AntDesign
            name={isFavorite ? "heart" : "hearto"}
            size={28}
            color={isFavorite ? "red" : "black"}
          />
        </FavoriteWrapper>
      </TouchableWithoutFeedback>
      <Image
        source={require("./camisa.png")}
        style={{ width: 190, height: 190 }}
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
