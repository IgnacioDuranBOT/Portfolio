import React from "react";
import { Container, Typography } from "@mui/material";

const Contact = ({title, id})=>{
    return(
        <Container>
        <div id={id}>
            <Typography  sx={{marginTop:'50px'}} variant="h3">{title}</Typography>
            <Typography variant="h6">Email</Typography>
            <Typography variant="h6">LinkedIn</Typography>
        </div>
        </Container>
    )
    
}

export default Contact