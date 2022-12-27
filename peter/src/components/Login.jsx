import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export const Login = (props) => {
  const [credential, setcredential] = useState({ email: "", password: "" });
  let navigate = useNavigate();
  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await fetch("http://localhost:5000/api/auth/login", {
      method: "POST", // *GET, POST, PUT, DELETE, etc.
      body: JSON.stringify({
        email: credential.email,
        password: credential.password,
      }),
      headers: {
        "Content-Type": "application/json",
      },
    });
    const json = await response.json();
    console.log(json);

    if (json.success) {
      localStorage.setItem("auth", json.authToken);
      navigate("/");
      props.showalert("Logged In Successfully", "success");
    } else {
      props.showalert("Invalid Credentials", "danger");
    }
  };
  const handleChange = (event) => {
    setcredential({ ...credential, [event.target.name]: event.target.value });
  };
  return (
    <div>
      <h1>Login to Peter</h1>
      <form onSubmit={handleSubmit}>
        <div className="form-group my-4">
          <label htmlFor="email">Email address</label>
          <input
            type="email"
            className="form-control"
            id="email"
            name="email"
            aria-describedby="emailHelp"
            placeholder="Enter email"
            value={credential.email}
            onChange={handleChange}
          />
          <small id="emailHelp" className="form-text text-muted">
            We'll never share your email with anyone else.
          </small>
        </div>
        <div className="form-group my-4">
          <label htmlFor="exampleInputPassword1">Password</label>
          <input
            type="password"
            className="form-control"
            id="password"
            name="password"
            placeholder="Password"
            value={credential.password}
            onChange={handleChange}
            minLength={5}
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </div>
  );
};
