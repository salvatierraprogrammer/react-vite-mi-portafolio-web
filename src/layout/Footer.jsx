import React from 'react';
import { Box, Typography, Link } from '@mui/material';

function Footer() {
  return (
    <Box
      sx={{
        textAlign: 'center',
        mt: 4,
        py: 3, // Más padding vertical
        bgcolor: '#242424', // Fondo oscuro
        color: '#fff', // Texto blanco
        borderTop: '1px solid #444', // Línea superior sutil
      }}
    >
      <Typography variant="body2" sx={{ mb: 1 }}>
        © 2024 Diego Salvatierra. Todos los derechos reservados.
      </Typography>
      <Typography variant="body2" sx={{ color: '#FFD700' }}>
        Hecho con ❤️ y <Link href="https://reactjs.org/" target="_blank" underline="hover" sx={{ color: '#61dafb' }}>React</Link>.
      </Typography>
    </Box>
  );
}

export default Footer;