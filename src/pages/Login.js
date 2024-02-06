import React from "react";
import { Stack } from '@mui/material'

import "./Login.css";
import login_image from "../graphics/login-image.png";

const Login = () => {
  return (
    <>
      {/* <div id="id01" class="modal"> */}

      <Stack alignItems="center">

      <Stack direction="row" gap="10px">

      <button style={{ width: '150px', padding: '5px' }} onclick="document.getElementById('id01').style.display='block'">
        <a href="volunteer-homepage">
        Login as Volunteer
      </a>
      </button>
      <button style={{ width: '150px', padding: '5px' }} onclick="document.getElementById('id01').style.display='block'">
      <a href="admin-homepage">
        Login as Admin
      </a>
      </button>
      </Stack>
      
      <img src={login_image} alt="login" width="100%" height="800" />
      </Stack>

      <div id="id01" class="modal">
        <form
          class="modal-content animate"
          action="/action_page.php"
          method="post"
        >
          <div class="imgcontainer">
            <span
              onclick="document.getElementById('id01').style.display='none'"
              class="close"
              title="Close Modal"
            >
              &times;
            </span>
            <img
              src="https://cdn-icons-png.flaticon.com/512/3541/3541871.png"
              alt="Avatar"
              class="avatar"
              width="100"
              height="300"
            />
          </div>

          <div class="container">
            <label for="uname">
              <b>Username</b>
            </label>
            <input
              type="text"
              placeholder="Enter Username"
              name="uname"
              required
            />

            <label for="psw">
              <b>Password</b>
            </label>
            <input
              type="password"
              placeholder="Enter Password"
              name="psw"
              required
            />

            <button type="submit">Login</button>
            <label>
              <input type="checkbox" checked="checked" name="remember" />{" "}
              Remember me
            </label>
          </div>

          <div class="container">
            <button
              type="button"
              onclick="document.getElementById('id01').style.display='none'"
              class="cancelbtn"
            >
              Cancel
            </button>
            <span class="psw">
              Forgot <a href="#">password?</a>
            </span>
          </div>
        </form>
      </div>
      {/* </div> */}
    </>
  );
};

export default Login;
