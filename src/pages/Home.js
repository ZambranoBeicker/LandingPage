import React from "react"
import { Container} from "@material-ui/core"
import Header from "../components/Header.js" 
import Hero from "../components/Hero.js" 
import Services from "../components/Services.js" 
import Footer from "../components/Footer.js" 
import Projects from "../components/Projects.js" 
import Contact from "../components/Contact.js" 

const Home = () =>{
  return(
    <>
     <Container>
       <Header />
       <Hero />	
       <Services /> 
       <Projects />
       <Contact />
     </Container> 
       <Footer />
    </>
  )

}

export default Home
