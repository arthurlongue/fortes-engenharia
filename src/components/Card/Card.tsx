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
}) {
  const navigate = useNavigate()

  const handleClick = () => {
    navigate(`/project/${id}`)
  }

  return (
    <div className="card m-6  w-72 bg-slate-50 text-slate-600 shadow-xl">
      <figure>
        <img src={img} alt="Shoes" />
      </figure>
      <div className="card-body">
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

        <button
          onClick={handleClick}
          className="btn-sm btn self-end border-none bg-green-400 text-white">
          Acessar
        </button>
      </div>
    </div>
  )
}

export default Card
