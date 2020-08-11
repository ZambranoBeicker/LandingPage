import React from "react"
import { Box, Typography, Button } from "@material-ui/core"
import { makeStyles, useTheme } from "@material-ui/core/styles"

const Hero = () =>{
  const theme = useTheme()

  const useStyles = makeStyles({
	title: {
	  fontSize: "1.5rem",
	  marginBottom: "1rem",
	  [theme.breakpoints.up("sm")]:{
	     fontSize: "2rem",
	},
	[theme.breakpoints.up("md")]:{
	     fontSize: "3rem",
	},
	[theme.breakpoints.up("lg")]:{
	     fontSize: "4rem",
	},
	},
        paragraph: {
	  fontSize: ".875rem",
	[theme.breakpoints.up("sm")]:{
	     fontSize: "1rem",
	},
	[theme.breakpoints.up("lg")]:{
	     fontSize: "1.25rem",	
	}
	}, 
	button: {
	  fontSize: 14,
	  marginTop: "2rem"
	  
	},	
	heroContainer: {
	  textAlign: "center",
	  [theme.breakpoints.up("sm")]:{
	     width: "90%",	
	},   
	[theme.breakpoints.up("md")]:{
	     width: "70%",	
	}, 
	[theme.breakpoints.up("lg")]:{
	     width: "60%",	
	}, 
	}	  
  })

  const classes = useStyles()

  return(
    <Box mx="auto" mt="12rem" className={classes.heroContainer}>
      <Typography className={classes.title} variant="h1">Crea el futuro de la tecnología con nosotros</Typography> 
      <Typography className={classes.paragraph}>Hacemos que tu negocio crezca con nuestros servicios digitales y así destacar su verdadero valor</Typography> 
      <Button className={classes.button} variant="contained">CONTACTANOS</Button> 
    </Box>
  )

}

export default Hero
	
