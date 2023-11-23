import React from "react"

function ModalProject() {
 return (
  <>
   <label
    htmlFor="my-modal-8"
    className="btn m-auto  bg-green-500 text-3xl text-white shadow-lg hover:scale-110  hover:bg-green-400">
    Criar Projeto
   </label>
   <input type="checkbox" id="my-modal-8" className="modal-toggle" />
   <div className="modal modal-bottom  sm:modal-middle">
    <div className="modal-box bg-white text-slate-600">
     <h3 className="mb-4 text-lg font-bold">
      Insira os dados do novo projeto:
     </h3>
     <ModalInput text="Nome do Projeto:"></ModalInput>
     <ModalInput text="Status:"></ModalInput>
     <ModalInput text="Cliente:"></ModalInput>
     <ModalInput text="Data:"></ModalInput>
     <ModalInput text="TAGS:"></ModalInput>
     <div className="modal-action mt-0">
      <label htmlFor="my-modal-8" className="btn bg-green-400 text-white">
       Voltar
      </label>
     </div>
    </div>
   </div>
  </>
 )
}

function ModalInput({ text }) {
 return (
  <div className="form-control w-full max-w-xs">
   <label className="label">
    <span className="label-text text-slate-700">{text}</span>
   </label>
   <input
    type="text"
    placeholder="Digite aqui"
    className="input-bordered input w-full max-w-xs bg-slate-50"
   />
  </div>
 )
}

export default ModalProject
