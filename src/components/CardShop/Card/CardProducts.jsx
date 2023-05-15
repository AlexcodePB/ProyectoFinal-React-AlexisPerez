import React from "react";
import { Grid } from "@mui/material";
import CardItem from "./cardItem";

const CardProducts = ({ data }) => {
  return (
    <Grid container spacing={2}>
      {data.map((item) => (
        <CardItem key={item.id} item={item} />
      ))}
    </Grid>
  );
};

export default CardProducts;
