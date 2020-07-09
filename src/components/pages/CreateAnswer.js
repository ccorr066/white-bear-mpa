import React from "react"
import AppTemplate from "./AppTemplate"
import { Link } from "react-router-dom"

export default function CreateAnswer() {
  return (
    <AppTemplate>
      <h4 className="my-4 text-center text-muted">Add an answer</h4>
      <div className="mb-2">
        <div className="card bg-secondary">
          <div className="card-body">
            <textarea rows="6" col="30" id="textBox"></textarea>
          </div>
        </div>
      </div>

      <p className="float-right mb-5" id="count">
        0/240
      </p>
      <div className="clearfix"></div>
      <div className="float-right">
        <Link to="/create-imagery" className="btn btn-outline-primary mt-4">
          Next
        </Link>
      </div>
    </AppTemplate>
  )
}
