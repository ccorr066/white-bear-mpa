import React from "react"
import AppTemplate from "./AppTemplate"
import MemoryCard from "../ui/MemoryCard"
import memoryCards from "../mock-data/memory-cards"
export default function AllCards() {
  return (
    <AppTemplate>
      <div className="row">
        <div className="col-8">
          <input
            className="form-control text-muted search-border"
            type="text"
            placeholder="Search for a word"
            aria-label="Search"
          />
        </div>
        <div className="col-4">
          <button type="button" className="btn btn-secondary float-right">
            Search
          </button>
        </div>
      </div>
      <div className="row mt-4">
        <div className="col-4">
          <p className="text-muted mt-2">Sort cards by</p>
        </div>
        <div className="col-8">
          <select className="form-control select-menu">
            <option defaultValue>Most recent</option>
            <option>Oldest</option>
            <option>Hardest</option>
            <option>Easiest</option>
          </select>
        </div>
      </div>

      {memoryCards.map((memoryCard) => {
        return (
          <MemoryCard
            answer={memoryCard.answer}
            imagery={memoryCard.imagery}
            key={memoryCard.id}
          />
        )
      })}
    </AppTemplate>
  )
}
