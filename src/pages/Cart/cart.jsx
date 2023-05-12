import { Link } from "react-router-dom";
import React from "react";

const cart = () => {
  return (
    <div>
      <p>No hay elementos en el carrito</p>
      <Link to="/cart">Hola mundo</Link>
    </div>
  );
};

export default cart;
