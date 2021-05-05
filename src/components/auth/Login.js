//     *****     Chad[well] Clark 2021     *****     //

import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import { authApi, userStorageKey } from "./authSettings";
import "./Login.css";

export const Login = () => {
  const [loginUser, setLoginUser] = useState({ email: "" });
  const [existDialog, setExistDialog] = useState(false);

  const history = useHistory();

  const handleInputChange = (event) => {
    const newUser = { ...loginUser };
    newUser[event.target.id] = event.target.value;
    setLoginUser(newUser);
  };

  const existingUserCheck = () => {
    return fetch(
      `${authApi.localApiBaseUrl}/${authApi.endpoint}?email=${loginUser.email}`
    )
      .then((res) => res.json())
      .then((user) => (user.length ? user[0] : false));
  };

  const handleLogin = (e) => {
    e.preventDefault();

    existingUserCheck().then((exists) => {
      if (exists) {
        sessionStorage.setItem(userStorageKey, exists.id);
        history.push("/");
      } else {
        setExistDialog(true);
      }
    });
  };

  return (
    <main className="container--login">
    {/* <main className="container--login" style={{ textAlign: "center" }}> */}
      <div className="">
        <dialog className="dialog dialog--auth" open={existDialog}>
            <div className="dialog-inner">
          <div>User does not exist</div>
          <button
            className="login-btn"
            onClick={(e) => setExistDialog(false)}
          >Darn
          </button>
          </div>
        </dialog>
        <div className="login-centered">
          <h1 className="login-title">&nbsp;&nbsp;Music[well]&nbsp;&nbsp;</h1>

          <div className="login-card">
            <section>
              <form className="form--login" onSubmit={handleLogin}>
                <div className="login-div">
                  <h2>Login with email</h2>
                </div>
                {/* <fieldset> */}
                {/* <div className="login-div"> */}
                {/* </div> */}
                <div className="login-div">
                  <label htmlFor="inputEmail"></label>
                  <input
                    type="email"
                    id="email"
                    className="form-control"
                    placeholder="Email address"
                    required
                    autoFocus
                    value={loginUser.email}
                    onChange={handleInputChange}
                  />
                </div>
                {/* </fieldset> */}
                {/* <fieldset> */}
                <div className="login-div">
                  <button className="login-btn" type="submit">
                    Login
                  </button>
                </div>
                {/* </fieldset> */}
              </form>
            </section>
            <section className="link--register">
              <div className="login-div login-font-weight">
                Get your own [well]
              </div>
              <Link to="/register">
                <div className="login-div">
                  <button className="login-btn">Register</button>
                </div>
              </Link>
            </section>
          </div>
        </div>
      </div>
    </main>
  );
};
