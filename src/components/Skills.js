import React from "react";
import { ImageList, Typography, ImageListItem, Container } from "@mui/material";
import JavascriptLogo from "../assets/img/javascriptLogo.png";
import typescriptLogo from "../assets/img/typescriptLogo.png";
import htmlLogo from "../assets/img/htmlLogo.ico";
import cssLogo from "../assets/img/cssLogo.png";
import JavaLogo from "../assets/img/JavaLogo.png";
import CLogo from "../assets/img/CLogo1.png";
import angularLogo from "../assets/img/angularLogo.png";
import reactIcon from "../assets/img/reactIcon.png";
import nestLogo from "../assets/img/nestLogo.png";
import mongodbLogo from "../assets/img/mongodbLogo.png";
import postgresqlLogo from "../assets/img/posgresqlLogo.png";

const Skills = ({title, id})=>{
    return(
        <Container>
        <div id={id}>
            <Typography sx={{marginTop:'50px'}} variant="h3">{title}</Typography>
            <Typography sx={{marginTop:'15px'}} variant="h5">Lenguajes de programación</Typography>

            <ImageList sx={{margin:"5px", display:'flex'}} cols={6}>
                {languageData.map((item)=>(
                <ImageListItem sx={{width:30,margin:"5px", marginRight:"80px"}} key={item.title}>
                    <img
                        
                        src={`${item.img}?w=164&h=164&fit=crop&auto=format`}
                        srcSet={`${item.img}`}
                        alt={item.title}
                        loading="lazy"
                        style={{flexGrow:0}}
                    />
                    <Typography>{item.title}</Typography>
                </ImageListItem>
                    
                ))}
            </ImageList>

            <Typography sx={{marginTop:'15px'}} variant="h5">Frameworks</Typography>

            <ImageList sx={{ margin:"5px", display:'flex'}} cols={3}> 
                {frameworkData.map((item)=>(
                <ImageListItem sx={{width:30, margin:"5px", marginRight:"80px"}} key={item.title} >
                    <img
                        
                        src={`${item.img}?w=164&h=164&fit=crop&auto=format`}
                        srcSet={`${item.img}`}
                        alt={item.title}
                        loading="lazy"
                        style={{flexGrow:0}}
                    />
                    <Typography textAlign="center">{item.title}</Typography>
                </ImageListItem>

                ))}
            </ImageList>

            <Typography sx={{marginTop:'15px'}} variant="h5">Base de datos</Typography>

            <ImageList sx={{margin:"5px", display:'flex'}} cols={2}> 
                {databaseData.map((item)=>(
                <ImageListItem sx={{width:30, margin:"5px", marginRight:"80px"}} key={item.title}>
                    <img
                        
                        src={`${item.img}?w=164&h=164&fit=crop&auto=format`}
                        srcSet={`${item.img}`}
                        alt={item.title}
                        loading="lazy"
                        style={{flexGrow:0}}
                    />
                    <Typography>{item.title}</Typography>
                </ImageListItem>

                ))}
            </ImageList>
        </div>
        </Container>
    )
    
}

const languageData =[
    {
        img:JavascriptLogo,
        title: 'JavaScript'
    },
    {
        img:typescriptLogo,
        title: 'TypeScript'
    },
    {
        img:htmlLogo,
        title: 'HTML'
    },
    {
        img:cssLogo,
        title: 'CSS'
    },
    {
        img:JavaLogo,
        title: 'Java'
    },
    {
        img:CLogo,
        title: 'C'
    }
]

const frameworkData = [
    {
        img:angularLogo,
        title:'Angular'
    },
    {
        img: reactIcon,
        title:'React'
    },
    {
        img: nestLogo,
        title: 'Nest'
    }
]

const databaseData = [
    {
        img:mongodbLogo,
        title:'MongoDB'
    },
    {
        img:postgresqlLogo,
        title:'postgreSQL'
    }
]

export default Skills