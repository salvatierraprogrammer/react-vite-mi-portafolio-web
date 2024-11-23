import React from 'react';
import { Box, Typography, Grid, Card, CardContent, CardMedia, Button, Stack } from '@mui/material';
import profesor from '../assets/profesor.png';
import peinado from '../assets/peinado.png';
import menu from '../assets/menu.png';

const projects = [
  {
    name: 'React + Vite + Material-UI - Peinados a Domicilio (Web)',
    img: peinado,
    description: 'Plataforma web para contratar servicios de peinados a domicilio. Incluye un diseño atractivo y un sistema de reservas eficiente para clientes.',
    demo: 'https://peinadosfrontend.netlify.app/',
    code: '#',
    price: '$150.000 Arg',
  },
  {
    name: 'React + Vite + Material-UI - Profesor de Matemáticas Online (Web)',
    img: profesor,
    description: 'Sitio web diseñado para conectar profesores de matemáticas con estudiantes de manera remota. Incluye un sistema de contacto y detalles sobre los servicios ofrecidos.',
    demo: 'https://profesoramatematicas.netlify.app/',
    code: '#',
    price: '$150.000 Arg',
  },
  {
    name: 'React + Vite + Material-UI - Menú Digital (Web)',
    img: menu,
    description: 'Aplicación web para restaurantes que permite gestionar un menú digital interactivo. Ideal para mejorar la experiencia del cliente y optimizar el manejo de pedidos.',
    demo: 'https://pizzeria-frontend.netlify.app/',
    code: '#',
    price: '$150.000 Arg',
  },
];

function Projects() {
  const whatsappNumber = "+5491131034391";

  // Función para enviar un mensaje de WhatsApp relacionado con el proyecto
  const comprarProyecto = (projectName, projectPrice) => {
    const mensaje = `👋 ¡Hola! Estoy interesado/a en comprar el proyecto "${projectName}" por ${projectPrice}. ¿Podrías brindarme más información? Gracias 😊`;
    const mensajeCodificado = encodeURIComponent(mensaje);
    const urlWhatsApp = `https://api.whatsapp.com/send/?phone=${whatsappNumber}&text=${mensajeCodificado}`;
    window.open(urlWhatsApp, "_blank");
  };

  return (
    <Box sx={{ my: 4 }}>
      <Typography variant="h4" gutterBottom align="center" sx={{ mb: 3, color: '#FFD700', marginTop: '5%' }}>
        Codigo en Venta
      </Typography>
      <Grid container spacing={4}>
        {projects.map((project, index) => (
          <Grid item key={index} xs={12} sm={6} md={4}>
            <Card
              sx={{
                height: '100%',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                boxShadow: 3,
                bgcolor: '#1a1a1a',
                color: '#FFD700',
                border: '1px solid #FFD700',
              }}
            >
              <CardMedia
                component="img"
                image={project.img}
                alt={project.name}
                sx={{ height: 180, objectFit: 'cover', borderBottom: '1px solid #FFD700' }}
              />
              <CardContent sx={{ flexGrow: 1 }}>
                <Typography variant="h6" component="div" gutterBottom>
                  {project.name}
                </Typography>
                <Typography variant="body2" color="#B0B0B0" sx={{ mb: 2 }}>
                  {project.description}
                </Typography>
                <Typography variant="subtitle1" sx={{ mb: 2, color: '#FFD700', fontWeight: 'bold' }}>
                  Precio: {project.price}
                </Typography>
                <Stack
                  direction="row"
                  spacing={1}
                  justifyContent="center"
                  alignItems="center"
                  sx={{ mt: 1, flexWrap: 'wrap' }}
                >
                  {project.demo && (
                    <Button
                      href={project.demo}
                      target="_blank"
                      variant="outlined"
                      sx={{
                        borderColor: '#FFD700',
                        color: '#FFD700',
                        '&:hover': { bgcolor: '#E6BE00', color: '#1a1a1a' },
                      }}
                    >
                      Ver Demo
                    </Button>
                  )}
                  <Button
                    onClick={() => comprarProyecto(project.name, project.price)}
                    variant="contained"
                    sx={{
                      bgcolor: '#E63946', // Rojo vibrante que contrasta con el fondo oscuro
                      color: '#fff',
                      '&:hover': { bgcolor: '#D62839' }, // Rojo oscuro al pasar el cursor
                    }}
                  >
                    Comprar Ahora
                  </Button>
                </Stack>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}

export default Projects;