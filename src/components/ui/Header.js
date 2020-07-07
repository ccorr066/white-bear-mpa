import React from "react"
import appLogo from "../../icons/logo-app.svg"

export default function Header() {
  return (
    <div>
      {" "}
      <img src={appLogo} width="32px;" alt="White-bear-logo" />
      <h3 className="d-inline text-brand ml-1">White Bear</h3>
      <a href="index.html" className="btn btn-link float-right">
        Log Out
      </a>
    </div>
  )
}
