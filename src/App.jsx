import React from 'react';
import Navbar from './components/Navbar';
import About from './components/About';
import Skills from './components/Skills';
import MyWork from './components/MyWork';
import Contact from './components/Contact';
import Container from '@mui/material/Container';
import Divider from '@mui/material/Divider';
import IgnacioDuran from './components/IgnacioDuran';
import Footer from './components/Footer';

const navArrayLinks = [
  {
      title: "Ignacio", path: "#IgnacioDuran"
  },
  {
      title: "Sobre mí", path: "#About"
  },
  {
      title: "Habilidades", path: "#Skills"
  },
  {
      title: "Mi trabajo", path: "#MyWork"
  },
  {
      title: "Contacto", path: "#Contact"
  }
];


function App() {

  return (
    <>
      
        <Navbar navArrayLinks={navArrayLinks}/>
        <Container  sx={{mt:20, width:"1000px"}}>
          <IgnacioDuran title="Ignacio Durán Vasquez" id="IgnacioDuran"/>
          <Divider/>
          <About  title="Sobre mí" id="About"/>
          <Divider/>
          <Skills title="Habilidades" id="Skills"/>
          <Divider/>
          <MyWork title="Mi trabajo" id="MyWork"/>
          <Divider/>
          <Contact title="Contacto" id="Contact"/>
          <Footer id="Footer"/>
        </Container>        
    </>
  );
}

export default App;
