import React from "react"

export default function Navigation() {
  return (
    <div
      className="btn-group d-flex  mt-1"
      role="navigation"
      aria-label="navigation"
    >
      <a href="review-answer.html" type="button" className="btn btn-secondary ">
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
  )
}
