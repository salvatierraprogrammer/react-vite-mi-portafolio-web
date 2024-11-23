import React from 'react';
import { Fab } from '@mui/material';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';

function ButtonRedes() {
  // URLs de redes sociales
  const facebookUrl = "https://www.facebook.com/profile.php?id=61568722053728"; // Enlace de Facebook
  const instagramUrl = "https://www.instagram.com/salvatierrra.dev/"; // Enlace de Instagram

  return (
    <div>
      {/* Botón flotante Facebook */}
      <Fab
        color="primary"
        href={facebookUrl}
        target="_blank"
        sx={{
          position: 'fixed',
          bottom: '150px',
          right: '20px',
          backgroundColor: '#1877F2',
          color: 'white',
          zIndex: 999,
          '&:hover': {
            backgroundColor: '#1565C0',
          },
        }}
      >
        <FacebookIcon sx={{ fontSize: '2.5rem' }} />
      </Fab>

      {/* Botón flotante Instagram */}
      <Fab
        color="secondary"
        href={instagramUrl}
        target="_blank"
        sx={{
          position: 'fixed',
          bottom: '220px',
          right: '20px',
          backgroundColor: '#E4405F',
          color: 'white',
          zIndex: 998,
          '&:hover': {
            backgroundColor: '#C13584',
          },
        }}
      >
        <InstagramIcon sx={{ fontSize: '2.5rem' }} />
      </Fab>
    </div>
  );
}

export default ButtonRedes;