import React from "react"
import { Card, CardHeader, CardContent, Button, Box, Typography, TextField } from "@material-ui/core"
import { makeStyles, useTheme, withStyles } from "@material-ui/core/styles"

const styles = {
  button:{
    "&:hover":{
      background:"#2D407C"
    }
  }
}


const Contact = ({classes}) =>{

  const theme = useTheme()

  const useStyles = makeStyles({
    titleForm:{
      textAlign:"center",
      fontSize:"1rem",
      [theme.breakpoints.up("md")]:{
        fontSize:"1.75rem",
      }
    },
    contactText:{
      fontSize:"1.5rem",
      [theme.breakpoints.up("md")]:{
	fontSize:"3.75rem",
      }
    },
    mainTitle:{
      fontSize:"1.5rem",
      textAlign:"center",
      [theme.breakpoints.up("md")]:{
        fontSize:"3.5rem",
        textAlign:"left",
	marginTop:"9.5rem",
      },
    },
    container:{
      [theme.breakpoints.up("md")]:{
        display:"flex",
	flexWrap:"wrap",
      },
    },
    mainTextConatiner:{
      [theme.breakpoints.down("sm")]:{
	width:"100%",
	margin:"0 auto"
      },
    },
    form:{
      padding: "1.5rem 0",
    },
    button:{
      background:"#3E58AC",
      margin:"0 auto",
      padding:".5rem 1.5rem",
      display:"block",
      color:"white",
    },
    content:{
      display:"flex",
      flexDirection:"column",
      justifyContent:"center",

    },
    formContainer:{
      [theme.breakpoints.down("sm")]:{
        margin:"0 auto",
      }
    }
  })
  const classesContact = useStyles()
  return(
  <Box mt="8rem">
    <Box mb="1.5rem" textAlign="center">
      <Typography variant="h3">Contactanos</Typography>
    </Box>
    <Box className={classesContact.container} width="100%">
      <Box className={classesContact.mainTextContainer} width={5/12} ml="auto" >
        <Typography className={classesContact.mainTitle} variant="h2">Háblanos sobre tu próximo projecto</Typography>
      </Box>
      <Box className={classesContact.formContainer} width={4/12} mt="5rem" ml="1rem" mr="auto" px="1.5rem">
        <Card className={classesContact.form}>
          <CardHeader className={classesContact.titleForm} title="Lorem ipsum no se que"/>
          <CardContent className={classesContact.content}>
            <Box maxWidth={300} mt="1rem" mx="auto">
    	      <TextField variant="outlined" fullWidth={true} placeholder="coloca tu correo"/>
    	    </Box>
            <Box maxWidth={300} mt="1rem" mx="auto">
    	      <TextField variant="outlined" fullWidth={true} placeholder="coloca tu mensaje" multiline={true}/>
    	    </Box>
    	    <Box mt="2.5rem" width="100%">
    	      <Button className={classesContact.button + " " + classes.button}>Enviar</Button>
    	    </Box>
          </CardContent>
        </Card>
      </Box>
    </Box>
  </Box>
  )
}

export default withStyles(styles)(Contact)
