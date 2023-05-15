import React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { Grid } from "@mui/material";

const CardItem = ({ item }) => {
  return (
    <Grid
      item
      xs={12}
      sm={6}
      md={4}
      sx={{
        display: "flex",
        marginTop: 2,
        justifyContent: "center",
      }}
    >
      <Card
        sx={{
          width: "200",
          height: "300",
          display: "flex",
          flexDirection: "column",
          justifyContent: "flex-end",
        }}
      >
        <CardContent>
          <CardMedia component="img" alt="imgenNasa" image={item.img} />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {item.equipo}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {item.description}
            </Typography>
            <Typography
              variant="h4"
              color="text.secondary"
              sx={{ textAlign: "center", marginTop: 2 }}
            >
              U$D {item.price}
            </Typography>
          </CardContent>
        </CardContent>
        <CardContent>
          <CardActions sx={{ marginTop: "auto" }}>
            <Button
              variant="contained"
              size="small"
              color="warning"
              sx={{
                width: "100%",
                color: "white",
                fontWeight: 500,
              }}
            >
              add to cart
            </Button>
          </CardActions>
        </CardContent>
      </Card>
    </Grid>
  );
};

export default CardItem;
