import { Typography } from "@mui/material";
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import Container from '@mui/material/Container';
import React from "react";



const IgnacioDuran = ({title, id})=>{

    const toLinkedIn = ()=>{
    window.open('https://www.linkedin.com/in/ignacio-durán-774bb422b/')
    }
    const toGitHub = () =>{
        window.open('https://github.com/IgnacioDuranBOT')
    }

    return(
        <Container sx={{maxHeight:'md'}}>
        <div id="IgnacioDuran">
            <div>
                <Typography sx={{marginTop:'40px',marginBottom:'10px'}} variant="h3">{title}</Typography>
                <Typography variant="p">Bienvenidos y bienvenidas a mi portfolio como desarrollador web</Typography>
            </div>
            <div>
                <Button 
                    href="./CV_-_Duran(2).pdf" 
                    download
                    variant="contained"
                    size="small"
                    duration={500}
                    offset={-70}
                    sx={{background:'#263238', marginTop:'40px', marginBottom:'20px'}}       
                > Descarga mi cv </Button>
            </div>
            <div>
                <IconButton onClick={toLinkedIn} sx={{marginTop:'20px', marginBottom:'20px'}}>
                    <LinkedInIcon  sx={{fontSize:50}} />
                </IconButton>
                <IconButton onClick={toGitHub}  sx={{marginTop:'20px', marginBottom:'20px'}}>
                    <GitHubIcon  sx={{fontSize:50}}/>
                </IconButton>
            </div>           
            
        </div>
        </Container>
    )
}

export default IgnacioDuran;