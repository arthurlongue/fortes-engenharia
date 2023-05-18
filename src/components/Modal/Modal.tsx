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

          <div className="form-control mt-6">
            <div className="input-group">
              <select className="select-bordered select bg-slate-50 text-slate-600">
                <option>
                  <a href="/public/avatar.png">
                    planilha.excel
                  </a>
                </option>
                <option>apresentação.ppx</option>
                <option>dados.txt</option>
              </select>
              <button className="btn bg-sky-600 text-white">
                download
              </button>
            </div>
          </div>
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
