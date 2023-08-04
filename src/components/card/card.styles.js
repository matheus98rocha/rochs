import { TouchableWithoutFeedback } from "react-native";
import { styled } from "styled-components";

export const CardStyles = styled.View`
  width: 175px;
  height: 320px;

  align-items: center;
  justify-content: space-around;
  flex-direction: column;

  background-color: #e6e3e3;
`;

export const PriceContainer = styled.View`
  position: absolute;
  background-color: #ffff;
  left: 8px;
  bottom: 120px;

  width: 90px;
  height: 50px;

  align-items: center;
  justify-content: center;
`;

export const PriceText = styled.Text`
  font-size: 15px;
  font-weight: 300;
`;

export const FavoriteWrapper = styled.View`
  height: 40px;
  width: 40px;
  align-items: flex-end;
  position: absolute;
  top: 5px;
  right: 10px;
`;
