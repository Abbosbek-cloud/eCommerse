import React, { useState, useEffect } from "react";
import { API_KEY, API_URL } from "../config/";
import Loader from "./Loader";
import ProductList from "./ProductList";
import axios from "axios";
import Cart from "./Cart";
import BasketList from "./BasketList";
import { toast } from "react-toastify";

const Shop = () => {
  const [goods, setGoods] = useState([]);
  const [loading, setLoading] = useState(true);
  const [order, setOrder] = useState([]);
  const [isBasketShow, setBasketShow] = useState(false);
  console.log(order);

  const decrement = (itemId) => {
    const newOrder = order.map((item) => {
      if (item.id === itemId) {
        const newQuantity =
          item.quantity <= 0 ? (item.quantity = 0) : item.quantity - 1;
        toast.error("1 dona mahsulot ayrildi!");

        return {
          ...item,
          quantity: newQuantity,
        };
      } else {
        return item;
      }
    });

    setOrder(newOrder);
  };

  const increment = (itemId) => {
    const newOrder = order.map((item) => {
      if (item.id === itemId) {
        const newQuantity = item.quantity + 1;
        toast.success("1 dona mahsulot qo'shildi");
        return {
          ...item,
          quantity: newQuantity,
        };
      } else {
        return item;
      }
    });

    setOrder(newOrder);
  };

  const handleAddBtn = (item) => {
    const itemIndex = order.findIndex((orderItem) => orderItem.id === item.id);

    if (itemIndex < 0) {
      const newItem = {
        ...item,
        quantity: 1,
      };

      setOrder([...order, newItem]);
    } else {
      const newOrder = order.map((orderItem, index) => {
        if (index === itemIndex) {
          return {
            ...orderItem,
            quantity: orderItem.quantity + 1,
          };
        } else {
          return orderItem;
        }
      });
      setOrder(newOrder);
    }

    toast.success("Mahsulot savatchaga muvaffaqiyatli qo'shildi!");
  };

  const removeOrder = (itemId) => {
    const newOrder = order.filter((item) => item.id !== itemId);
    setOrder(newOrder);
    toast.error("Mahsulot savatchadan o'chirildi!");
  };

  const handleBasketShow = () => {
    setBasketShow(!isBasketShow);
  };

  useEffect(() => {
    axios
      .get(API_URL, {
        headers: {
          Authorization: API_KEY,
        },
      })
      .then((res) => {
        const data = res.data;
        setGoods(data.featured);
        setLoading(false);
      });
  }, []);

  try {
    return (
      <div className="content container">
        <Cart quantity={order.length} handleBasketShow={handleBasketShow} />
        {loading ? (
          <Loader />
        ) : (
          <ProductList goods={goods} handleAddBtn={handleAddBtn} />
        )}
        {isBasketShow && (
          <BasketList
            order={order}
            handleBasketShow={handleBasketShow}
            removeOrder={removeOrder}
            increment={increment}
            decrement={decrement}
          />
        )}
      </div>
    );
  } catch (error) {
    window.open(`https://stackoverflow.com/search?q=${error.message}`);
  }
};

export default Shop;
