import React from "react"
import Header from "../components/Header/Header"
import Footer from "../components/Footer/Footer"
import Hero from "../components/Hero/Hero"
import Card from "../components/Card/Card"

function Home() {
  return (
    <div className="bg-slate-100 text-white">
      <Header></Header>
      <Hero></Hero>
      <div
        id="cards-grid"
        className="flex flex-wrap place-content-center bg-sky-600">
        <Card
          img={"/card-img.jpg"}
          tittle={"Projeto Arcelor"}
          description={
            "Exemplo de descrição ou informações extras do projeto."
          }
          badgeEmphasis={"NOVO"}
          badgeEmphasisColor={"bg-blue-600"}
          badges={[
            "Geografia",
            "Projeto Estrutural",
            "Arquitetura",
            "Tanque",
            "Fundação",
          ]}></Card>
        <Card
          img={"/card-img.jpg"}
          tittle={"Projeto Vale"}
          description={
            "lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem ."
          }
          badgeEmphasis={"ALTERAÇÃO"}
          badgeEmphasisColor={"bg-pink-600"}
          badges={[
            "Infraestrutura",
            "Projeto Estrutural",
            "Tanque",
          ]}></Card>
        <Card
          img={"/card-img.jpg"}
          tittle={"Teste"}
          description={
            "Exemplo de descrição ou informações extras do projeto."
          }
          badgeEmphasis={"ATUALIZAÇÃO"}
          badgeEmphasisColor={"bg-red-600"}
          badges={[
            "Geotecnia",
            "Projeto Estrutural",
          ]}></Card>
        <Card
          img={"/card-img.jpg"}
          tittle={"Teste"}
          description={
            "Exemplo de descrição ou informações extras do projeto."
          }
          badgeEmphasis={"IMPORTANTE"}
          badgeEmphasisColor={"bg-purple-600"}
          badges={["Infraestrutura", "arquitetura"]}></Card>
        <Card
          img={"/card-img.jpg"}
          tittle={"Teste"}
          description={
            "Exemplo de descrição ou informações extras do projeto."
          }
          badgeEmphasis={"REVER"}
          badgeEmphasisColor={"bg-orange-600"}
          badges={["Infraestrutura", "arquitetura"]}></Card>
      </div>
      <Footer></Footer>
    </div>
  )
}

export default Home
