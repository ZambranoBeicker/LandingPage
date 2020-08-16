import React from "react"
import { Box, Typography, Container, Link } from "@material-ui/core"
import { makeStyles, useTheme } from "@material-ui/core/styles"

const Footer = () => {
   const useStyles = makeStyles({
   	 img:{
	   width:"100%",
	   height: "auto",
	 },
         link:{
	   margin: "0 .5rem",

	 },
         texts:{ 
	   color:"white",
	   fontSize: 14,
	 }
         
   })

   const classes = useStyles()


   return(
     <Box mt="8rem" bgcolor="#101d45" py="2rem">
       <Container>
         <Box mx="auto" maxWidth={330} justifyContent="center" display="flex" flexWrap="wrap" >
           <Box mx=".5rem">
             <Link href="#localhost:3000"><img className={classes.img} src="./icon-facebook.svg"/></Link>
           </Box>
     	   <Box mx=".5rem">
             <Link href="#localhost:3000"><img className={classes.img} src="./icon-twitter.svg"/></Link>
           </Box>
           <Box mx=".5rem">
             <Link href="#localhost:3000"><img className={classes.img} src="./icon-linkedin.svg"/></Link>
           </Box> 
     	   <Box mx=".5rem">
             <Link href="#localhost:3000"><img className={classes.img} src="./icon-instagram.svg"/></Link>
           </Box>
         </Box>
         <Box mx="auto" color="white" maxWidth={330} justifyContent="center" display="flex" my="1.75rem" flexWrap="wrap">
     	   <Typography className={classes.link}><Link className={classes.texts}>Home</Link></Typography>
     	   <Typography className={classes.link}><Link className={classes.texts}>Services</Link></Typography>
     	   <Typography className={classes.link}><Link className={classes.texts}>Proyectos</Link></Typography>
     	   <Typography className={classes.link}><Link className={classes.texts}>Contacto</Link></Typography>
         </Box>
         <Box mt="1.5rem" textAlign="center" mx="auto" maxWidth={330}>
          <Typography className={classes.texts}>© All rights reserved</Typography>
         </Box>
         
       </Container>
     </Box>
   )
}

export default Footer
