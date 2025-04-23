import React, { useState } from 'react';
import { AppBar, Toolbar, Typography, Avatar, Box, IconButton, Drawer, List, ListItem, ListItemText, Divider } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import perfile from '../assets/perfile.jpeg'; // Asegúrate de que la ruta sea correcta

function Header() {
  const [drawerOpen, setDrawerOpen] = useState(false);

  // Función para abrir y cerrar el Drawer
  const toggleDrawer = (open) => (event) => {
    // Evita cerrar con Tab o Shift
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }
    setDrawerOpen(open);
  };

  const menuItems = [
    { text: 'Inicio', link: '#' },
    { text: 'Mis proyectos', link: '#proyecto' },
    { text: 'Servicios', link: '#emprendimiento' },
  ];

  return (
    <>
      <AppBar sx={{ bgcolor: '#242424', color: '#FFD700' }}>
        <Toolbar sx={{ display: 'flex', justifyContent: 'space-between' }}>
          {/* Avatar e información */}
          <Box sx={{ display: 'flex', alignItems: 'center' }}>
            <Avatar
              alt="Salvatierra Dev"
              src={perfile}
              sx={{ width: 48, height: 48, marginRight: 2 }}
            />
            <Box>
              <Typography variant="h6" sx={{ fontWeight: 'bold' }}>
                Salvatierra Dev
              </Typography>
              <Typography variant="subtitle2" sx={{ color: '#B0B0B0' }}>
                Programador Web & Móvil
              </Typography>
            </Box>
          </Box>

          {/* Icono para abrir el menú */}
          <IconButton
            sx={{ color: '#FFD700' }}
            edge="end"
            aria-label="menu"
            onClick={toggleDrawer(true)}
          >
            <MenuIcon />
          </IconButton>
        </Toolbar>
      </AppBar>

      {/* Drawer para menú hamburguesa */}
      <Drawer
        anchor="right"
        open={drawerOpen}
        onClose={toggleDrawer(false)}
      >
        <Box
          sx={{
            width: 250,
            bgcolor: '#242424',
            height: '100%',
            color: '#FFD700',
          }}
          role="presentation"
          onClick={toggleDrawer(false)}
          onKeyDown={toggleDrawer(false)}
        >
          <Typography variant="h6" sx={{ m: 2, fontWeight: 'bold' }}>
            Menú
          </Typography>
          <Divider sx={{ bgcolor: '#FFD700' }} />
          <List>
            {menuItems.map((item, index) => (
              <ListItem button key={index} component="a" href={item.link}>
                <ListItemText primary={item.text} sx={{ textAlign: 'center' }} />
              </ListItem>
            ))}
          </List>
        </Box>
      </Drawer>
    </>
  );
}

export default Header;