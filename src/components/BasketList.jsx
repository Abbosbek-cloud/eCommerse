import React, { useContext } from "react";
import BasketItem from "./BasketItem";
import { ShopContext } from "../context";

const BasketList = () => {
  const { order = [], handleBasketShow = Function.prototype } =
    useContext(ShopContext);
  const totalPrice = order.reduce((sum, good) => {
    return sum + good.price * good.quantity;
  }, 0);
  return (
    <div className="bgBl">
      <ul className="collection basket-list">
        <li className="collection-item active">
          <span>Savatcha</span>{" "}
          <i className="material-icons basket-close" onClick={handleBasketShow}>
            close
          </i>
        </li>
        {order.length ? (
          order.map((item) => {
            return <BasketItem key={item.id} {...item} />;
          })
        ) : (
          <li className="collection-item">Bu yerda hali hech narsa yo'q</li>
        )}
        <li className="collection-item active">
          <span>Umumiy miqdori:</span> <span>{totalPrice}</span>
        </li>
      </ul>
    </div>
  );
};

export default BasketList;
