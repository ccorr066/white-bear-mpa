import React from "react"
import saveIcon from "../../icons/save.svg"
import AppTemplate from "./AppTemplate"
import { Link } from "react-router-dom"

export default function Edit() {
  return (
    <AppTemplate>
      <h4 className="my-4 text-center text-muted">Edit card</h4>
      <div className="mb-2">
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

      <p className="float-right mb-5">205/240</p>
      <div className="clearfix"></div>
      <Link
        to="/all-cards"
        type="button"
        className="btn btn-link"
        style={{ float: "left" }}
      >
        Discard changes
      </Link>
      <div className="float-right">
        <Link
          to="/all-cards"
          type="button"
          className="btn btn-primary btn-lg"
          id="save-imagery"
        >
          <img
            src={saveIcon}
            width="22px"
            style={{ marginTop: "-1px" }}
            className="mr-2"
            alt=""
          />
          Save
        </Link>
      </div>
      <div className="clearfix"></div>
      <h4 className="mt-5 mb-3 text-center text-muted">Card properties</h4>
      <div className="row mb-1">
        <div className="col-4">
          <p className="mb-2 text-muted">Created on:</p>
          <p className="mb-2 text-muted">Last attempt:</p>
          <p className="mb-2 text-muted">Next attempt:</p>
          <p className="mb-2 text-muted">Consecutives:</p>
        </div>

        <div className="col-6 ml-5">
          <p className="mb-2">Dec. 21, 2019</p>
          <p className="mb-2">Dec. 31, 2019</p>
          <p className="mb-2">Jul. 14, 2020</p>
          <p className="mb-2">4</p>
        </div>
      </div>
      <div className="row">
        <div className="col">
          <form>
            <div className="custom-control custom-checkbox">
              <input
                type="checkbox"
                className="custom-control-input"
                id="check-box"
                name="example1"
              />
              <label className="custom-control-label" htmlFor="check-box">
                Show delete button
              </label>
            </div>
          </form>

          <Link to="/all-cards">
            <input
              className="btn btn-outline-danger"
              type="button"
              id="delete"
              value="Delete this Card"
            />
          </Link>
        </div>
      </div>
    </AppTemplate>
  )
}
