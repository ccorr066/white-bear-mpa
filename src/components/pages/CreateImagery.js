import React from "react"
import saveIcon from "../../icons/save.svg"
import AppTemplate from "./AppTemplate"
import { Link } from "react-router-dom"

export default function CreateImagery() {
  return (
    <AppTemplate>
      <h4 className="my-4  text-center text-muted">Add memorable imagery</h4>
      <div className="mb-2">
        <div className="card bg-primary lead">
          <div className="card-body">
            <textarea
              rows="11"
              id="textImagery"
              autoFocus={true}
              cols="40"
            ></textarea>
          </div>
        </div>
        <div className="card bg-secondary">
          <div className="card-body">
            One morning, when Gregor Samsa woke from troubled dreams, he found
            himself transformed in his bed into a horrible vermin. He lay on his
            armour-like back, and if he lifted his head a little he could see
            his brown belly, slightly domed and divided by arches into stiff
            sections. The bedding was hardly.
          </div>
        </div>
      </div>

      <p className="float-right mb-5" id="imageryCount">
        0/240
      </p>
      <div className=" clearfix"></div>

      <Link to="/create-answer" className="btn btn-link" id="create-error">
        Back to answer
      </Link>

      <Link
        to="/create-answer"
        type="button"
        className="btn btn-primary btn-lg float-right "
        id="save-imagery"
      >
        <img
          src={saveIcon}
          width="20px"
          style={{ marginBottom: "3px" }}
          className="mr-2"
          alt=""
        />
        Save
      </Link>
    </AppTemplate>
  )
}
