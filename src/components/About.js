import { Container, Typography } from "@mui/material";
import React from "react";

const About = ({title, id})=>{
    return(
        <Container>
        <div id={id}>

            <Typography variant="h3" style={{marginTop:'50px',marginBottom:'15px'}}>{title}</Typography>
            <Typography variant="p" >Ingeniero egresado en noviembre de 2022 de la carrera de Ingeniería de Ejecución en informática en la Pontificia Universidad
                Católica de Valparaíso, que se especializa en el desarrollo de aplicaciones web.  
            </Typography>
            <Typography variant="h6" style={{marginTop:'15px', marginBottom:'50px'}}>
                Actualmente estudio de manera independiente, buscando ampliar mi campo laboral en el mundo del desarrollo web. 
            </Typography>
        </div>
        </Container>
    )
    
}

export default About