import React, { useState } from 'react';
import { Fab, Modal, Typography, Box, IconButton, Button } from '@mui/material';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import CloseIcon from '@mui/icons-material/Close';

const ButtonWhatsapp = () => {
  const whatsappNumber = "+5491131034391";

  const reservarCita = () => {
    const mensaje = `👋 ¡Hola! Estoy interesado/a en mas de tus servicios. ¿Podrías brindarme más información? Gracias 😊`;
    const mensajeCodificado = encodeURIComponent(mensaje);
    const urlWhatsApp = `https://api.whatsapp.com/send/?phone=${whatsappNumber}&text=${mensajeCodificado}`;
    window.open(urlWhatsApp, "_blank");
  };

  // Estado para controlar el modal
  const [open, setOpen] = useState(true);
  const handleClose = () => setOpen(false);

  return (
    <>
      {/* Modal informativo */}
      <Modal
        open={open}
        onClose={handleClose}
        BackdropProps={{
          style: { backgroundColor: 'rgba(0, 0, 0, 0.7)' }, // Fondo translúcido
        }}
      >
        <Box
          sx={{
            position: 'fixed',
            bottom: '140px',
            right: '20px',
            width: { xs: '75%', sm: '320px' }, // Adaptable para móviles y pantallas grandes
            bgcolor: '#1a1a1a', // Fondo oscuro
            color: 'white',
            p: 4,
            borderRadius: 3,
            boxShadow: 24,
            textAlign: 'center',
            zIndex: 1001,
            border: '1px solid #FFD700', // Borde dorado
          }}
        >
          {/* Botón cerrar */}
          <IconButton
            onClick={handleClose}
            sx={{
              position: 'absolute',
              top: '10px',
              right: '10px',
              color: '#fff',
              backgroundColor: '#FF4500',
              '&:hover': { backgroundColor: '#FF6347' },
            }}
          >
            <CloseIcon />
          </IconButton>
          {/* Contenido del modal */}
          <Typography
            variant="h6"
            sx={{
              fontWeight: 'bold',
              color: '#FFD700',
              mb: 2,
            }}
          >
            💬 ¡Consulta por tu proyecto!
          </Typography>
          <Typography
            variant="body2"
            sx={{
              mb: 2,
              fontSize: { xs: '0.9rem', sm: '1rem' },
              lineHeight: 1.5,
              color: '#fff',
            }}
          >
            <strong>Horarios de atención:</strong> <br />
            Lunes a Viernes: 9:00 AM - 17:00 PM <br />
            Sábados: 9:00 AM - 12:00 PM
          </Typography>
          <Button
            onClick={reservarCita}
            variant="contained"
            sx={{
              mt: 2,
              px: 3,
              py: 1.5,
              bgcolor: '#25D366', // Verde WhatsApp
              color: '#fff',
              fontWeight: 'bold',
              textTransform: 'none',
              '&:hover': {
                bgcolor: '#128C7E',
              },
            }}
          >
            <WhatsAppIcon sx={{ mr: 1 }} /> Enviar Mensaje
          </Button>
        </Box>
      </Modal>

      {/* Botón flotante de WhatsApp */}
      <Fab
        color="success"
        onClick={reservarCita}
        sx={{
          position: 'fixed',
          bottom: '80px',
          right: '20px',
          backgroundColor: '#25D366', // Verde WhatsApp
          color: 'white',
          zIndex: 1000,
          '&:hover': {
            backgroundColor: '#128C7E',
          },
        }}
      >
        <WhatsAppIcon sx={{ fontSize: '2.5rem' }} />
      </Fab>
    </>
  );
};

export default ButtonWhatsapp;