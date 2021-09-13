import React from 'react'
import { useHistory } from "react-router-dom";


export const AddTodoButton = () => {
    const history = useHistory();

    return (
        <div>
            <button type="submit" className="btn btn-primary" onClick={() => history.push("/addtodo")}>Add Todo</button>
        </div>
    )
}
