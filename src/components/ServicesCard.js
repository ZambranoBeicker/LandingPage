import React from "react"
import { CardMedia, Card, CardContent, Box, Typography } from "@material-ui/core"
import { withStyles, makeStyles, useTheme} from '@material-ui/styles';


const styles = {
  contentHover:{
    '&:hover':{
       boxShadow: "0 5px 13px 0",
      // transform: "Scale(1.05)",
       transition: ".2s",
      
    }

  }

}

const ServicesCard = ({classes, title, para, src}) =>{

  const theme = useTheme()

  const useStyles = makeStyles({
  
	cardMedia:{
	  maxWidth:132,
	  margin: ".5rem auto 1.5rem",	
	},
	cardContent:{
	  color: "white",
	  textAlign: "center",
	  paddingBottom: "0 !important",

	},
	card:{
	  padding: "1rem .75rem",
	  background: "#101d45",
          boxShadow: "0 5px 10px 0",
	  transition: ".2s",
	},
	cardMediaContainer:{
	  backgroundColor:"black"
	},
	cardTitle:{
	  fontSize:"1.5rem",
	  marginBottom: "1rem", 
	},
 	cardParagraph:{
	  fontSize:".875rem"
	}, 
  })

  const primaryClasses = useStyles()
  
  return(
    <Box maxWidth={386} mx="auto" py="1.25rem" mt="2rem">
      <Card className={primaryClasses.card + " " + classes.contentHover}>
        <CardMedia classes={{root:primaryClasses.cardMedia, hoverClass:classes.contentHover}} component="img" src={src}/> 	
	<CardContent  className={primaryClasses.cardContent}>
	  <Typography className={primaryClasses.cardTitle} variant="h3">{title}</Typography>
	  <Typography className={primaryClasses.cardParagraph} >{para}</Typography>
	</CardContent>
      </Card>
    </Box>
  )
}

export default withStyles(styles)(ServicesCard)
