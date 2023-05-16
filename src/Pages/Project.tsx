import React from "react"
import Header from "../components/Header/Header"
import Footer from "../components/Footer/Footer"
import Card from "../components/Card/Card"
import { useParams } from "react-router-dom"
import cardData from "../cardData"
import { useEffect } from "react"

function Project() {
  const { id } = useParams()
  const selectedCard = cardData.find(
    (card) => card.id === Number(id)
  )
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
  return (
    <div className="bg-slate-100 text-white">
      <Header></Header>
      {selectedCard && <Card {...selectedCard} />}
      <Footer></Footer>
    </div>
  )
}

export default Project
