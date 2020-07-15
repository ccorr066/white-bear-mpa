import React from "react"
import AppTemplate from "./AppTemplate"
import memoryCards from "../mock-data/memory-cards"
import { Link } from "react-router-dom"
const memoryCard = memoryCards[2]
export default function ReviewImagery() {
  return (
    <AppTemplate>
      <div className="mb-5">
        <div className="card bg-primary">
          <div className="card-body">{memoryCard.imagery}</div>
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
