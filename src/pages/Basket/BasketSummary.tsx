import React from "react";
import { BoldElement } from "./styles";
import { Card as MantineCard, Text, useMantineTheme } from "@mantine/core";

const BasketSummary = ({totalPrice}:any) => {
  const theme = useMantineTheme();


    return (
    <>
      <MantineCard
        shadow="xs"
        p="md"
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          marginBottom: "2rem",
        }}
      >
        <div style={{ marginBottom: "2rem" }}>
          <BoldElement>{"Sepet Özeti"}</BoldElement>
        </div>

        <div style={{ display: "flex", flexDirection: "row", justifyContent: "space-between" }}>
          <Text>{"Toplam Tutar"}</Text>
          <Text color={theme.primaryColor} weight={600} style={{ fontSize: "20px" }}>
          {"$"}  {totalPrice}
          </Text>
        </div>
      </MantineCard>
    </>
  );
};

export default BasketSummary;
