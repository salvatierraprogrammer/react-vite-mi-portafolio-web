import React from 'react'; 
import { Box, Typography, Grid } from '@mui/material';

const skills = [
  { name: 'HTML5', icon: 'https://img.icons8.com/color/48/000000/html-5--v1.png' },
  { name: 'CSS3', icon: 'https://img.icons8.com/color/48/000000/css3.png' },
  { name: 'JavaScript', icon: 'https://img.icons8.com/color/48/000000/javascript--v1.png' },
  { name: 'React', icon: 'https://img.icons8.com/office/48/000000/react.png' },
  { name: 'Firebase', icon: 'https://img.icons8.com/color/48/000000/firebase.png' },
  { name: 'MySQL', icon: 'https://img.icons8.com/color/48/000000/mysql-logo.png' },
  { name: 'Python', icon: 'https://img.icons8.com/color/48/000000/python.png' },
  { name: 'Java', icon: 'https://img.icons8.com/color/48/000000/java-coffee-cup-logo--v1.png' },
  { name: 'PHP', icon: 'https://img.icons8.com/color/48/000000/php.png' },
];

function Skills() {
  return (
    <Box sx={{ my: 4, marginTop: '10%' }}>
      <Typography 
        variant="h4" 
        gutterBottom 
        align="center" 
        sx={{ color: '#FFD700', marginBottom: '3%' }}
      >
        Habilidades 🧑‍💻
      </Typography>
      <Grid 
        container 
        spacing={5} // Más espacio entre columnas y filas 
        justifyContent="center" 
        sx={{ marginTop: '3%' }}
      >
        {skills.map((skill, index) => (
          <Grid 
            item 
            key={index} 
            xs={6} 
            sm={4} 
            md={2} 
            sx={{
              textAlign: 'center',
              bgcolor: '#1a1a1a',
              padding: 2, // Espaciado interno
              margin: 1, // Espaciado externo
              borderRadius: '8px',
              boxShadow: 3,
              display: 'flex',
              flexDirection: 'column', // Asegura que icono y texto estén en columna
              alignItems: 'center', // Centra horizontalmente
              justifyContent: 'center', // Centra verticalmente
              height: '150px', // Ajustar altura uniforme
              transition: 'transform 0.2s',
              '&:hover': {
                transform: 'scale(1.1)',
                bgcolor: '#E6BE00',
              },
            }}
          >
            <Box sx={{ mb: 2 }}> {/* Contenedor para espaciar ícono */}
              <img 
                src={skill.icon} 
                alt={skill.name} 
                width={48} 
                style={{ display: 'block' }} 
              />
            </Box>
            <Typography 
              sx={{
                color: '#FFD700',
                fontWeight: 'bold',
                transition: 'color 0.2s',
                '&:hover': { color: '#FF0000' },
              }}
            >
              {skill.name}
            </Typography>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}

export default Skills;