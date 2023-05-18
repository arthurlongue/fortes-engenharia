import React from "react"

function Hero() {
  return (
    <div className="hero min-h-screen bg-green-50 text-slate-700">
      <div className="hero-content min-w-full bg-white text-center">
        <div className="max-w-md">
          <h1 className="text-5xl font-bold">
            Olá Usuário,
          </h1>
          <h1 className="text-5xl font-bold">
            bem-vindo ao Ponto Fortes.
          </h1>
          <p className="py-6">
            Abaixo você encontra os projetos que a Fortes
            Engenharia está desenvolvendo!
          </p>
          <a href="#cards-grid">
            <button className={`btn-primary btn`}>
              VER PROJETOS
            </button>
          </a>
        </div>
      </div>
    </div>
  )
}

export default Hero
