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
      <div className="flex flex-wrap place-content-center bg-sky-600">
        <Card></Card>
        <Card></Card>
        <Card></Card>
        <Card></Card>
        <Card></Card>
      </div>

      <Footer></Footer>
    </div>
  )
}

export default Home
