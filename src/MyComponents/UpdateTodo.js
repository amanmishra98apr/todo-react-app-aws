import React from "react";
import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { useHistory } from "react-router-dom";
// import axios from 'axios'
import  apiCall  from '../Apis/apiCall';
import config from "../Apis/development.json";

export const UpdateTodo = (props) => {
  const [singleTodo, setSingleTodo] = useState([]);
  const location = useLocation();
  const history = useHistory();
  const id = location.state;

  useEffect(() => {
    apiCall(config.restApis.getsingleTodo, id)
      .then((response) => {
        setSingleTodo(response);
      })
      .catch((err) => console.log("err", err));
  });

  
  const [title, setTitle] = useState("");
  const [targetDate, setTargateDate] = useState("");
  const submit = (e) => {
    e.preventDefault();

    // save change to dynamo db using put api
    let payload = {
      username: singleTodo.username,
      description: title ? title : singleTodo.title,
      id: singleTodo.id,
      done: singleTodo.done,
      targetDate: targetDate ? targetDate : singleTodo.targetDate,
    };
    apiCall(config.restApis.updateTodo, payload)
      .then((response) => {
        history.push("/todos");
      })
      .catch((error) => console.error(error));
  };

  return (
    <>
      <form onSubmit={submit}>
        <div className="mb-3">
          <label className="form-label">Description</label>
          <input
            type="text"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            defaultValue={singleTodo.description}
            onChange={(event) => setTitle(event.target.value)}
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Target Date</label>
          <input
            type="date"
            className="form-control"
            id="date"
            defaultValue={singleTodo.targetDate}
            onChange={(event) => setTargateDate(event.target.value)}
          />
          <input
            type="hidden"
            className="form-control"
            id="username"
            defaultValue={singleTodo.username}
          />
          <input
            type="hidden"
            className="form-control"
            id="id"
            defaultValue={singleTodo.id}
          />
          <input
            type="hidden"
            className="form-control"
            id="done"
            defaultValue={singleTodo.done}
          />
        </div>

        <button type="submit" className="btn btn-primary">
          Save
        </button>
      </form>
    </>
  );
};
