import React from "react";
import "./sass/main.scss";

import Form from "./components/form";

function App() {
  return (
      <div className="container">
        <Form/>

       {/*
        Add reusable form,
       ->
       <Form type=Password> </Form>
      */}
      </div>
  );
}

export default App;


/*

 <form action="" id="form" class="form">
          <h2>Register With Us</h2>
          <div class="form-control">
            <label for="username">Username</label>
            <input type="text" id="username" placeholder="Enter username" />
            <small>Error message</small>
          </div>
          <div class="form-control">
            <label for="email">Email</label>
            <input type="text" id="email" placeholder="Enter email" />
            <small>Error message</small>
          </div>
          <div class="form-control">
            <label for="password">Password</label>
            <input type="password" id="password" placeholder="Enter password" />
            <small>Error message</small>
          </div>
          <div class="form-control">
            <label for="password2">Confirm Password</label>
            <input
              type="password"
              id="password2"
              placeholder="Enter password again"
            />
            <small>Error message</small>
          </div>
          <button>Submit</button>
        </form>

*/