import { experimentalStyled as styled } from "@mui/material/styles";
import Paper from "@mui/material/Paper";
import CardProducts from "./Card/CardProducts";
import React, { useState, useEffect } from "react";

//firebase
import { db } from "../../Firebase/firebase.config";
import { collection, query, getDocs } from "firebase/firestore";

const CardShop = () => {
  //agrego a mi nav los productos

  //Firebase llamada
  const q = query(collection(db, "Imagenes"));

  const [productos, setProductos] = useState([]);

  useEffect(() => {
    const getProductos = async () => {
      const querySnapshot = await getDocs(q);
      const docs = [];
      querySnapshot.forEach((doc) => {
        docs.push({ ...doc.data(), id: doc.id });
      });
      console.log(docs);
      setProductos(docs);
    };
    getProductos();
  }, []);

  return (
    <div>
      <CardProducts data={productos} />
    </div>
  );
};

export default CardShop;
