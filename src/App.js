import "./App.css";
import { Header } from "./MyComponents/Header";
import { Login } from "./MyComponents/Login";
import { Todos } from "./MyComponents/Todos";
import { UpdateTodo } from "./MyComponents/UpdateTodo";
import { AddTodoButton } from "./MyComponents/AddTodoButton";
import { AddTodo } from "./MyComponents/AddTodo";
import NewTable from "./MyComponents/NewTable";
import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
// import axios from 'axios';
import apiCall from "./Apis/apiCall";
import config from "./Apis/development.json";

function App() {
  const [todos, setTodos] = useState([]);
  // on delete function for deleting a todo
  const onDelete = async (todo) => {
    console.log(todo.id);
    // call delete api
    // let result = await axios.delete(`https://7c74h6rm89.execute-api.us-east-2.amazonaws.com/dev/deletetodo?id=${todo.id}`)
    let status = await apiCall(config.restApis.deleteTodo, todo.id);
    console.log("status", status);
    if (status) {
      setTodos(
        todos.filter((e) => {
          return e !== todo;
        })
      );
    } else console.log("not deleted");
  };

  useEffect(() => {
    console.log("hi use effect hook");
    callAPI();
  }, [todos]);

  const callAPI = async () => {
    let result = await apiCall(config.restApis.getTodoList);
    setTodos(result);
  };

  return (
    <>
      <Router>
        <Header title="My Todos List" />
        <Switch>
          <Route
            exact
            path="/"
            render={() => {
              return (
                <>
                  <Login />
                </>
              );
            }}
          ></Route>{" "}
          <Route exact path="/todos">
            <Todos todos={todos} onDelete={onDelete} /> <AddTodoButton />
          </Route>{" "}
          <Route exact path="/updateTodo">
            <UpdateTodo />
          </Route>{" "}
          <Route exact path="/new">
            <NewTable />
          </Route>{" "}
          <Route exact path="/addtodo">
            <AddTodo />
          </Route>{" "}
        </Switch>{" "}
      </Router>{" "}
    </>
  );
}

export default App;
