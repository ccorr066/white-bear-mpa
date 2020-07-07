import React from "react"
import saveIcon from "../../icons/save.svg"
import Header from "../ui/Header"

export default function CreateImagery() {
  return (
    <div className="container">
      <div className="row">
        <div className="col-12 col-xl-6 offset-xl-3 col-lg-8 offset-lg-2 col-md-10 offset-md-1">
          <Header />

          <div
            className="btn-group d-flex"
            role="navigation"
            aria-label="navigation"
          >
            <a
              href="review-answer.html"
              type="button"
              className="btn btn-secondary tab-active"
            >
              Create new
            </a>
            <a
              href="review-imagery.html"
              type="button"
              className="btn btn-secondary tab-separator "
            >
              Review
            </a>
            <a
              href="all-cards.html"
              type="button"
              className="btn btn-secondary tab-separator"
            >
              All cards
            </a>
          </div>
          <h4 className="my-4  text-center text-muted">
            Add memorable imagery
          </h4>
          <div className="mb-2">
            <div className="card bg-primary lead">
              <div className="card-body">
                <textarea
                  rows="11"
                  id="textImagery"
                  autoFocus={"true"}
                  cols="40"
                ></textarea>
              </div>
            </div>
            <div className="card bg-secondary">
              <div className="card-body">
                One morning, when Gregor Samsa woke from troubled dreams, he
                found himself transformed in his bed into a horrible vermin. He
                lay on his armour-like back, and if he lifted his head a little
                he could see his brown belly, slightly domed and divided by
                arches into stiff sections. The bedding was hardly.
              </div>
            </div>
          </div>

          <p className="float-right mb-5" id="imageryCount">
            0/240
          </p>
          <div className=" clearfix"></div>

          <button className="btn btn-link" id="create-error">
            Back to answer
          </button>

          <button
            type="button"
            className="btn btn-primary btn-lg float-right "
            id="save-imagery"
          >
            <img
              src={saveIcon}
              width="20px"
              style={{ marginBottom: "3px;" }}
              className="mr-2"
              alt=""
            />
            Save
          </button>
        </div>
      </div>
    </div>
  )
}
