import React from "react";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
/* import { useCartContext } from "../../../context/cartContext"; */

const CartWidget = () => {
  /* const { totalProducts } = useCartContext(); */

  return (
    <ShoppingCartIcon>
      {/* Revisar mi cartContext */}
      {/* <span>{totalProducts() || ""}</span> */}
    </ShoppingCartIcon>
  );
};
export default CartWidget;
