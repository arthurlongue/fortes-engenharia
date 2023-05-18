import React from "react"
import { useNavigate } from "react-router-dom"

function Card({
  id,
  img,
  title,
  description,
  badgeEmphasis,
  badgeEmphasisColor,
  badges,
  button,
  color,
}) {
  const navigate = useNavigate()

  const handleClick = (user) => {
    navigate(`/${user}/${id}`)
  }

  const handleGoBack = () => {
    window.history.back()
  }

  return (
    <div className="card m-6 w-72 rounded-lg bg-slate-50 text-slate-600 shadow-xl">
      <figure className="max-h-32">
        <img src={img} alt="Shoes" />
      </figure>
      <div className="card-body py-4">
        <h2 className="card-title">{title}</h2>
        <div
          className={`badge border-none text-white ${badgeEmphasisColor}`}>
          {badgeEmphasis}
        </div>
        <p className="flex-grow-0">{description}</p>
        <div className="card-actions mb-auto">
          {badges.map((badge, i) => (
            <div key={i} className="badge-outline badge">
              {badge}
            </div>
          ))}
        </div>
        {button === "Voltar" ? (
          <Btn
            onClick={handleGoBack}
            color={color}
            button={button}
          />
        ) : (
          <div
            className="flex flex-col
           flex-wrap self-end">
            <Btn
              onClick={() => handleClick("manager")}
              color={color[0]}
              button={button[0]}
            />
            <Btn
              onClick={() => handleClick("designer")}
              color={color[1]}
              button={button[1]}
            />
          </div>
        )}
      </div>
    </div>
  )
}

function Btn({ onClick, color, button }) {
  return (
    <button
      onClick={onClick}
      className={`btn-sm btn mt-4 rounded border-none bg-green-400 text-white shadow-lg ${color} `}>
      {button}
    </button>
  )
}

export default Card
