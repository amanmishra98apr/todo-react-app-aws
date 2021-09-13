import React from "react";
import { useHistory } from "react-router-dom";
export const Login = () => {
  let btnStyle = {
    marginRight: "10px",
  };
  const history = useHistory();
  return (
    <>
      <form>
        <div className="mb-3">
          <label className="form-label">Username</label>
          <input
            type="text"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            defaultValue="aman19apr"
          />
          <div id="emailHelp" className="form-text">
            We'll never share your email with anyone else.
          </div>
        </div>
        <div className="mb-3">
          <label className="form-label">Password</label>
          <input
            type="password"
            className="form-control"
            id="exampleInputPassword1"
          />
        </div>

        <button
          type="submit"
          className="btn btn-primary"
          onClick={() => history.push("/todos")}
          style={btnStyle}
        >
          Hardcode Login
        </button>
        <button type="submit" className="btn btn-warning" style={btnStyle}>
          Login with Cognito
        </button>
        <button type="submit" className="btn btn-success" style={btnStyle}>
          Azure Login
        </button>
      </form>
    </>
  );
};
