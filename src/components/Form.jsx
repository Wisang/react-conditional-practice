import React from "react";
import Input from "./Input";
import { userIsRegistered } from "./App";

function Form() {
  return (
    <form className="form">
      <Input type="text" placeholder="Username" />
      <Input type="password" placeholder="Password" />
      {!userIsRegistered && <Input type="password" placeholder="Confirm Password" />}
      <button type="submit">{userIsRegistered ? "login" : "Register"}</button>
    </form>
  );
}

export default Form;
