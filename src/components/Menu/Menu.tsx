import React from "react"

function Menu() {
  return (
    <ul className="menu rounded-box w-56 bg-white text-black shadow-xl ">
      <li>
        <a
          href="/avatar.png"
          className="active:bg-green-400">
          Infraestrutura
        </a>
      </li>
      <li>
        <a className="active:bg-green-400">Fundação</a>
      </li>
      <li>
        <a className="active:bg-green-400">Geotécnico</a>
      </li>
      <li>
        <a className="active:bg-green-400">Arquitetura</a>
      </li>
      <li>
        <a className="active:bg-green-400">
          Projeto Estrutural
        </a>
      </li>
      <li>
        <a className="active:bg-green-400">
          Hidrossanitário
        </a>
      </li>
    </ul>
  )
}

export default Menu
