import React from 'react';
import { Box, Typography, Grid, Card, CardContent, CardMedia, Stack, Button } from '@mui/material';
import { FaPaypal } from 'react-icons/fa'; // Ícono de PayPal
import { SiMercadopago } from 'react-icons/si'; // Ícono de Mercado Pago

const entrepreneurships = [
  {
    name: '💻 Servicios Freelance 🚀',
    description:'Desarrollo de aplicaciones web y móviles a medida, integración de soluciones personalizadas y venta de código optimizado. Lleva tus ideas al siguiente nivel con calidad garantizada. 🚀💻',
    img: 'https://www.muycomputerpro.com/wp-content/uploads/2019/01/programaci%C3%B3n-portada.jpg',
     // Puedes mantenerlo o quitarlo si no es necesario
  },
  {
    name: '🧾🌍 Método de pago 💵💳',
    description:'😊🇦🇷 : Mercado Pago 💵, Transferencia bancaria 💳, Factura "C" 🧾. Para clientes internacionales: PayPal 🌍.',
    img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTVO8N2KjgbExHf_v-Mt5wIg-vs7gFlo1ALHg&s',
    // Puedes eliminar esto si no lo necesitas
  },
];

function Entrepreneurships() {
  const whatsappNumber = "+5491131034391"; // Número de WhatsApp

  // Función que abre el enlace de WhatsApp con el mensaje predefinido
  const reservarCita = () => {
    const mensaje = `👋 ¡Hola! Estoy interesado/a en más de tus servicios. ¿Podrías brindarme más información? Gracias 😊`;
    const mensajeCodificado = encodeURIComponent(mensaje); // Codificamos el mensaje para la URL
    const urlWhatsApp = `https://api.whatsapp.com/send/?phone=${whatsappNumber}&text=${mensajeCodificado}`;
    window.open(urlWhatsApp, "_blank"); // Abrimos el enlace de WhatsApp en una nueva ventana
  };

  return (
    <Box sx={{ my: 4 }}>
      <Typography
        variant="h4"
        gutterBottom
        align="center"
        sx={{
          mb: 3,
          color: '#FFD700',
          marginTop: '5%',
          textShadow: '2px 2px 4px rgba(0, 0, 0, 0.8)',
        }}
      >
        ¡Explora Mis Servicios!
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
                boxShadow: 4,
                bgcolor: '#1a1a1a',
                color: '#FFD700',
                border: '1px solid #FFD700',
                transition: 'transform 0.3s, box-shadow 0.3s',
                '&:hover': {
                  transform: 'scale(1.05)',
                  boxShadow: '6px 6px 15px rgba(255, 215, 0, 0.6)',
                },
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
                    borderBottom: '2px solid #FFD700',
                  }}
                />
              )}
              <CardContent>
                <Typography
                  variant="h5"
                  gutterBottom
                  sx={{
                    fontWeight: 'bold',
                    textAlign: 'center',
                  }}
                >
                  {biz.name}
                </Typography>
                <Typography
                  variant="body2"
                  color="#B0B0B0"
                  sx={{
                    textAlign: 'justify',
                    mb: 2,
                    fontSize: '1rem',
                    lineHeight: 1.6,
                  }}
                >
                  {biz.description}
                </Typography>

                {/* Reemplazamos el botón de "Ver Más" por el botón que llama a la función reservarCita */}
                <Stack direction="row" justifyContent="center" sx={{ mt: 2 }}>
                  <Button
                    variant="contained"
                    sx={{
                      bgcolor: '#FFD700',
                      color: '#1a1a1a',
                      fontWeight: 'bold',
                      '&:hover': { bgcolor: '#E6BE00' },
                    }}
                    onClick={reservarCita} // Llamamos a la función de WhatsApp
                  >
                   Consultar
                  </Button>
                </Stack>

                {/* Métodos de pago con íconos */}
                {biz.name === '🧾🌍 Método de pago 💵💳' && (
                  <Stack direction="row" spacing={2} justifyContent="center" sx={{ mt: 2 }}>
                    <Button
                      variant="outlined"
                      sx={{
                        color: '#FFD700',
                        borderColor: '#FFD700',
                        '&:hover': { bgcolor: '#E6BE00' },
                      }}
                      onClick={() => window.open('https://www.mercadopago.com.ar/', '_blank')}
                      startIcon={<SiMercadopago />}
                    ></Button>
                    <Button
                      variant="outlined"
                      sx={{
                        color: '#FFD700',
                        borderColor: '#FFD700',
                        '&:hover': { bgcolor: '#E6BE00' },
                      }}
                      onClick={() => window.open('https://www.paypal.com/', '_blank')}
                      startIcon={<FaPaypal />}
                    ></Button>
                    <Button
                      variant="outlined"
                      sx={{
                        color: '#FFD700',
                        borderColor: '#FFD700',
                        '&:hover': { bgcolor: '#E6BE00' },
                      }}
                      onClick={() => alert('Detalles para transferencia bancaria serán enviados por correo.')}
                    >
                      Transferencia Bancaria
                    </Button>
                    <Button
                      variant="outlined"
                      sx={{
                        color: '#FFD700',
                        borderColor: '#FFD700',
                        '&:hover': { bgcolor: '#E6BE00' },
                      }}
                      onClick={() => alert('Emitiré factura "C" según lo solicitado para AFIP.')}
                    >
                      Factura "C"
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