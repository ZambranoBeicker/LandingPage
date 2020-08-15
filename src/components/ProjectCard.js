import React from "react"
import { Card, CardMedia, Box, Typography, Button } from "@material-ui/core"
import { withStyles } from "@material-ui/core/styles"



const styles = {
      button:{
	transition:".2s",
	background:"#3E58AC",
	color:"white",
	marginTop:"1.5rem",
	"&:hover":{
	  background:"#2D407C",
	  transition:".2s",
	
	}
      },
      typo:{
        fontSize: "1.5rem",
	color:"white",
      },
      hoverElement:{
	opacity:0,
	transition:".2s",
        '&:hover':{
	  opacity:1,
	  cursor:"pointer",
	},
       media:{
         position:"relative"
       }
      }
}

const ProjectCard = ({classes}) =>{

  return (
   <Box mx="auto" mt="1rem" maxWidth={386} position="relative" bgcolor="#1dcff"> 
    <Card>
      <CardMedia component="img" src="./proyecto.png" />
      <Box position="absolute" width="100%" bottom={0} top={0} bgcolor="transparent" className={classes.hoverElement}>
        <Box py="1.75rem" position="absolute" bottom={0} width="100%" bgcolor="#101d45" textAlign="center">
          <Typography className={classes.typo} variant="h5">SomeUniqueBrand</Typography>
          <Button className={classes.button}>Ver Proyecto</Button>
        </Box>
      </Box>
    </Card>
   </Box>
  )
}

export default withStyles(styles)(ProjectCard)
