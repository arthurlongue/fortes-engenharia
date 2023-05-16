import React from "react"

function Hero() {
  return (
    <div className="hero min-h-screen bg-slate-100 text-slate-700">
      <div className="hero-content text-center">
        <div className="max-w-md">
          <h1 className="text-5xl font-bold">
            Olá Arthur, conheça a nova plataforma.
          </h1>
          <p className="py-6">
            Abaixo você encontra os projetos que a Fortes
            está desenvolvendo!
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
