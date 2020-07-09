import React from "react"
import landingLogo from "../../img/logo-landing.png"
import { Link } from "react-router-dom"

export default function Landing() {
  return (
    <div className="container">
      <div className background-image>
        <div className="row">
          <div className="col-12 mb-8 pt-6 ml-7">
            <div className="d-flex justify-content-start;">
              <img src={landingLogo} alt="white bear" />
              <div className="mt-2 ml-8">
                <h1 className="d-line text-white">White Bear</h1>
              </div>
            </div>
            <div className="row mt-5">
              <div className="col-xl-4 offset-xl-1 mb-5 col-lg-5 offset-lg-1 col-md-5 offset-md-1 col-sm-6">
                <div className="card">
                  <div className="card-body">
                    <h2 className="card-title">Nice to meet you</h2>
                    <p style={{ fontSize: "13px" }} className="mb-1">
                      Sign up for White Bear. Free forever.
                    </p>
                    <p
                      style={{ color: "blue", fontSize: "13px" }}
                      className="mb-3"
                      id="sign-up-text"
                    >
                      Let's get you signed up.
                    </p>

                    <button
                      type="button"
                      className="btn btn-success btn-block mt-3"
                      id="sign-up"
                    >
                      Sign up
                    </button>

                    <div id="drop-assign">
                      <h4 className="text-muted mt-2">Email address</h4>
                      <input
                        className="form-control thick-border"
                        type="text"
                        id="email-identity"
                      />
                      <p
                        id="error-email"
                        className="mb-4 text-danger"
                        style={{ fontSize: "13px" }}
                      ></p>
                      <h4 className="text-muted">Create a password</h4>
                      <input
                        className="form-control thick-border mb-1"
                        type="password"
                        id="password-required"
                      />
                      <p
                        id="invalid-characters"
                        className="text-danger"
                        style={{ fontSize: "13px" }}
                      ></p>
                      <button
                        type="button"
                        className="mt-5 btn btn-success btn-block"
                        id="lets-go"
                      >
                        Let's go!
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-xl-4 offset-xl-1 col-lg-5 col-md-5 col-sm-6">
                <div className="card">
                  <div className="card-body">
                    <h2 className="card-title">Welcome back</h2>
                    <p style={{ fontSize: "13px" }} className="mb-5">
                      Log in with your email address and password.
                    </p>
                    <form className="needs-validation">
                      <h4 className="text-muted">Email address</h4>
                      <input
                        className="form-control thick-border"
                        type="text"
                        id="welcome-back"
                      />
                      <p
                        id="warning-welcome"
                        className="mb-4 invalid-feedback"
                        style={{ display: "none", fontSize: "13px" }}
                      >
                        Please enter your email address.
                      </p>
                      <h4 className="text-muted mt-2">Password</h4>
                      <input
                        className="form-control thick-border"
                        type="password"
                        id="welcome-password"
                      />
                      <p
                        id="warning-welcome-password"
                        className="mb-4 invalid-feedback"
                        style={{ display: "none", fontSize: "13px" }}
                      >
                        Please enter your password.
                      </p>
                      <p
                        id="warning-welcome-password-characters"
                        className="invalid-feedback"
                        style={{ display: "none", fontSize: "13px" }}
                      >
                        Your password must be at least 9 characters.
                      </p>
                      <div className="float-right">
                        <Link
                          to="/create-answer"
                          type="submit"
                          className="btn btn-success mt-5 btn-lg"
                          id="log-in"
                        >
                          Log in
                        </Link>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
