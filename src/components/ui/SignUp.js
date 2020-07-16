import React from "react"
import classnames from "classnames"
// import { Link } from "react-router-dom"

export default class SignUp extends React.Component {
  constructor(props) {
    super(props)
    console.log("Im in a new class component")
    this.state = {
      isDisplayingInputs: false,
      emailError: "",
      passwordError: "",
      hasEmailError: false,
      hasPasswordError: false,
    }
  }

  toggleSignUpInputs() {
    this.setState({
      isDisplayingInputs: true,
    })
  }
  setEmailState(emailInput) {
    //eslint-disable-next-line
    const emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    const lowerCaseEmailInput = emailInput.toLowerCase()

    if (emailInput === "")
      this.setState({
        emailError: "Please enter your email address. ",
        hasEmailError: true,
      })
    else if (emailRegex.test(lowerCaseEmailInput) === false) {
      console.log(" NOT A VALID EMAIL")
      this.setState({
        emailError: "Please enter a valid email address. ",
        hasEmailError: true,
      })
    } else {
      this.setState({ emailError: "", hasEmailError: false })
    }
  }

  checkHasLocalPart(passwordInput, emailInput) {
    const localPart = emailInput.split("@")[0]
    if (localPart === "") return false
    else if (localPart.length < 4) return false
    else return passwordInput.includes(localPart)
  }
  setPasswordState(passwordInput, emailInput) {
    console.log(passwordInput)
    const uniqChars = [...new Set(passwordInput)]

    if (passwordInput === "")
      this.setState({
        passwordError: "Please create your password. ",
        hasPasswordError: true,
      })
    else if (passwordInput.length < 9) {
      this.setState({
        passwordError: "Your Password must be at least 9 characters. ",
        hasPasswordError: true,
      })
    } else if (this.checkHasLocalPart(passwordInput, emailInput)) {
      this.setState({
        passwordError:
          "For your safety, your password cannot contain your email address. ",
        hasPasswordError: true,
      })
    } else if (uniqChars.length < 3) {
      this.setState({
        passwordError:
          "For your safety, your password must contain ar least 3 unique characters",
        hasPasswordError: true,
      })
    } else {
      this.setState({ passwordError: "", hasPasswordError: false })
    }
  }

  validateAndCreateUser() {
    const emailInput = document.getElementById("email-input").value
    const passwordInput = document.getElementById("password-input").value
    this.setEmailState(emailInput)
    this.setPasswordState(passwordInput, emailInput)
    if (
      this.state.hasEmailError === false &&
      this.state.hasPasswordError === false
    ) {
      console.log("VALID!!")
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
                    className={classnames({
                      "form-control": true,
                      "mb-2": true,
                      "is-invalid": this.state.hasEmailError,
                    })}
                    type="email"
                    id="email-input"
                  />
                  {this.state.hasEmailError && (
                    <p
                      id="error-email"
                      className="mb-4 text-danger"
                      style={{ fontSize: "13px" }}
                    >
                      {this.state.emailError}
                    </p>
                  )}
                  <p
                    className="mb-4 text-danger"
                    style={{ fontSize: "13px" }}
                  ></p>
                  <h4 className="text-muted">Create a password</h4>
                  <input
                    className={classnames({
                      "form-control": true,
                      "mb-2": true,
                      "is-invalid": this.state.hasPasswordError,
                    })}
                    type="password"
                    id="password-input"
                  />
                  {this.state.hasPasswordError && (
                    <p
                      id="passwordError"
                      className="text-danger mb-4"
                      style={{ fontSize: "13px" }}
                    >
                      {this.state.passwordError}
                    </p>
                  )}
                  <button
                    type="button"
                    className="mt-5 btn btn-success btn-block"
                    id="lets-go"
                    onClick={() => {
                      this.validateAndCreateUser()
                    }}
                  >
                    Let's go!
                  </button>
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
