import React from 'react';
import { Box, Typography, Grid, Card, CardContent, CardMedia, Button, Stack } from '@mui/material';
import apkabordando from '../assets/apkabordando.png';
import libro from '../assets/libro.PNG';
const projects = [
  {
    name: 'React Native Expo + Firebase - Agendar Pacientes',
    img: apkabordando,
    description: 'Aplicación móvil diseñada para Acompañantes Terapéuticos. Permite gestionar pacientes, registrar informes, organizar horarios y visualizar indicaciones terapéuticas de forma eficiente.',
    apk: 'https://drive.google.com/file/d/1Wf0xE4dW5G1gzevMgaCDFaHqnSE-YSkp/view',
    pdf: 'https://drive.google.com/file/d/1Wf0xE4dW5G1gzevMgaCDFaHqnSE-YSkp/view',
  },
  {
    name: 'React Native Expo + Firebase - Libro de Programación en PDF',
    img: libro,
    description: 'Aplicación simple que facilita la descarga de un libro de programación en formato PDF. Ideal para estudiantes o entusiastas del desarrollo.',
    apk: 'https://drive.google.com/file/d/1DPMYgnKzdDO0gnrrVHgHpUcKmF90cYRA/view?usp=sharing',
    pdf: '#',
  },
  {
    name: 'React Native Expo + Firebase - Agenda de Notas',
    img: 'https://firebasestorage.googleapis.com/v0/b/react-firebase-e0cf3.appspot.com/o/Captura%20de%20pantalla%202024-10-02%20202110.png?alt=media&token=f3b026e0-3709-471d-8dc5-1be9085455d1',
    description: 'App móvil intuitiva para crear, editar y organizar notas. Pensada para ayudarte a mantener tus ideas y tareas organizadas en todo momento.',
    apk: 'https://drive.google.com/file/d/1wHhdyxg7hveNjwPy9qwIMTEFSM5FPNu-/view?usp=sharing',
    pdf: 'https://drive.google.com/file/d/1miIAP4qkDpUQeLL99A9Eh5mxv8G7Dvej/view?usp=sharing',
  },
  {
    name: 'React Native Expo + Firebase - Cálculo de Compras',
    img: 'https://firebasestorage.googleapis.com/v0/b/react-firebase-e0cf3.appspot.com/o/Google%20Pixel%204%20XL%20Presentation.png?alt=media&token=8eb903bb-f9df-4fc9-b71d-1a033855931b',
    description: 'Aplicación útil para realizar cálculos en compras diarias, ya sea de manera individual o en grupo. Su diseño simple la hace ideal para cualquier usuario.',
    apk: 'https://drive.google.com/file/d/1sSEXt5JWVBSrkVzcKSn5v8nVO6C6xi66/view?usp=sharing',
    pdf: 'https://drive.google.com/file/d/1nbBHqSKm4PHVg8UxABweilFKFIUSGvZv/view?usp=sharing',
  },
];


function Projects() {
  return (      
    <Box sx={{ my: 4 }}>
      <Typography variant="h4" gutterBottom align="center" sx={{ mb: 3, color: '#FFD700', marginTop:'5%' }}>
        Proyectos
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
                <Stack direction="row" spacing={1} flexWrap="wrap" sx={{ mt: 1 }}>
                  {project.apk && (
                    <Button
                      href={project.apk}
                      target="_blank"
                      variant="contained"
                      sx={{
                        bgcolor: '#FFD700',
                        color: '#1a1a1a',
                        '&:hover': { bgcolor: '#E6BE00' },
                      }}
                    >
                      Descargar APK
                    </Button>
                  )}
                  {project.pdf && (
                    <Button
                      href={project.pdf}
                      target="_blank"
                      variant="outlined"
                      sx={{
                        borderColor: '#FFD700',
                        color: '#FFD700',
                        '&:hover': { bgcolor: '#E6BE00', color: '#1a1a1a' },
                      }}
                    >
                      Ver PDF
                    </Button>
                  )}
                  {project.demo && (
                    <Button
                      href={project.demo}
                      target="_blank"
                      variant="contained"
                      sx={{
                        bgcolor: '#FFD700',
                        color: '#1a1a1a',
                        '&:hover': { bgcolor: '#E6BE00' },
                      }}
                    >
                      Ver Demo
                    </Button>
                  )}
                  {project.code && (
                    <Button
                      href={project.code}
                      target="_blank"
                      variant="outlined"
                      sx={{
                        borderColor: '#FFD700',
                        color: '#FFD700',
                        '&:hover': { bgcolor: '#E6BE00', color: '#1a1a1a' },
                      }}
                    >
                      Ver Código
                    </Button>
                  )}
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