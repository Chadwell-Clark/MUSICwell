import React, { useState } from "react"
import { useHistory } from "react-router-dom"
import { authApi, userStorageKey } from "./authSettings"
import "./Login.css"

export const Register = () => {

    const [registerUser, setRegisterUser] = useState({ firstName: "", lastName: "", email: "" })
    const [conflictDialog, setConflictDialog] = useState(false)

    const history = useHistory()

    const handleInputChange = (event) => {
        const newUser = { ...registerUser }
        newUser[event.target.id] = event.target.value
        setRegisterUser(newUser)
    }

    const existingUserCheck = () => {
        
        return fetch(`${authApi.localApiBaseUrl}/${authApi.endpoint}?email=${registerUser.email}`)
            .then(res => res.json())
            .then(user => !!user.length)
    }

    const handleRegister = (e) => {
        e.preventDefault()

        existingUserCheck()
            .then((userExists) => {
                if (!userExists) {
                    fetch(`${authApi.localApiBaseUrl}/${authApi.endpoint}`, {
                        method: "POST",
                        headers: {
                            "Content-Type": "application/json"
                        },
                        body: JSON.stringify({
                            email: registerUser.email,
                            name: `${registerUser.firstName} ${registerUser.lastName}`,
                            admin: false
                        })
                    })
                        .then(res => res.json())
                        .then(createdUser => {
                            if (createdUser.hasOwnProperty("id")) {
                                sessionStorage.setItem(userStorageKey, createdUser.id)
                                history.push("/")
                            }
                        })
                }
                else {
                    setConflictDialog(true)
                }
            })

    }

    return (
      <main className="container--login" style={{ textAlign: "center" }}>
        <dialog className="dialog dialog--password" open={conflictDialog}>
          <div>Account with that email address already exists</div>
          <button
            className="button--close"
            onClick={(e) => setConflictDialog(false)}
          >
            Close
          </button>
        </dialog>
        <form className="form--login" onSubmit={handleRegister}>
          <h1 className="login-title">&nbsp;&nbsp;Music[well]&nbsp;&nbsp;</h1>
          <div className="login-card">
            <div className="login-div">
              <h2>Register your [well]</h2>
            </div>
            {/* <fieldset> */}
            <div className="login-font-weight">
              <label htmlFor="firstName"> First Name </label>
            </div>
            <div className="login-div">
              <input
                type="text"
                name="firstName"
                id="firstName"
                className="form-control"
                placeholder="First name"
                required
                autoFocus
                value={registerUser.firstName}
                onChange={handleInputChange}
              />
            </div>
            {/* </fieldset> */}
            {/* <fieldset> */}
            <div className="login-font-weight">
              <label htmlFor="lastName"> Last Name </label>
            </div>
            <div className="login-div">
              <input
                type="text"
                name="lastName"
                id="lastName"
                className="form-control"
                placeholder="Last name"
                required
                value={registerUser.lastName}
                onChange={handleInputChange}
              />
            </div>
            {/* </fieldset> */}
            {/* <fieldset> */}
            <div className="login-font-weight">
              <label htmlFor="inputEmail"> Email address </label>
            </div>
            <div className="login-div">
              <input
                type="email"
                name="email"
                id="email"
                className="form-control"
                placeholder="Email address"
                required
                value={registerUser.email}
                onChange={handleInputChange}
              />
            </div>
            {/* </fieldset> */}
            {/* <fieldset> */}
            <div className="login-div">
              <button className="login-btn" type="submit">
                {" "}
                Login{" "}
              </button>
            </div>
            {/* </fieldset> */}
          </div>
        </form>
      </main>
    );
}

