import React from "react";
import { TodoItem } from "./TodoItem";
// import { useState, useEffect } from 'react';

export const Todos = (props) => {
  // const [products, setProducts] = useState([]);

  // useEffect(() => {
  //   fetch("https://7c74h6rm89.execute-api.us-east-2.amazonaws.com/dev/todos")
  //     .then((response) => response.json())
  //     .then((products) => {
  //       setProducts(products);
  //     });
  // }, []);
  // console.log("props.todos");
  // console.log(props.todos[0]);

  return <TodoItem todos={props.todos}  onDelete={props.onDelete}/>;
};
