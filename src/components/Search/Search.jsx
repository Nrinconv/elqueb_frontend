import React, { useState } from "react";
import {
  Button,
  TextField,
  Grid,
  Container,
  Box,
  Typography,
} from "@mui/material";
import styles from "./Search.module.css";

import { Link } from "react-router-dom";

import backgroundImage from "../../assets/campo.png";

const SearchComponent = () => {
  const [search, setSearch] = useState();
  return (
    <Box
      className={styles.container}
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      <Grid container direction="column" spacing={2}>
        <Grid item xs={6} md={12}>
          <Grid
            sx={{
              marginTop: "1rem",
              marginRight: "2rem",
              marginBottom: "3rem",
              marginLeft: "4rem",
            }}
          >
            <Typography variant="h4" className={styles.title}>
              ¿Estás buscando potenciar tu negocio?
            </Typography>
            <Typography variant="body1" className={styles.text}>
              Conectamos oportunidades con emprendedores
            </Typography>
          </Grid>

          <Grid
            item
            xs={6}
            md={6}
            sx={{
              marginTop: "3rem",
              marginRight: "2rem",
              marginBottom: "1.5rem",
              marginLeft: "4rem",
            }}
          >
            <TextField
              className={styles.textField}
              label="¿Qué oportunidad estás buscando?"
              variant="filled"
              onChange={(e) => setSearch(e.target.value)}
            />
          </Grid>

          <Grid
            sx={{
              marginTop: "1rem",
              marginRight: "2.5rem",
              marginBottom: "3rem",
              marginLeft: "4rem",
            }}
          >
            <Button
              sx={{ borderRadius: "80px" }}
              className={styles.button}
              variant="contained"
            >
              <Link to={`/offers/${search}`} className="btn btn-primary">
                Buscar
              </Link>
            </Button>
          </Grid>
        </Grid>
      </Grid>
    </Box>
  );
};

export default SearchComponent;
