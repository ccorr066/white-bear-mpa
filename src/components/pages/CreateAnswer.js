import React from "react"
import appLogo from "../../icons/logo-app.svg"

export default function CreateAnswer() {
  return (
    <div className="container">
      <div className="row">
        <div className="col-12 col-xl-6 offset-xl-3 col-lg-8 offset-lg-2 col-md-10 offset-md-1">
          <img src={appLogo} width="32px;" alt="White-bear-logo" />
          <h3 className="d-inline text-brand">White Bear</h3>
          <a href="index.html" className="btn btn-link float-right">
            Log Out
          </a>

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
              className="btn btn-secondary tab-separator"
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
            <a
              href="create-imagery.html"
              className="btn btn-outline-primary mt-4"
            >
              Next
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}
