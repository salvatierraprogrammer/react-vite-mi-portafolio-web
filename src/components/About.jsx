import React from 'react';
import { Box, Typography } from '@mui/material';

function About() {
  return (
    <Box
      sx={{
        my: 4,
        textAlign: 'center',
        marginTop: '17%',
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
        Hola 👋, Soy Diego
      </Typography>
      <Typography
        sx={{
          fontSize: '1rem',
          lineHeight: 1.6,
          color: '#fff', // Texto principal en blanco
        }}
      >
        Actualmente trabajo como Freelancer en desarrollo móvil y web FullStack. 
        Estudiante de Ingeniería en Informática en UNDAV y en búsqueda activa de oportunidades como 
        Programdor Backend Junior. Vivo en Buenos Aires, Argentina.
      </Typography>
      <Typography
        sx={{
          mt: 3,
          fontSize: '1.2rem',
          fontWeight: 'bold',
          color: '#FFD700',
        }}
      >
        ⚡ Datos Curiosos: <span style={{ color: '#FF4500' }}>🎮 🧑‍💻 🚴‍♂️ 🍿</span>
      </Typography>
    </Box>
  );
}

export default About;