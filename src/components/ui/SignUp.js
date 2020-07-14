import React from "react"
import { Link } from "react-router-dom"

export default class SignUp extends React.Component {
  constructor(props) {
    super(props)
    console.log("Im in a new class component")
    this.state = {
      isDisplayingInputs: false,
      emailError: "",
      passwordError: "",
    }
  }

  toggleSignUpInputs() {
    console.log("clicked")
    {
      this.setState({
        isDisplayingInputs: true,
      })
    }
  }

  render() {
    return (
      <div className="col-xl-5 col-sm-6 col-12 mb-6">
        <div className="card">
          <div className="card-body text-dark text-sans">
            <h2 className="card-title text-serif">Nice to meet you</h2>
            <p className="card-text mb-4">
              Sign up for White Bear.Free Forever.
            </p>
            {this.state.isDisplayingInputs && (
              <>
                <p
                  style={{ color: "blue", fontSize: "13px" }}
                  className="mb-3"
                  id="sign-up-text"
                >
                  Let's get you signed up.
                </p>

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
                  <Link
                    to="/create-answer"
                    type="button"
                    className="mt-5 btn btn-success btn-block"
                    id="lets-go"
                  >
                    Let's go!
                  </Link>
                </div>
              </>
            )}

            {!this.state.isDisplayingInputs && (
              <button
                type="button"
                className="btn btn-success btn-block mt-3"
                id="sign-up"
                onClick={() => {
                  this.toggleSignUpInputs()
                }}
              >
                Sign up
              </button>
            )}
          </div>
        </div>
      </div>
    )
  }
}
