import React from 'react';
import { Typography, Box } from '@mui/material';

const Footer = () => {
  return (
    <Box
      component="footer"
      sx={{
        py: 2,
        px: 2,
        mt: 'auto',  // Pushes the footer to the bottom
        backgroundColor: '#f8f8f8',
        textAlign: 'center',
      }}
    >
      <Typography variant="body1">
        © {new Date().getFullYear()} Umamaheswararao Tumma
      </Typography>
    </Box>
  );
};

export default Footer;
