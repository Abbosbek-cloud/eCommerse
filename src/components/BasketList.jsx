import React from "react";
import BasketItem from "./BasketItem";

const BasketList = (props) => {
  const { order } = props;

  const totalPrice = order.reduce((sum, good) => {
    return sum + good.price * good.quantity;
  }, 0);
  return (
    <div className="bgBl">
      <ul className="collection basket-list">
        <li className="collection-item active">
          <span>Savatcha</span>{" "}
          <i
            className="material-icons basket-close"
            onClick={props.handleBasketShow}
          >
            close
          </i>
        </li>
        {order.length ? (
          order.map((item) => {
            return (
              <BasketItem
                key={item.id}
                {...item}
                removeOrder={props.removeOrder}
                increment={props.increment}
                decrement={props.decrement}
              />
            );
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
