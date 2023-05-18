import React from "react"

function Collapse({ index, title, description }) {
  return (
    <div className="collapse-arrow rounded-box collapse bg-white text-slate-600 shadow-xl">
      <input type="checkbox" />
      <div className="collapse-title text-xl font-medium">
        {title}
      </div>
      <div className="collapse-content">
        <p>{description}</p>

        <input
          type="file"
          className="file-input-ghost file-input w-full max-w-xs bg-white shadow-lg"
        />
      </div>
    </div>
  )
}

export default Collapse