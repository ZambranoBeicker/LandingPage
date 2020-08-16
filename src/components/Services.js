import React from "react"
import { Box, Typography } from "@material-ui/core"
import { makeStyles, useTheme } from "@material-ui/core/styles"
import ServicesCard from "./ServicesCard.js"

const Services = () =>{

  const theme = useTheme()

  const useStyles = makeStyles({
    container:{
      [theme.breakpoints.up("md")]:{
	display:"flex",
	flexwrap:"wrap",
      }},
      title:{
      textAlign: "center",
      fontSize:"1.75rem", 
      [theme.breakpoints.up("sm")]:{
        fontSize:"2rem" 
      }, 
      [theme.breakpoints.up("md")]:{
        fontSize:"2.5rem" 
      },	
      
      [theme.breakpoints.up("lg")]:{
        fontSize:"3.25rem", 
	marginBottom: "1rem",
      },
    }
  })

  const classes = useStyles()

  return(
    <Box mt="8rem">
     <Typography className={classes.title} variant="h2">Nuestros Servicios</Typography>
      <Box width="100%" className={classes.container}>
        <ServicesCard title="Desarrollo Web" para="Nos encargamos de crear sitios web y aplicacionos de alto nivel para tu negocio" src="./desktop-solid.svg"/>
        <ServicesCard title="Diseño UI/UX" para="Creamos la interface adecuada para que tu negocio despegue y tenga éxito en su campo" src="./desktop-solid.svg"/>
        <ServicesCard title="Desarrollo Móvil" para="Usamos las tecnologías más recientes para ofrecer las mejores apps móviles para tu negocio" src="./desktop-solid.svg"/>
      </Box> 
    </Box>
  )
}

export default Services
