import React from "react"
import { Container} from "@material-ui/core"
import Header from "../components/Header.js" 
import Hero from "../components/Hero.js" 
import ServicesCard from "../components/ServicesCard.js" 

const Home = () =>{
  return(
    <Container>
      <Header />
      <Hero />	
      <ServicesCard /> 
    </Container> 
  )

}

export default Home
