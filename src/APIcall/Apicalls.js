import React from "react";
import { useEffect, useState } from "react";
import { CALL_DATA } from "../APIcall/Action/Index";
import store from '../Store'


const Cards = () => {
  const [first, setfirst] = useState("");
  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res?.json())
      .then((json) => {
        setTimeout(() => {
          setfirst(json);
        }, 0);
        store.dispatch({
          type: CALL_DATA,
          payload: json,
        });
      });
  }, [0]);

  return <div></div>;
};

export default Cards;
