import React from "react";
import { useState } from "react";
// import axios from "axios";
import { useHistory } from "react-router-dom";
import apiCall from "../Apis/apiCall";
import config from "../Apis/development.json";

export const AddTodo = () => {
  const [targetDate, setTargateDate] = useState("");
  const [username, setUsername] = useState("");
  const [description, setDescription] = useState("");
  const [id, setid] = useState("");
  const [done, setDone] = useState("");
  const history = useHistory();

  //   click on submit button
  const submit = (e) => {
    e.preventDefault();

    // call post api
    if (targetDate && username && description && id && done) {
      let payload = {
        username: username,
        description: description,
        id: id,
        done: done,
        targetDate: targetDate,
      };

      apiCall(config.restApis.postTodo, payload)
        .then((response) => {
          history.push("/todos");
        })
        .catch((err) => console.log(err));
    } else {
      alert("All fields are required");
    }
  };

  return (
    <form onSubmit={submit}>
      <div className="mb-3">
        <h4> Add a Todo </h4>{" "}
      </div>{" "}
      <div className="mb-3">
        <input
          type="text"
          placeholder="Username"
          className="form-control"
          id="username"
          onChange={(event) => setUsername(event.target.value)}
        />{" "}
        <input
          type="text"
          placeholder="Description"
          className="form-control"
          id="description"
          onChange={(event) => setDescription(event.target.value)}
        />{" "}
        <input
          type="text"
          placeholder="Id"
          className="form-control"
          id="id"
          onChange={(event) => setid(event.target.value)}
        />{" "}
        <input
          type="text"
          placeholder="Is Completed?"
          className="form-control"
          id="done"
          onChange={(event) => setDone(event.target.value)}
        />{" "}
        <input
          type="date"
          placeholder="Target Date"
          className="form-control"
          id="targetDate"
          onChange={(event) => setTargateDate(event.target.value)}
        />{" "}
      </div>
      <button type="submit" className="btn btn-primary">
        Add{" "}
      </button>{" "}
    </form>
  );
};
