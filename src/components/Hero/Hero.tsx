import React from "react"

function Hero() {
 return (
  <>
   <div
    className="hero min-h-screen"
    style={{ backgroundImage: "url(/wallpaper-engenharia.jpg)" }}>
    <div className="hero-overlay bg-opacity-60"></div>
    <div className="hero-content text-center ">
     <div className="max-w-md">
      <h1 className="mb-5 text-5xl font-bold">Olá Usuário,</h1>
      <h1 className="text-5xl font-bold">bem-vindo ao Ponto Fortes.</h1>
      <p className="mb-5">
       Abaixo você encontra os projetos que a Fortes Engenharia está
       desenvolvendo!
      </p>
      <a href="#cards-grid">
       <button className={`btn-primary btn bg-sky-500`}>VER PROJETOS</button>
      </a>
     </div>
    </div>
   </div>
  </>
 )
}

export default Hero
