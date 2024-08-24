import React from "react";
import Layer from "../layer/Layer";

function SignupPage() {
  return (
    <Layer>
      <div style={{ marginTop: "30px" }}>
        <form action="">
          <label htmlFor="">Username</label>
          <input type="text" name="" id="" />
          <label htmlFor="">email</label>
          <input type="text" name="" id="" />
          <label htmlFor="">Password</label>
          <input type="password" name="" id="" />
          <button type="submit">Signup</button>
        </form>
      </div>
    </Layer>
  );
}

export default SignupPage;
