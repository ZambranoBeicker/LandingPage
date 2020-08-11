import React from "react"
import { AppBar, Typography, Link, Box, Container} from "@material-ui/core"
import { makeStyles, useTheme } from "@material-ui/core/styles"

const Header = () =>{

const theme = useTheme()

const useHeaderStyles = makeStyles({
	appBar: {
	  backgroundColor: "White",
	  color: "black",
	  padding: "1rem 1.5rem",
	  flexDirection: "row",
	  
	},
	linksContainer:{
	  [theme.breakpoints.down("md")]:{
	    display: "none",
	  }
	},
	links: {
	  margin: "0 .75rem 0 .75rem",
	},
	typo: {
	  margin:"auto 0" ,
	},
	brand:{
	  marginRight: "auto"
	},
	container:{
	  display: "inherit",
	}


})


  const classes = useHeaderStyles()

  return (
    <AppBar className={classes.appBar}>
     <Container className={classes.container}>  
      <Box width="10%" className={classes.brand}>
	<Typography variant="h4">MARCA</Typography>  
      </Box> 	
      <Box display="flex" className={classes.linksContainer}>
        <Typography className={classes.typo}><Link href="#this" className={classes.links} color="inherit">Home</Link></Typography>  
        <Typography className={classes.typo}><Link href="#this" className={classes.links} color="inherit">Nosotros</Link></Typography>  
        <Typography className={classes.typo}><Link href="#this" className={classes.links} color="inherit">Servicios</Link></Typography>  
      </Box> 
     </Container>  
    </AppBar>
  )
}

export default Header
