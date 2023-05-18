import React from "react"
import Modal from "../Modal/Modal"

function Collapse({ index, title, description }) {
  return (
    <div className="collapse-arrow rounded-box collapse bg-white text-slate-600 shadow-xl">
      <input type="checkbox" />
      <div className="collapse-title text-xl font-medium">
        {title}
      </div>
      <div className="collapse-content">
        <Modal></Modal>
        <p className="mt-2">{description}</p>
        <input
          type="file"
          className="file-input-ghost file-input w-full max-w-xs bg-slate-400 shadow-lg hover:bg-slate-200"
        />
      </div>
    </div>
  )
}

export default Collapse
