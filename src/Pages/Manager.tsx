import React from "react"
import Header from "../components/Header/Header"
import Footer from "../components/Footer/Footer"
import Card from "../components/Card/Card"
import { useParams } from "react-router-dom"
import cardData from "../cardData"
import { useEffect } from "react"
import Collapse from "../components/Collapse/Collapse"

function Manager() {
  const { id } = useParams()
  const selectedCard = cardData.find(
    (card) => card.id === Number(id)
  )
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
  return (
    <div className="bg-sky-600 text-white">
      <Header></Header>
      <div className="mt-6 flex justify-center">
        <h1 className="text-4xl font-bold">
          Área do Gestor
        </h1>
      </div>
      <div className="container m-auto grid items-center justify-center justify-items-center sm:grid-flow-col">
        {selectedCard && (
          <Card
            {...selectedCard}
            button={"Voltar"}
            color={"bg-sky-600"}
          />
        )}
        <div className="m-6 flex flex-wrap">
          <div className="m-6 flex flex-col gap-1">
            <Collapse
              index={0}
              title={"Arquivos do Cliente"}
              description={
                "Upload de arquivos:"
              }></Collapse>
            <Collapse
              index={1}
              title={"Fundação"}
              description={
                "Upload de arquivos:"
              }></Collapse>
            <Collapse
              index={2}
              title={"Geotécnico"}
              description={
                "Upload de arquivos:"
              }></Collapse>
            <Collapse
              index={3}
              title={"Arquitetura"}
              description={
                "Upload de arquivos:"
              }></Collapse>
            <Collapse
              index={4}
              title={"Projeto Estrutural"}
              description={
                "Upload de arquivos:"
              }></Collapse>
            <Collapse
              index={5}
              title={"Hidrossanitário"}
              description={
                "Upload de arquivos:"
              }></Collapse>
            <Collapse
              index={6}
              title={"Infraestrutura"}
              description={
                "Upload de arquivos:"
              }></Collapse>
          </div>
        </div>
      </div>
      <Footer></Footer>
    </div>
  )
}

export default Manager
