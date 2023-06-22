import {Container, Typography } from "@mui/material";
import React from "react";

const Footer=()=>{
    return(
        <Container>
        <div sx={{maxHeight:'md'}}>
            <Typography variant="h5" sx={{marginTop:'40px',marginBottom:'40px'}}>Este sitio está desarrollado con:</Typography>
        </div>
        </Container>
        
    )
}

export default Footer;