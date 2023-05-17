import React from "react"

function Collapse({ index, title, description }) {
  return (
    <div
      tabIndex={index}
      className="collapse-arrow rounded-box collapse bg-slate-300">
      <div className="collapse-title text-xl font-medium">
        {title}
      </div>
      <div className="collapse-content">
        <p>{description}</p>
      </div>
    </div>
  )
}

export default Collapse
