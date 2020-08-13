import React from "react"
import { Container} from "@material-ui/core"
import Header from "../components/Header.js" 
import Hero from "../components/Hero.js" 
import Services from "../components/Services.js" 

const Home = () =>{
  return(
    <Container>
      <Header />
      <Hero />	
      <Services /> 
    </Container> 
  )

}

export default Home
