import React, { useContext } from "react";
import { ShopContext } from "../context";

const ProductItem = (props) => {
  const { id, name, description, price, full_background } = props;
  const { handleAddBtn } = useContext(ShopContext);
  return (
    <div className="card" id={id}>
      <div className="card_image">
        <img className="cardImage" src={full_background} alt={name} />
        <span className="card-title">{name}</span>
      </div>
      <div className="card-content">
        <p>{description}</p>
      </div>
      <div className="card-action">
        <button
          className="btn"
          onClick={() => handleAddBtn({ id, name, price })}
        >
          Buy
        </button>
        <span className="right">${price}</span>
      </div>
    </div>
  );
};

export default ProductItem;
