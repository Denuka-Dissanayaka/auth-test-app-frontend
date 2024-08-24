import React from "react";
import Layer from "../layer/Layer";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { LoginUser, reset } from "../redux/authSlice";

function LoginPage() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { user, isError, isSuccess, isLoading, message } = useSelector(
    (state) => state.auth
  );

  useEffect(() => {
    if (user || isSuccess) {
      navigate("/dashboard");
    }
    dispatch(reset());
  }, [user, isSuccess, dispatch, navigate]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    dispatch(LoginUser({ username, password }));
  };

  return (
    <Layer>
      <div>
        <form
          action=""
          onSubmit={(e) => {
            handleSubmit(e);
          }}
        >
          <label htmlFor="">Username</label>
          <input
            type="text"
            name=""
            id=""
            value={username}
            onChange={(e) => {
              setUsername(e.target.value);
            }}
          />
          <label htmlFor="">Password</label>
          <input
            type="password"
            name=""
            id=""
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
            }}
          />
          <button type="submit">Login</button>
        </form>
      </div>
    </Layer>
  );
}

export default LoginPage;
