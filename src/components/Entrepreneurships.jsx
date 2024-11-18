import React from 'react';
import { Box, Typography, Grid, Card, CardContent, CardMedia, Stack, Button } from '@mui/material';

const entrepreneurships = [
  {
    name: 'Freelancer',
    description: 'Servicios de desarrollo web y móvil.',
    img: 'https://scontent.ffdo24-3.fna.fbcdn.net/v/t39.30808-6/466630893_1078644860520148_13597451172605879_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=cc71e4&_nc_eui2=AeERAN49B0X_um5HIy7uahaA6KJxiuPfmsfoonGK49-ax-vlUprZwVoUp-ker_D9c-3ZsNZwJIESf0Qi7vGDehIi&_nc_ohc=uUUzuW99ED0Q7kNvgGkOK2S&_nc_zt=23&_nc_ht=scontent.ffdo24-3.fna&_nc_gid=AxzEEMaHeHi-EaBXbzdfDp6&oh=00_AYAnXIZ40WJj8H7Lq67me9kxAxh0IP83vCgzo2G2NaJVCQ&oe=673D1F23',
    link: 'https://github.com/SalvatierraDev',
  },
  {
    name: 'El Canal del Acompañante Terapéutico',
    description: 'Plataforma de apoyo para terapeutas y pacientes.',
    img: 'https://via.placeholder.com/600x400?text=El+Canal+del+Acompañante+Terapéutico', // Placeholder
    link: 'https://terapeutas.com',
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