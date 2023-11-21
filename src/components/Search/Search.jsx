import React from 'react';
import { Button, TextField, Grid, Container, Box,Typography } from '@mui/material';
import styles from './Search.module.css';

import backgroundImage from '../../assets/campo.png';


const SearchComponent = () => {
  return (
    <Box
    className={styles.container}
    style={{ backgroundImage: `url(${backgroundImage})` }}
  >
    <Grid container direction="column" spacing={2}>
      <Grid item xs={6} md={12}>
        <Grid sx={{ margin: '2rem' }}>
      <Typography variant="h4" className={styles.title}>
        ¿Estás buscando potenciar tu negocio?
      </Typography>
    <Typography variant="body1" className={styles.text}> 
      Conectamos oportunidades con emprendedores
    </Typography>

        </Grid>

    <Grid item xs={6} md={6}
    sx={{ margin: '2rem' }}>
      <TextField
    className={styles.textField}
    label="¿Qué oportunidad estás buscando?"
    variant="outlined"
    />
    </Grid>

    <Grid sx={{ margin: '2rem' }}>
      <Button
      className={styles.button}
      variant="contained">
      Buscar
    </Button >
        </Grid>
      </Grid>
      
    </Grid>
  </Box>
  );
};

export default SearchComponent;