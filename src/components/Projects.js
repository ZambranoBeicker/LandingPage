import React from "react"
import { Typography, Box } from "@material-ui/core"
import { withStyles } from "@material-ui/core/styles"
import ProjectCard from "./ProjectCard.js"


const styles = {
  title:{
    fontSize:"1.75rem",
    marginBottom:"2rem",
  }
}


const Projects = ({classes}) =>{


   
  return(
    <Box mt="8rem" width="100%" py="1.5rem">
      <Box textAlign="center">
        <Typography variant="h2">Proyectos</Typography>
      </Box>
      <Box display="flex" flexWrap="wrap">
        <ProjectCard />  
        <ProjectCard />  
        <ProjectCard />  
        <ProjectCard />  
        <ProjectCard />  
        <ProjectCard />  
      </Box>
    </Box>
  )

}

export default withStyles(styles)(Projects)
