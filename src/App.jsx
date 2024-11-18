import React from 'react';
import { Container } from '@mui/material';
import Header from './layout/Header';
import Footer from './layout/Footer';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Entrepreneurships from './components/Entrepreneurships';

function App() {
  return (
    <Container maxWidth="lg">
      <Header />
      
      <About />
      <Skills />
      <Projects />
      <Entrepreneurships />
      <Footer />
    </Container>
  );
}

export default App;