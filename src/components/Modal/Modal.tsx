import React from "react"
import Menu from "../Menu/Menu"

function Modal() {
  return (
    <>
      <label
        htmlFor="my-modal-6"
        className="btn bg-sky-600 text-white shadow-lg hover:bg-sky-400">
        download de arquivos
      </label>
      <input
        type="checkbox"
        id="my-modal-6"
        className="modal-toggle"
      />
      <div className="modal modal-bottom  sm:modal-middle">
        <div className="modal-box bg-slate-100 text-slate-600">
          <h3 className="mb-4 text-lg font-bold">
            Selecione os arquivos que deseja baixar!
          </h3>
          <Menu></Menu>
          <div className="modal-action mt-0">
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
