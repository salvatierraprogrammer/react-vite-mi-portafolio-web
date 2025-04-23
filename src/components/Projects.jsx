import React from 'react';
import { Box, Typography, Grid, Card, CardContent, CardMedia, Button, Stack } from '@mui/material';
import profesor from '../assets/profesor.png';
import peinado from '../assets/peinado.png';
import menu from '../assets/menu.png';
import ecommerce from '../assets/ecommerce.png';
import abordando from '../assets/abordando.png';

const projects = [
  {
    name: 'React + Vite + Material-UI - Front end - Ecommerce',
    img: ecommerce,
    description: 'Sitio web Ecommerce desarrollado con foco en el front-end. Incluye maquetado moderno para la venta de productos, adaptable a cualquier rubro comercial.',
    demo: 'https://salvatierradev-ecommerce.netlify.app/',
    code: '#',
    price: '$150.000 Arg',
  },
  {
    name: 'React + Vite + Material-UI - Firebase - Landing Page',
    img: abordando,
    description: 'Landing Page de presentación para una aplicación de Agenda dirigida a Acompañantes Terapéuticos. Permite descargar la app y conocer sus funcionalidades para gestionar clientes y pacientes.',
    demo: 'https://abordandosaludmental.netlify.app/',
    code: '#',
    price: '$150.000 Arg',
  },
  {
    name: 'React + Vite + Material-UI - Peinados a Domicilio (Web)',
    img: peinado,
    description: 'Plataforma moderna para reservar servicios de peinados a domicilio. Presenta un diseño atractivo, con sistema de turnos y catálogo de servicios personalizado.',
    demo: 'https://frontendestetica-peinados.netlify.app/',
    code: '#',
    price: '$150.000 Arg',
  },
  {
    name: 'React + Vite + Material-UI - Profesor de Matemáticas Online (Web)',
    img: profesor,
    description: 'Sitio web diseñado para que profesores particulares ofrezcan clases de matemáticas online. Incluye información sobre servicios, formulario de contacto y presentación profesional.',
    demo: 'https://profesoramatematicas.netlify.app/',
    code: '#',
    price: '$150.000 Arg',
  },
  {
    name: 'React + Vite + Material-UI - Menú Digital (Web)',
    img: menu,
    description: 'Aplicación para restaurantes que digitaliza el menú, permitiendo a los clientes explorar platos de forma interactiva y a los dueños gestionar los ítems fácilmente.',
    demo: 'https://pizzeria-frontend.netlify.app/',
    code: '#',
    price: '$150.000 Arg',
  },
  {
    name: 'React + TypeScript + Vite + Firebase - Cálculo de Compras',
    img: 'https://firebasestorage.googleapis.com/v0/b/donacionescomunidad-4ff32.appspot.com/o/misCompras.PNG?alt=media&token=d1961585-1bee-49bc-9579-ed6e0a3c91b6',
    description: 'Aplicación para calcular montos en compras de manera rápida y sencilla. Ideal para el día a día, con una interfaz clara y moderna.',
    demo: 'https://mis-compras-calculo.netlify.app/',
    code: 'https://github.com/SalvatierraDev/misCompras',
    price: '$150.000 Arg',
  },
  {
    name: 'React + TypeScript + Vite + Firebase - Comunidad CS 1.6',
    img: 'https://firebasestorage.googleapis.com/v0/b/donacionescomunidad-4ff32.appspot.com/o/comunidadCS16.PNG?alt=media&token=03c05275-d4c9-4b51-a5a8-b8c7ad1dc382',
    description: 'Portal web para jugadores de CS 1.6. Permite compartir contenido, novedades y recursos de la comunidad de forma organizada y accesible.',
    demo: 'https://baquitacomunidadcs.netlify.app/',
    code: '#',
    price: '$150.000 Arg',
  },
];


function Projects() {
  const whatsappNumber = "+5491131034391";

  // Función para enviar un mensaje de WhatsApp relacionado con el proyecto
  const comprarProyecto = (projectName, projectPrice) => {
    const mensaje = `👋 ¡Hola! Estoy interesado/a en ver el codigo del proyecto "${projectName}" ¿Podrías brindarme más información? Gracias 😊`;
    const mensajeCodificado = encodeURIComponent(mensaje);
    const urlWhatsApp = `https://api.whatsapp.com/send/?phone=${whatsappNumber}&text=${mensajeCodificado}`;
    window.open(urlWhatsApp, "_blank");
  };

  return (
    <Box sx={{ my: 4 }}>
      <Typography variant="h4" gutterBottom align="center" sx={{ mb: 3, color: '#FFD700', marginTop: '5%' }}>
        Mis proyectos
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
                    Ver code
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
