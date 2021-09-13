import React from 'react'
import { useHistory } from "react-router-dom";


export const SubTodo = (props) => {
  // console.log("props.todo111")

  // console.log(props.todo)

    const history = useHistory();
    const handleRoute = (todo) =>{ 
        console.log(todo.id)
        history.push({
            pathname: '/updateTodo',
            state: todo.id,
          });
      }

    return (
        
            <tr>
            <td>{props.todo.description} </td>
            <td>{props.todo.targetDate}</td>
            <td>{props.todo.done}</td>
            <td><button type="button" className="btn btn-success" onClick={() => handleRoute(props.todo)}>Update</button></td>
            <td><button type="button" className="btn btn-danger" onClick={()=>{props.onDelete(props.todo)}}>Delete</button></td>
          </tr>
        
    )
}
