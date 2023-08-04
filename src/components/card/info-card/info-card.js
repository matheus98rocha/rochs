import React from "react";
import { InfoCardStyles, InfoCardText } from "./info-card.styles";

function InfoCard({ labelInfoCard }) {
  return (
    <InfoCardStyles>
      <InfoCardText>{labelInfoCard}</InfoCardText>
    </InfoCardStyles>
  );
}

export default InfoCard;
