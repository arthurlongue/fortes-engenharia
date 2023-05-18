import React from "react"
import Header from "../components/Header/Header"
import Footer from "../components/Footer/Footer"
import Hero from "../components/Hero/Hero"
import Card from "../components/Card/Card"
import cardData from "../cardData"
import ModalProject from "../components/Modal/ModalProject"

function Home() {
  return (
    <div className="bg-slate-100 text-white">
      <Header></Header>
      <Hero></Hero>

      <div
        id="cards-grid"
        className="flex flex-wrap place-content-center bg-sky-600">
        <div className="my-8 flex min-h-max w-screen bg-sky-600">
          <ModalProject></ModalProject>
        </div>

        {cardData.map((card) => (
          <Card
            key={card.id}
            {...card}
            button={["Equipe Fortes", "Projetista"]}
            color={["", "bg-sky-600"]}
          />
        ))}
      </div>
      <Footer></Footer>
    </div>
  )
}

export default Home
