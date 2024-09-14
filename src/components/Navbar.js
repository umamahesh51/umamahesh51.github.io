import React, { useState } from 'react';
import { AppBar, Toolbar, Typography, Button, IconButton, Drawer, List, ListItem, ListItemText } from '@mui/material';
import { Menu as MenuIcon } from '@mui/icons-material';
import { Link } from 'react-router-dom';
import { useMediaQuery } from '@mui/material';

const Navbar = () => {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const isMobile = useMediaQuery('(max-width:600px)');

  const handleDrawerToggle = () => {
    setDrawerOpen(!drawerOpen);
  };

  const drawer = (
    <List>
      <ListItem button component={Link} to="/" onClick={handleDrawerToggle}>
        <ListItemText primary="Home" />
      </ListItem>
      <ListItem button component={Link} to="/about" onClick={handleDrawerToggle}>
        <ListItemText primary="About" />
      </ListItem>
      <ListItem button component={Link} to="/projects" onClick={handleDrawerToggle}>
        <ListItemText primary="Projects" />
      </ListItem>
      <ListItem button component={Link} to="/skills" onClick={handleDrawerToggle}>
        <ListItemText primary="Skills" />
      </ListItem>
      <ListItem button component={Link} to="/contact" onClick={handleDrawerToggle}>
        <ListItemText primary="Contact" />
      </ListItem>
    </List>
  );

  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6" style={{ flexGrow: 1 }}>
          Umamaheswararao Tumma
        </Typography>
        {isMobile ? (
          <>
            <IconButton color="inherit" edge="start" onClick={handleDrawerToggle}>
              <MenuIcon />
            </IconButton>
            <Drawer anchor="left" open={drawerOpen} onClose={handleDrawerToggle}>
              {drawer}
            </Drawer>
          </>
        ) : (
          <>
            <Button color="inherit" component={Link} to="/">Home</Button>
            <Button color="inherit" component={Link} to="/about">About</Button>
            <Button color="inherit" component={Link} to="/projects">Projects</Button>
            <Button color="inherit" component={Link} to="/skills">Skills</Button>
            <Button color="inherit" component={Link} to="/contact">Contact</Button>
          </>
        )}
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
