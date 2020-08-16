import React from "react"
import { Box, Typography, Container, Link } from "@material-ui/core"
import { withStyles, makeStyles, useTheme } from "@material-ui/core/styles"


const styles = {
  imgHover:{
    borderRadius:"50%",
    transition:".2s",
    "&:hover":{
      boxShadow:"0 5px 10px rgba(0,0,0,.25)",
      transition:".2s",
    }
  }
}
const Footer = ({classes}) => {
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

   const footerClasses = useStyles()



   return(
     <Box mt="8rem" bgcolor="#101d45" py="2rem">
       <Container>
         <Box mx="auto" maxWidth={330} justifyContent="center" display="flex" flexWrap="wrap" >
           <Box mx=".5rem">
             <Link href="#localhost:3000"><img className={footerClasses.img + " " + classes.imgHover} src="./icon-facebook.svg"/></Link>
           </Box>
     	   <Box mx=".5rem">
             <Link href="#localhost:3000"><img className={footerClasses.img  + " " + classes.imgHover} src="./icon-twitter.svg"/></Link>
           </Box>
           <Box mx=".5rem">
             <Link href="#localhost:3000"><img className={footerClasses.img + " " + classes.imgHover} src="./icon-linkedin.svg"/></Link>
           </Box> 
     	   <Box mx=".5rem">
             <Link href="#localhost:3000"><img className={footerClasses.img + " " + classes.imgHover} src="./icon-instagram.svg"/></Link>
           </Box>
         </Box>
         <Box mx="auto" color="white" maxWidth={330} justifyContent="center" display="flex" my="1.75rem" flexWrap="wrap">
     	   <Typography className={footerClasses.link}><Link className={footerClasses.texts}>Home</Link></Typography>

     	   <Typography className={footerClasses.link}><Link className={footerClasses.texts}>Services</Link></Typography>
     	   <Typography className={footerClasses.link}><Link className={footerClasses.texts}>Proyectos</Link></Typography>
     	   <Typography className={footerClasses.link}><Link className={footerClasses.texts}>Contacto</Link></Typography>
         </Box>
         <Box mt="1.5rem" textAlign="center" mx="auto" maxWidth={330}>
          <Typography className={footerClasses.texts}>© All rights reserved</Typography>
         </Box>
         
       </Container>
     </Box>
   )
}

export default withStyles(styles)(Footer)
