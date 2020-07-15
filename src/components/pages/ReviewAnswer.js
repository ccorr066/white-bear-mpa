import React from "react"
import thumbsUpIcon from "../../icons/thumbs-up.svg"
import AppTemplate from "./AppTemplate"
import { Link } from "react-router-dom"
import memoryCards from "../mock-data/memory-cards"

const memoryCard = memoryCards[2]
export default function ReviewAnswer() {
  return (
    <AppTemplate>
      <div className="mb-5">
        <div className="card bg-primary">
          <div className="card-body">{memoryCard.imagery}</div>
        </div>
        <div className="card bg-secondary">
          <div className="card-body">{memoryCard.answer}</div>
        </div>
      </div>
      <Link to="/all-cards" className="btn btn-link mt-4">
        Edit
      </Link>
      <div className="float-right mt-4">
        <Link to="/review-empty" className="btn btn-outline-primary mr-4">
          Needs work
        </Link>
        <Link to="/" className="btn btn-primary ">
          <img
            src={thumbsUpIcon}
            width="20px"
            style={{ marginBottom: "5px", marginRight: "8px" }}
            className="mr-2"
            alt=""
          />
          Got it
        </Link>
      </div>
    </AppTemplate>
  )
}
