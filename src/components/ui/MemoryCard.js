import React from "react"
import editIcon from "../../icons/edit.svg"
import { Link } from "react-router-dom"

export default function MemoryCard(props) {
  return (
    <div className="row">
      <div className="my-5 col-9 ">
        <div className="card bg-primary ">
          <div className="card-body">{props.imagery}</div>
        </div>
        <div className="card bg-secondary">
          <div className="card-body">{props.answer}</div>
        </div>
      </div>
      <div className="col-3 mt-2">
        <Link to="/edit" className="btn btn-link float-right">
          <img
            src={editIcon}
            width="18px"
            style={{ marginBottom: "3px" }}
            className="mr-2"
            alt=""
          />
          Edit
        </Link>
      </div>
    </div>
  )
}
