import React from "react"

function CompactCard() {
  return (
    <div className="card m-6  w-72 bg-slate-50 text-slate-600 shadow-xl">
      <figure>
        <img src="src\assets\card-img.jpg" alt="Shoes" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">Projeto</h2>
        <div className="badge border-none bg-blue-600 text-white">
          NOVO
        </div>
        <p>Informações sobre o projeto.</p>
        <div className="card-actions ">
          <div className="badge-outline badge">Prédio</div>
          <div className="badge-outline badge">
            Fundação
          </div>
        </div>
        <button className="btn-sm btn self-end border-none bg-green-400 text-white">
          Acessar
        </button>
      </div>
    </div>
  )
}

export default CompactCard
