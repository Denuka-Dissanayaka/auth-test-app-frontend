import React, { useEffect } from "react";
import Layer from "../layer/Layer";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { getMe } from "../redux/authSlice";

function Dashboardpage() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { isError, user } = useSelector((state) => state.auth);

  useEffect(() => {
    dispatch(getMe());
  }, [dispatch]);

  useEffect(() => {
    if (isError) {
      navigate("/");
    }
  }, [isError, navigate]);
  return (
    <Layer>
      <div>
        <h1>Dashboard</h1>
        <p>{user && user.username}</p>
        <p>{user && user.email}</p>
      </div>
    </Layer>
  );
}

export default Dashboardpage;
