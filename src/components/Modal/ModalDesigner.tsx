import React from "react"
import Menu from "../Menu/Menu"

function ModalDesigner() {
  return (
    <>
      <label
        htmlFor="my-modal-6"
        className="btn bg-slate-50 text-slate-600 shadow-lg">
        preencher planilha
      </label>
      <input
        type="checkbox"
        id="my-modal-6"
        className="modal-toggle"
      />
      <div className="modal modal-bottom  sm:modal-middle">
        <div className="modal-box bg-slate-100 text-slate-600">
          <h3 className="text-lg font-bold">
            Preencha os dados na planilha abaixo:
          </h3>
          <div className="flex w-1/2 flex-col">
            <p>Em construção...</p>
          </div>

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

export default ModalDesigner
