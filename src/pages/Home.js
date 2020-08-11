import React from "react"
import { Container} from "@material-ui/core"
import Header from "../components/Header.js" 
import Hero from "../components/Hero.js" 

const Home = () =>{
  return(
    <Container>
      <Header />
      <Hero />	
    </Container> 
  )

}

export default Home
