import React from "react"
import Header from "../components/Header/Header"
import Footer from "../components/Footer/Footer"
import Card from "../components/Card/Card"
import { useParams } from "react-router-dom"
import cardData from "../cardData"
import { useEffect } from "react"
import Collapse from "../components/Collapse/Collapse"
import Menu from "../components/Menu/Menu"

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
      <div className="container m-auto grid justify-center sm:grid-flow-col">
        {selectedCard && (
          <Card
            {...selectedCard}
            button={"Voltar"}
            color={"bg-sky-600"}
          />
        )}
        <div className="container m-6 flex flex-wrap">
          <div className="m-6 flex flex-col gap-1">
            <Collapse
              index={0}
              title={"Arquivos do Cliente"}
              description={"teste teste teste"}></Collapse>
            <Collapse
              index={1}
              title={"Fundação"}
              description={"teste teste teste"}></Collapse>
            <Collapse
              index={2}
              title={"Geotécnico"}
              description={"teste teste teste"}></Collapse>
            <Collapse
              index={3}
              title={"Arquitetura"}
              description={"teste teste teste"}></Collapse>
            <Collapse
              index={4}
              title={"Projeto Estrutural"}
              description={"teste teste teste"}></Collapse>
            <Collapse
              index={5}
              title={"Hidrossanitário"}
              description={"teste teste teste"}></Collapse>
            <Collapse
              index={6}
              title={"Infraestrutura"}
              description={"teste teste teste"}></Collapse>
          </div>
          <div className="Menu flex items-center">
            <Menu></Menu>
          </div>
        </div>
      </div>
      <Footer></Footer>
    </div>
  )
}

export default Project
