import React from 'react';
import { Box, Typography, Grid } from '@mui/material';
import skills from '../data/Skills';

function Skills() {
  return (
    <Box sx={{ my: 4, mt: { xs: 4, md: '10%' } }}>
      <Typography
        variant="h4"
        gutterBottom
        align="center"
        sx={{
          color: '#FFD700',
          mb: 3,
        }}
      >
        Habilidades 🧑‍💻
      </Typography>
      <Grid
        container
        spacing={3} // Espaciado uniforme
        justifyContent="center"
      >
        {skills.map((skill, index) => (
          <Grid
            item
            key={index}
            xs={6} // 2 columnas en pantallas pequeñas
            sm={6} // Mantiene 2 columnas en pantallas medianas
            md={3} // 4 columnas en pantallas grandes
            lg={2} // Más columnas en pantallas extra grandes
          >
            <Box
              sx={{
                textAlign: 'center',
                bgcolor: '#1a1a1a',
                p: 2, // Espaciado interno
                borderRadius: '8px',
                boxShadow: 3,
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                height: 150,
                transition: 'transform 0.3s, background-color 0.3s',
                '&:hover': {
                  transform: 'scale(1.1)',
                  bgcolor: '#E6BE00',
                },
              }}
            >
              <Box sx={{ mb: 2 }}>
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
                  transition: 'color 0.3s',
                  '&:hover': { color: '#FF0000' },
                }}
              >
                {skill.name}
              </Typography>
            </Box>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}

export default Skills;