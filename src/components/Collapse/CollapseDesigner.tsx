import React from "react"
import Modal from "../Modal/Modal"
import ModalDesigner from "../Modal/ModalDesigner"

function CollapseDesigner({ index, title, description }) {
  return (
    <div className="collapse-arrow collapse static rounded-lg bg-white text-slate-600 shadow-xl">
      <input type="checkbox" />
      <div className="collapse-title text-xl font-medium">
        {title}
      </div>
      <div className="collapse-content">
        <ModalDesigner
          label={"Preencher Planilha"}
          modalTitle={"Digite abaixo os dados da planilha:"}
          modalDescription={
            "Em construção..."
          }></ModalDesigner>
        <br />
        <br />
        <Modal text={"Download de Arquivos"}></Modal>
        <p className="mt-2">{description}</p>
        <input
          type="file"
          className="file-input-ghost file-input w-full max-w-xs bg-slate-100 shadow-lg hover:bg-slate-50"
        />
      </div>
    </div>
  )
}

export default CollapseDesigner
