import React from 'react';
import { Container } from '@mui/material';
import Header from './layout/Header';
import Footer from './layout/Footer';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Projects2 from './components/Projects2';
import Entrepreneurships from './components/Entrepreneurships';
import ButtonWhatsapp from './components/ButtonWhatsapp';
import ButtonRedes from './components/ButtonRedes';

function App() {
  return (
    <Container maxWidth="lg">
      <Header />
      <ButtonWhatsapp />
      <ButtonRedes />
      <About />
      {/* Sección de Proyecto */}
      <div id="proyecto">
        <Projects />
        <Projects2 />
      </div>
      <Skills />
      
      {/* Sección de Emprendimiento */}
      <div id="emprendimiento">
        <Entrepreneurships />
      </div>
      <Footer />
    </Container>
  );
}

export default App;