import React from "react"
import Modal from "../Modal/Modal"
import ModalDesigner from "../Modal/ModalDesigner"

function CollapseDesigner({ index, title, description }) {
  return (
    <div className="collapse-arrow rounded-box collapse bg-white text-slate-600 shadow-xl">
      <input type="checkbox" />
      <div className="collapse-title text-xl font-medium">
        {title}
      </div>
      <div className="collapse-content">
        <ModalDesigner></ModalDesigner>
        <br />
        <br />
        <Modal></Modal>
        <p className="mt-2">{description}</p>
        <input
          type="file"
          className="file-input-ghost file-input w-full max-w-xs bg-white shadow-lg"
        />
      </div>
    </div>
  )
}

export default CollapseDesigner