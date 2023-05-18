import React from "react"

function Menu() {
  return (
    <ul className="menu w-56 rounded-lg bg-sky-50 text-slate-700 shadow-xl">
      <li>
        <a
          className="active:bg-green-400"
          href="/GovernardorValadares.dwg"
          download={"/GovernardorValadares.dwg"}>
          Dados.dwg
        </a>
      </li>
      <li>
        <a
          className="active:bg-green-400"
          href="/apresentação.pdf"
          download={"/apresentação.pdf"}>
          Apresentação.pdf
        </a>
      </li>
      <li>
        <a
          className="active:bg-green-400"
          href="/txt.txt"
          download={"/txt.txt"}>
          Dados.txt
        </a>
      </li>
    </ul>
  )
}

export default Menu
