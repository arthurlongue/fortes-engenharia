import React from "react"
import Modal from "../Modal/Modal"
import ModalDesigner from "../Modal/ModalDesigner"

function Collapse({ index, title, description }) {
  return (
    <div className="collapse-arrow collapse static rounded-lg bg-white text-slate-600 shadow-xl">
      <input type="checkbox" />
      <div className="collapse-title text-xl font-medium">
        {title}
      </div>
      <div className="collapse-content">
        <ModalDesigner
          label={"Ver Planilha"}
          modalTitle={"Selecione a planilha:"}
          modalDescription={
            "Em construção..."
          }></ModalDesigner>
        <br />
        <br />
        <Modal text={"download de arquivos"}></Modal>
        <p className="mt-2">{description}</p>
        <input
          type="file"
          className="file-input-ghost file-input w-full max-w-xs bg-slate-100 shadow-lg hover:bg-slate-50"
        />
      </div>
    </div>
  )
}

export default Collapse
