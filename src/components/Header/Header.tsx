import React from "react"

function Header() {
  return (
    <div className="navbar bg-slate-100 text-blue-600">
      <div className="tex navbar-start">
        <div className="dropdown">
          <label
            tabIndex={0}
            className="btn-ghost btn-circle btn ">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h7"
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="dropdown-content menu rounded-box menu-compact mt-3 w-52 bg-slate-100 p-2 text-slate-700 shadow">
            <li>
              <a>PLACEHOLDER</a>
            </li>
            <li>
              <a>PLACEHOLDER</a>
            </li>
            <li>
              <a>PLACEHOLDER</a>
            </li>
          </ul>
        </div>
      </div>
      <div className="navbar-center">
        <a className="btn-ghost btn text-xl normal-case">
          <img
            className="h-auto w-36"
            src="\FORTES_LOGOMARCA.png"
            alt=""
          />
        </a>
      </div>
      <div className="navbar-end">
        <button className="btn-ghost btn-circle btn">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            />
          </svg>
        </button>
        <button className="btn-ghost btn-circle btn">
          <div className="indicator">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
              />
            </svg>
            <span className="badge-primary badge badge-xs indicator-item border-none bg-green-400 text-[10px]">
              7
            </span>
          </div>
        </button>
        <div className="dropdown dropdown-end">
          <label
            tabIndex={0}
            className="btn-ghost btn-circle avatar btn">
            <div className="w-8 rounded-full">
              <img src="\FORTES_LOGOMARCA.png" />
            </div>
          </label>
          <ul
            tabIndex={0}
            className="dropdown-content menu rounded-box menu-compact mt-3 w-52 bg-slate-100 p-2 shadow">
            <li>
              <a className="justify-between">
                Perfil
                <span className="badge border-none bg-green-400 text-white">
                  New
                </span>
              </a>
            </li>
            <li>
              <a>Gestão</a>
            </li>
            <li>
              <a>Sair</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Header