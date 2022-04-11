import React, { useContext } from "react";
import { ShopContext } from "../context";

export default function BasketItem(props) {
  const { id, name, price, quantity } = props;

  const { increment, decrement, removeOrder } = useContext(ShopContext);

  return (
    <li className="collection-item" key={id}>
      <span className="second">
        <i>
          {name} x {quantity} = {price * quantity}
        </i>
        <i className="material-icons addBtn" onClick={() => increment(id)}>
          add
        </i>
        <i className="material-icons removeBtn" onClick={() => decrement(id)}>
          remove
        </i>
      </span>
      <span className="secondary-content">
        <i
          className="material-icons basket-delete"
          onClick={() => removeOrder(id)}
        >
          delete
        </i>
      </span>
    </li>
  );
}
