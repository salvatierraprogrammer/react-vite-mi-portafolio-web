import React from 'react';
import { Box, Typography, Button } from '@mui/material';

function About() {
  const whatsappNumber = "+5491131034391"; // Cambia esto por tu número de WhatsApp

  const enviarWhatsApp = () => {
    const mensaje = `👋 ¡Hola! Estoy interesado/a en tus servicios de programador. ¿Podrías brindarme más información? Gracias 😊`;
    const mensajeCodificado = encodeURIComponent(mensaje);
    const urlWhatsApp = `https://api.whatsapp.com/send/?phone=${whatsappNumber}&text=${mensajeCodificado}`;
    window.open(urlWhatsApp, "_blank");
  };

  return (
    <Box
      sx={{
        my: 4,
        textAlign: 'center',
        marginTop: { xs: '20%', sm: '15%', md: '10%' }, // Margen superior dinámico para diferentes tamaños
        bgcolor: '#1a1a1a', // Fondo oscuro
        padding: 4,
        borderRadius: 2,
        boxShadow: 3,
        color: '#FFD700', // Texto en dorado
      }}
    >
      <Typography
        variant="h4"
        gutterBottom
        sx={{
          fontWeight: 'bold',
          color: '#FFD700', // Título en dorado
        }}
      >
        ¡Hola! 👋 Soy Diego
      </Typography>
      <Typography
        sx={{
          fontSize: '1rem',
          lineHeight: 1.6,
          color: '#fff', // Texto principal en blanco
        }}
      >
        Soy un desarrollador FullStack apasionado, especializado en crear aplicaciones web y móviles personalizadas 
        para llevar tus ideas al próximo nivel. Mi objetivo es transformar tu visión en soluciones digitales innovadoras 
        y efectivas.
      </Typography>
      <Typography
        sx={{
          mt: 3,
          fontSize: '1rem',
          lineHeight: 1.6,
          color: '#fff',
        }}
      >
        Con experiencia en tecnologías modernas como <span style={{ color: '#FFD700' }}>React</span>, 
        <span style={{ color: '#FFD700' }}>Firebase</span>, y <span style={{ color: '#FFD700' }}>Node.js</span>, ofrezco servicios 
        de alta calidad que combinan funcionalidad, diseño y optimización. Además, estoy comprometido con los valores de 
        puntualidad y excelencia en cada proyecto que emprendo.
      </Typography>
      <Typography
        sx={{
          mt: 3,
          fontSize: '1.2rem',
          fontWeight: 'bold',
          color: '#FFD700',
        }}
      >
        🚀 Lleva tu creatividad a otro nivel con mis servicios.
      </Typography>
      <Button
        onClick={enviarWhatsApp}
        variant="contained"
        sx={{
          mt: 4,
          bgcolor: '#FFD700', // Botón principal en dorado
          color: '#1a1a1a', // Texto oscuro para contraste
          fontWeight: 'bold',
          transition: 'background-color 0.3s ease, transform 0.2s ease',
          '&:hover': {
            bgcolor: '#E6BE00', // Un dorado más oscuro al pasar el mouse
            transform: 'scale(1.05)', // Pequeño efecto de zoom al hacer hover
          },
        }}
      >
        Contáctame
      </Button>
      <Typography
        sx={{
          mt: 3,
          fontSize: '1.2rem',
          fontWeight: 'bold',
          color: '#FFD700',
        }}
      >
        ⚡ Curiosidades: <span style={{ color: '#FF4500' }}>🎮 🧑‍💻 🚴‍♂️ 🍿</span>
      </Typography>
    </Box>
  );
}

export default About;