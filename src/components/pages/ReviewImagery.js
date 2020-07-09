import React from "react"
import AppTemplate from "./AppTemplate"
import { Link } from "react-router-dom"

export default function ReviewImagery() {
  return (
    <AppTemplate>
      <div className="mb-5">
        <div className="card bg-primary">
          <div className="card-body">
            One morning, when Gregor Samsa woke from troubled dreams, he found
            himself transformed in his bed into a horrible vermin. He lay on his
            armour-like back, and if he lifted his head a little he could see
            his brown belly, slightly domed and divided by arches into stiff
            sections. The bedding was hardly.
          </div>
        </div>
      </div>
      <Link to="/create-imagery" className="btn btn-link">
        Previous card
      </Link>
      <div className="float-right">
        <Link to="/review-answer" className="btn btn-outline-primary ">
          Show answer
        </Link>
      </div>
    </AppTemplate>
  )
}
