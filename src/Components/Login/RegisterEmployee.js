import {
  Button,
  Container,
  FormControl,
  Grid,
  InputLabel,
  MenuItem,
  OutlinedInput,
  Select,
} from "@material-ui/core";
import React from "react";
import { useTheme } from "@mui/material/styles";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

const names = [
  "Oliver Hansen",
  "Van Henry",
  "April Tucker",
  "Ralph Hubbard",
  "Omar Alexander",
  "Carlos Abbott",
  "Miriam Wagner",
  "Bradley Wilkerson",
  "Virginia Andrews",
  "Kelly Snyder",
];

function getStyles(name, personName, theme) {
  return {
    fontWeight:
      personName.indexOf(name) === -1
        ? theme.typography.fontWeightRegular
        : theme.typography.fontWeightMedium,
  };
}

export const RegisterEmployee = () => {
  const theme = useTheme();

  const [personName, setPersonName] = React.useState([]);

  const handleChange = (event) => {
    const {
      target: { value },
    } = event;
    setPersonName(
      // On autofill we get a stringified value.
      typeof value === "string" ? value.split(",") : value
    );
  };
  return (
    <Container maxWidth="lg">
      <form className="container-form">
        <Grid container spacing={2}>
          <Grid item xs={4}>
            <InputLabel htmlFor="component-outlined">
              Nombre de la empresa
            </InputLabel>
          </Grid>
          <Grid item xs={8}>
            <OutlinedInput
              style={{ width: 350 }}
              margin="dense"
              className="input1-form"
              id="component-outlined"
            />
          </Grid>
          <Grid item xs={4}>
            <InputLabel id="demo-multiple-name-label">Pais</InputLabel>
          </Grid>
          <Grid item xs={8}>
            <FormControl sx={{ m: 1, minWidth: 200 }}>
              <Select
                value={personName}
                onChange={handleChange}
                displayEmpty
                inputProps={{ "aria-label": "Without label" }}
                input={<OutlinedInput style={{ width: 350 }} />}
              >
                <MenuItem value="">
                  <span>Selecciona</span>
                </MenuItem>
                {names.map((name) => (
                  <MenuItem
                    className="select-pais"
                    key={name}
                    value={name}
                    style={getStyles(name, personName, theme)}
                  >
                    {name}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          </Grid>
          <Grid item xs={4}>
            <InputLabel htmlFor="component-outlined">
              Logo de la empresa
            </InputLabel>
          </Grid>
          <Grid item xs={8}>
            <Button variant="outlined" component="label">
              Seleccionar una imagen
              <input type="file" hidden />
            </Button>
          </Grid>
          <Grid item xs={4}>
            <InputLabel htmlFor="component-outlined">
              E-mail de la cuenta de administrador
            </InputLabel>
          </Grid>
          <Grid item xs={8}>
            <OutlinedInput
              style={{ width: 350 }}
              type="email"
              margin="dense"
              className="input1-form"
              id="component-outlined"
            />
          </Grid>
          <Grid item xs={4}>
            <InputLabel htmlFor="component-outlined">
              <LinkedInIcon color="primary" /> URL del perfil de tu empresa en
              Linkedin
            </InputLabel>
          </Grid>
          <Grid item xs={8}>
            <OutlinedInput
              type="text"
              style={{ width: 350 }}
              placeholder="http://www.linkedin.com/yourcompany"
              margin="dense"
              className="input1-form"
              id="component-outlined"
            />
          </Grid>
          <Grid item xs={4}>
            <InputLabel htmlFor="component-outlined">
              Sitio web de la empresa
            </InputLabel>
          </Grid>
          <Grid item xs={8}>
            <OutlinedInput
              type="text"
              style={{ width: 350 }}
              placeholder="http://"
              margin="dense"
              className="input1-form"
              id="component-outlined"
            />
          </Grid>
          <Grid item xs={4}>
            <InputLabel htmlFor="component-outlined">
              Descripción de la empresa
            </InputLabel>
          </Grid>
          <Grid item xs={8}>
            <OutlinedInput
              type="text"
              style={{ width: 350 }}
              multiline
              margin="dense"
              className="input1-form"
              id="component-outlined"
              rows={4}
            />
          </Grid>
          <div className="container-btnContact">
            <Button
              sx={{ mt: 2 }}
              type="submit"
              variant="contained"
              className="buttonRegister"
            >
              Crear cuenta
            </Button>
          </div>
        </Grid>
      </form>
    </Container>
  );
};
