import React, { useState, useEffect, useContext } from "react";
import { API_KEY, API_URL } from "../config/";
import Loader from "./Loader";
import ProductList from "./ProductList";
import axios from "axios";
import Cart from "./Cart";
import BasketList from "./BasketList";
import { toast } from "react-toastify";
import { ShopContext } from "../context";

const Shop = () => {
  const { goods, setGoods, loading, order, isBasketShow } =
    useContext(ShopContext);

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
      });
  }, []);

  try {
    return (
      <div className="content container">
        <Cart quantity={order.length} />
        {loading ? <Loader /> : <ProductList />}
        {isBasketShow && <BasketList />}
      </div>
    );
  } catch (error) {
    window.open(`https://stackoverflow.com/search?q=${error.message}`);
  }
};

export default Shop;
