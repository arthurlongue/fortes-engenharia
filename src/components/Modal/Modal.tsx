import React from "react"
import Menu from "../Menu/Menu"

function Modal() {
  return (
    <>
      <label
        htmlFor="my-modal-6"
        className="btn bg-slate-50 text-slate-600 shadow-lg">
        download de arquivos
      </label>
      <input
        type="checkbox"
        id="my-modal-6"
        className="modal-toggle"
      />
      <div className="modal modal-bottom  sm:modal-middle">
        <div className="modal-box bg-slate-100 text-slate-600">
          <h3 className="text-lg font-bold">
            Selecione os arquivos que deseja baixar!
          </h3>
          <Menu></Menu>
          <div className="modal-action">
            <label
              htmlFor="my-modal-6"
              className="btn bg-green-400 text-white">
              Voltar
            </label>
          </div>
        </div>
      </div>
    </>
  )
}

export default Modal
