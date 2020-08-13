import React from "react"
import { Box, Typografy } from "@material-ui/core"
import { makeStyles, useTheme } from "@material-ui/core/styles"
import ServicesCard from "./ServicesCard.js"

const Services = () =>{

  const theme = useTheme()

  const classes = useStyles({
    container:{
      [theme.breakpoints.up("md")]:{
	display:"flex",
	flexwrap:"wrap",
      }
    }
  })

  return(
    <Box width="100%">
      <ServicesCard title="Desarrollo Web" para="Nos encargamos de crear sitios web y aplicacionos de alto nivel para tu negocio" src="./desktop-solid.svg"/>
      <ServicesCard title="Diseño UI/UX" para="Creamos la interface adecuada para que tu negocio despegue y tenga éxito en su campo" src="./desktop-solid.svg"/>
      <ServicesCard title="Desarrollo Móvil" para="Usamos las tecnologías más recientes para ofrecer las mejores aplicaciones móviles para tu negocio" src="./desktop-solid.svg"/>
    </Box> 
  )
}

export default Services
