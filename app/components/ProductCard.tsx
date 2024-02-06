import React from "react";
import AddToCart from "./AddToCart";
// the styles is a javascript object, so can't use variable like card-container(not valid name in JavaScript)
import styles from "./ProductCard.module.css";

const ProductCard = () => {
  return (
    // <div className={styles.cardContainer}>
    // <div className="p-5 my-5 bg-sky-400 text-black text-sm hover:bg-sky-600 hover:text-xl">
    <div>
      <AddToCart />
    </div>
  );
};

export default ProductCard;
