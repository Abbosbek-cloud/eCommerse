import React from "react";
import ProductItem from "./ProductItem";

export default function ProductList(props) {
  const { goods = [], handleAddBtn } = props;

  if (!goods.length) {
    return <h3>Nothing not found</h3>;
  }

  return (
    <div className="goods">
      {goods.map((item) => (
        <ProductItem key={item.id} {...item} handleAddBtn={handleAddBtn} />
      ))}
    </div>
  );
}
