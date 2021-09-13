import React from "react";
import Table from 'react-bootstrap/Table'
import {SubTodo} from './SubTodo';

export const TodoItem = (props) => {
let myStyle = {
  overflow: "scroll"
}
  return (
    
    <Table striped bordered hover style={myStyle}>
    <thead>
      <tr>
        <th>Description</th>
        <th>Target Date</th>
        <th>Is Completed?</th>
        <th>Update</th>
        <th>Delete</th>
      </tr>
    </thead>
    <tbody>
     
       {
       props.todos.map((todo) => (
      <SubTodo todo={todo} key={todo.id} onDelete={props.onDelete}/>
       ))
       }
      
    </tbody>
  </Table>
  
  );
};
