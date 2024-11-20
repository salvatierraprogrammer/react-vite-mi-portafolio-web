import React from 'react';
import { Box, Typography, Grid, Card, CardContent, CardMedia, Stack, Button } from '@mui/material';

const entrepreneurships = [
  {
    name: 'Freelancer',
    description: 'Servicios de programacion web y móvil, venta de codigo',
    img: 'https://scontent.ffdo24-3.fna.fbcdn.net/v/t39.30808-6/466630893_1078644860520148_13597451172605879_n.jpg?stp=dst-jpg_s960x960&_nc_cat=106&ccb=1-7&_nc_sid=cc71e4&_nc_ohc=bO_GX35KnLMQ7kNvgEOHWI2&_nc_zt=23&_nc_ht=scontent.ffdo24-3.fna&_nc_gid=AEglU6mcfTehf4FWjvbUfEz&oh=00_AYD_utBdGHOh-W9AfR9sUUaAdM_zo4QtSviWQOnRnwXJaQ&oe=6743B6A3',
    link: 'https://github.com/SalvatierraDev',
  },
  {
    name: 'El Canal del Acompañante Terapéutico',
    description: 'Plataforma de apoyo para terapeutas y pacientes.',
    img: 'https://scontent.faep24-1.fna.fbcdn.net/v/t39.30808-6/355135907_299780372386688_3567768664697909382_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=6ee11a&_nc_ohc=-IRpyXDbdZUQ7kNvgHsfrIR&_nc_zt=23&_nc_ht=scontent.faep24-1.fna&_nc_gid=AQAXHZKnpm8Lw_YTrJQ5E2x&oh=00_AYC0zrMFotk2QPbJfmdgq4uC0A_N4_XjRKeb1lEUdR8MLg&oe=6743CEC2', // Placeholder
    link: 'https://www.facebook.com/ElCanalDelAT/',
  },
];

function Entrepreneurships() {
  return (
    <Box sx={{ my: 4 }}>
      <Typography
        variant="h4"
        gutterBottom
        align="center"
        sx={{ mb: 3, color: '#FFD700', marginTop: '5%' }}
      >
        Emprendimientos
      </Typography>
      <Grid container spacing={4}>
        {entrepreneurships.map((biz, index) => (
          <Grid item xs={12} sm={6} key={index}>
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
              {biz.img && (
                <CardMedia
                  component="img"
                  height="300"
                  image={biz.img}
                  alt={biz.name}
                  sx={{
                    objectFit: 'cover',
                    borderBottom: '1px solid #FFD700',
                  }}
                />
              )}
              <CardContent>
                <Typography variant="h6" gutterBottom>
                  {biz.name}
                </Typography>
                <Typography variant="body2" color="#B0B0B0" sx={{ mb: 2 }}>
                  {biz.description}
                </Typography>
                {biz.link && (
                  <Stack direction="row" justifyContent="center" sx={{ mt: 1 }}>
                    <Button
                      href={biz.link}
                      target="_blank"
                      variant="contained"
                      sx={{
                        bgcolor: '#FFD700',
                        color: '#1a1a1a',
                        '&:hover': { bgcolor: '#E6BE00' },
                      }}
                    >
                      Ver Más
                    </Button>
                  </Stack>
                )}
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}

export default Entrepreneurships;