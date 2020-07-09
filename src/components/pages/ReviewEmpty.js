import React from "react"
import AppTemplate from "./AppTemplate"
import { Link } from "react-router-dom"

export default function ReviewEmpty() {
  return (
    <AppTemplate>
      <div className="mb-5">
        <div className="card text-muted">
          <h4 className="my-4 text-center">Out of cards</h4>
        </div>
      </div>
      <Link to="/review-answer" className="btn btn-link">
        Previous card
      </Link>
      <div className="float-right">
        <Link to="/review-imagery" className="btn btn-outline-primary ">
          Get more cards
        </Link>
      </div>
    </AppTemplate>
  )
}
